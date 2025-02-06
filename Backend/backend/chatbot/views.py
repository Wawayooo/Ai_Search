from django.shortcuts import render
from rest_framework.decorators import api_view
from rest_framework.response import Response
import requests
import os

# Load Bing Search API key from environment variables
BING_API_KEY = os.environ.get('BING_API_KEY')

@api_view(['POST'])
def ai_search(request):
    query = request.data.get('query', '')
    if query:
        headers = {
            'Ocp-Apim-Subscription-Key': BING_API_KEY,
        }
        response = requests.get(f'https://api.bing.microsoft.com/v7.0/search?q={query}', headers=headers)

        data = response.json()
        if 'webPages' in data and 'value' in data['webPages']:
            # Assuming the abstract you need is in the first search result's snippet
            abstract = data['webPages']['value'][0].get('snippet', '')
            if abstract:
                return Response({'Answer': abstract})
            else:
                return Response({'AI RESPONSE': "That is out of my knowledge. Please try another thing to search. Thank you."})
        else:
            return Response({'AI RESPONSE': "No Response"})
    return Response({'error': 'No query provided'}, status=400)

