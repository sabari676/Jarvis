# Jarvis

A full offline Jarvis-style voice assistant project built with Python, HTML, CSS, and JavaScript.

Features:
- Flask backend
- Web interface for chat and voice input
- Offline text-to-speech using pyttsx3
- Basic command handling for time, date, jokes, browser opening, and app launching
- Local browser speech recognition support

Project structure:
- app.py - Python backend
- templates/index.html - frontend UI
- static/style.css - styling
- static/script.js - browser logic
- requirements.txt - dependencies

How to run:
1. Open a terminal in the project folder.
2. Create a virtual environment:
   python -m venv venv
3. Activate it:
   - Windows: venv\Scripts\activate
   - Linux/Mac: source venv/bin/activate
4. Install dependencies:
   pip install -r requirements.txt
5. Start the app:
   python app.py
6. Open this in your browser:
   http://localhost:5000

Notes:
- This project works offline for local commands and local speech output.
- Browser voice recognition depends on the browser and the device hardware.
- For live internet tasks like weather or online search, the app uses the browser and internet access.
