from django.urls import path
from .views import ai_search

urlpatterns = [
    path('search/', ai_search, name='ai_search'),
]
