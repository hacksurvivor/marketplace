from backend.models import SearchQuery, SearchMode
from backend.search import search_items


def test_instant_search():
    query = SearchQuery(text="bike", mode=SearchMode.INSTANT)
    result = search_items(query)
    assert "Instant" in result.results[0]
    assert result.steps == ["quick_lookup"]


def test_expert_search():
    query = SearchQuery(text="apartment", mode=SearchMode.EXPERT)
    result = search_items(query)
    assert "Expert" in result.results[0]
    assert "deep_analysis" in result.steps
