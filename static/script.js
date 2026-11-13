const chatBox = document.getElementById('chatBox');
const commandForm = document.getElementById('commandForm');
const commandInput = document.getElementById('commandInput');
const listenBtn = document.getElementById('listenBtn');
const statusText = document.getElementById('statusText');

function addMessage(message, isUser = false) {
  const messageDiv = document.createElement('div');
  messageDiv.className = isUser ? 'user-message' : 'assistant-message';
  messageDiv.textContent = message;
  chatBox.appendChild(messageDiv);
  chatBox.scrollTop = chatBox.scrollHeight;
}

async function sendCommand(text) {
  if (!text.trim()) return;

  addMessage(text, true);
  commandInput.value = '';
  statusText.textContent = 'Processing command...';

  try {
    const response = await fetch('/api/assistant', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ text })
    });

    const data = await response.json();
    addMessage(data.response, false);
    speakText(data.response);
    statusText.textContent = 'Ready for voice input';
  } catch (error) {
    addMessage('Sorry, I could not process that command.', false);
    statusText.textContent = 'Connection error';
  }
}

commandForm.addEventListener('submit', async (event) => {
  event.preventDefault();
  await sendCommand(commandInput.value);
});

function speakText(message) {
  const SpeechSynthesis = window.speechSynthesis;
  if (!SpeechSynthesis) return;

  const utterance = new SpeechSynthesisUtterance(message);
  utterance.rate = 1;
  utterance.pitch = 1;
  utterance.lang = 'en-US';
  SpeechSynthesis.cancel();
  SpeechSynthesis.speak(utterance);
}

function setupVoiceRecognition() {
  const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

  if (!SpeechRecognition) {
    statusText.textContent = 'This browser does not support speech recognition';
    listenBtn.disabled = true;
    return;
  }

  const recognition = new SpeechRecognition();
  recognition.lang = 'en-US';
  recognition.interimResults = false;
  recognition.continuous = false;

  recognition.onstart = () => {
    statusText.textContent = 'Listening...';
  };

  recognition.onresult = (event) => {
    const transcript = event.results[0][0].transcript;
    sendCommand(transcript);
  };

  recognition.onerror = () => {
    statusText.textContent = 'Could not hear you clearly';
  };

  recognition.onend = () => {
    statusText.textContent = 'Ready for voice input';
  };

  listenBtn.addEventListener('click', () => recognition.start());
}

setupVoiceRecognition();
