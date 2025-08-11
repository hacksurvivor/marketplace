import React, { useState, useRef } from 'react';

type Mode = 'instant' | 'research' | 'expert';

interface SearchResponse {
  mode: Mode;
  query: string;
  steps: string[];
  result: string;
}

const defaultResponse: SearchResponse = {
  mode: 'instant',
  query: '',
  steps: [],
  result: ''
};

export default function AgenticSearch() {
  const [mode, setMode] = useState<Mode>('instant');
  const [query, setQuery] = useState('');
  const [response, setResponse] = useState<SearchResponse>(defaultResponse);
  const [loading, setLoading] = useState(false);
  const fileInput = useRef<HTMLInputElement>(null);

  const submit = async () => {
    if (!query.trim()) return;
    setLoading(true);
    const res = await fetch('/api/search', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ query, mode })
    });
    const data: SearchResponse = await res.json();
    setResponse(data);
    setLoading(false);
  };

  const handleImage = () => {
    fileInput.current?.click();
  };

  return (
    <div className="agentic-card">
      <div className="controls">
        <input
          type="text"
          value={query}
          onChange={e => setQuery(e.target.value)}
          placeholder="Ask anything..."
        />
        <div className="buttons">
          <button onClick={handleImage} title="Image search">🖼️</button>
          <button onClick={submit} disabled={loading} title="Submit">
            {loading ? '...' : '➡️'}
          </button>
        </div>
      </div>
      <div className="modes">
        {['instant', 'research', 'expert'].map(m => (
          <label key={m}>
            <input
              type="radio"
              name="mode"
              value={m}
              checked={mode === m}
              onChange={() => setMode(m as Mode)}
            />
            {m}
          </label>
        ))}
      </div>
      <input
        type="file"
        ref={fileInput}
        style={{ display: 'none' }}
        accept="image/*"
      />
      {response.result && (
        <div className="response">
          <h2>Answer</h2>
          <p>{response.result}</p>
          {response.steps.length > 0 && (
            <ul className="steps">
              {response.steps.map((s, i) => (
                <li key={i}>{s}</li>
              ))}
            </ul>
          )}
        </div>
      )}
    </div>
  );
}
