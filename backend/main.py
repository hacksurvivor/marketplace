from fastapi import FastAPI
from .search import search_items
from .models import SearchQuery, SearchResponse

app = FastAPI(title="AI-Powered Marketplace")

@app.post("/search", response_model=SearchResponse)
def search(query: SearchQuery):
    """Search marketplace items using AI-powered modes."""
    result = search_items(query)
    return result
