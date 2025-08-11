# AI-Powered Marketplace

This project provides a minimal prototype for an AI-driven marketplace search
engine. It exposes a FastAPI service with a `/search` endpoint supporting three
modes of AI assistance:

- **Instant** – quick lookup with minimal reasoning
- **Research** – multi-step analysis pipeline
- **Expert** – deep analysis with market recommendations

## Getting Started

```bash
pip install -r requirements.txt
uvicorn backend.main:app --reload
```

## Running Tests

```bash
pytest
```
