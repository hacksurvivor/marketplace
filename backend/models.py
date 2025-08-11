from enum import Enum
from typing import List
from pydantic import BaseModel

class SearchMode(str, Enum):
    INSTANT = "instant"
    RESEARCH = "research"
    EXPERT = "expert"

class SearchQuery(BaseModel):
    text: str
    mode: SearchMode = SearchMode.INSTANT

class SearchResponse(BaseModel):
    results: List[str]
    steps: List[str]
    elapsed: float
