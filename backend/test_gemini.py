import os
from dotenv import load_dotenv
from pathlib import Path

ROOT_DIR = Path(__file__).parent
load_dotenv(ROOT_DIR / '.env')

gemini_api_key = os.environ.get('GEMINI_API_KEY')

if gemini_api_key:
    import google.generativeai as genai
    genai.configure(api_key=gemini_api_key)
    print("API key is working! 🎉")

    # --- Use a known working model ---
    working_model_name = "models/gemini-2.5-pro"
    print(f"\nUsing model: {working_model_name}")

    # --- HR Prompt ---
    hr_prompt = """
You are an HR interviewer conducting a campus placement round for a computer science candidate.

Instructions:

1. Start with the first question:
   "Tell me about yourself and your background in computer science."

2. After the candidate answers, generate 6 follow-up questions dynamically based on the candidate's domain and interests.

3. After all 7 questions:
   - Evaluate answers, assign scores (1 for good, 0 for bad)
   - Check if candidate passes (≥4/7)
   - Generate a detailed report: scores, strengths, weaknesses, feedback

Rules:
- Maintain context.
- Be professional, concise, and encouraging.
"""

    # --- Initialize model ---
    model = genai.GenerativeModel(working_model_name)
    conversation_history = hr_prompt

    # --- Interactive interview ---
    for i in range(7):
        response = model.generate_content(conversation_history)
        print("\nHR:", response.text.strip())
        candidate_answer = input("Candidate: ")
        conversation_history += f"\nCandidate answered: {candidate_answer}\nPlease evaluate and generate the next question (or final report if all questions answered)."

    # --- Final report ---
    final_response = model.generate_content(conversation_history)
    print("\nFinal HR Report:\n", final_response.text.strip())

else:
    print("GEMINI_API_KEY not found in environment variables.")
