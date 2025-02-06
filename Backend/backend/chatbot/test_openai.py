import openai
import os

# Load OpenAI API key
OPENAI_API_KEY = os.getenv("OPENAI_API_KEY")
openai.api_key = OPENAI_API_KEY

try:
    response = openai.ChatCompletion.create(
        model="gpt-4",
        messages=[
            {"role": "user", "content": "write a haiku about AI"}
        ]
    )
    answer = response['choices'][0]['message']['content'].strip()
    print(f"API Response: {answer}")
except openai.error.AuthenticationError as e:
    print(f"Authentication Error: {str(e)}")
except openai.error.APIConnectionError as e:
    print(f"API Connection Error: {str(e)}")
except openai.error.RateLimitError as e:
    print(f"Rate Limit Error: {str(e)}")
except openai.error.OpenAIError as e:
    print(f"OpenAI Error: {str(e)}")
except Exception as e:
    print(f"Unexpected Error: {str(e)}")
