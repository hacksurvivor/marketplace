"""Simple placeholder search module demonstrating multi-mode AI search."""
from time import perf_counter
from .models import SearchQuery, SearchResponse, SearchMode


def search_items(query: SearchQuery) -> SearchResponse:
    start = perf_counter()

    if query.mode == SearchMode.INSTANT:
        steps = ["quick_lookup"]
        results = [f"Instant results for '{query.text}'"]
    elif query.mode == SearchMode.RESEARCH:
        steps = ["analyze_request", "collect_data", "synthesize"]
        results = [f"Research results for '{query.text}'"]
    else:
        steps = [
            "deep_analysis",
            "evaluate_market",
            "generate_recommendations",
        ]
        results = [f"Expert results for '{query.text}'"]

    elapsed = perf_counter() - start
    return SearchResponse(results=results, steps=steps, elapsed=elapsed)
