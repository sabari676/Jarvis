* {
  box-sizing: border-box;
}

body {
  margin: 0;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: radial-gradient(circle at top, #0b1f3a, #020714 55%);
  color: #edf6ff;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
}

.app-shell {
  width: min(90vw, 780px);
}

.glass-panel {
  background: rgba(18, 28, 46, 0.72);
  border: 1px solid rgba(139, 176, 255, 0.2);
  border-radius: 24px;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.45);
  backdrop-filter: blur(10px);
  padding: 28px;
}

.topbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 16px;
}

.eyebrow {
  margin: 0;
  letter-spacing: 0.22rem;
  color: #7fd2ff;
  font-size: 11px;
  text-transform: uppercase;
}

h1 {
  margin: 6px 0 0;
  font-size: clamp(2rem, 4vw, 3rem);
  letter-spacing: 0.2rem;
}

.primary-btn,
.send-btn {
  border: none;
  border-radius: 14px;
  padding: 12px 18px;
  font-weight: 700;
  cursor: pointer;
  transition: transform 0.2s ease, opacity 0.2s ease;
}

.primary-btn {
  background: linear-gradient(135deg, #66d9ff, #3d77ff);
  color: #07111d;
}

.send-btn {
  background: linear-gradient(135deg, #7ef3c7, #34d399);
  color: #041612;
}

.primary-btn:hover,
.send-btn:hover {
  transform: translateY(-1px);
}

.status-box {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 999px;
  padding: 8px 12px;
  margin-bottom: 18px;
  color: #cbe7ff;
}

.status-dot {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: #3ae47a;
  box-shadow: 0 0 14px #3ae47a;
}

.chat-box {
  min-height: 260px;
  max-height: 380px;
  overflow-y: auto;
  background: rgba(3, 8, 18, 0.4);
  border-radius: 18px;
  padding: 18px;
  border: 1px solid rgba(255, 255, 255, 0.06);
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.assistant-message,
.user-message {
  padding: 12px 16px;
  border-radius: 16px;
  max-width: 80%;
  line-height: 1.5;
}

.assistant-message {
  background: rgba(110, 181, 255, 0.12);
  border: 1px solid rgba(110, 181, 255, 0.18);
  align-self: flex-start;
}

.user-message {
  background: rgba(74, 222, 128, 0.14);
  border: 1px solid rgba(74, 222, 128, 0.2);
  align-self: flex-end;
}

.input-row {
  margin-top: 18px;
  display: flex;
  gap: 12px;
}

#commandInput {
  flex: 1;
  border-radius: 14px;
  border: 1px solid rgba(255, 255, 255, 0.12);
  background: rgba(7, 13, 24, 0.75);
  color: white;
  padding: 14px 16px;
  font-size: 1rem;
}

#commandInput:focus {
  outline: 2px solid rgba(102, 217, 255, 0.5);
}

@media (max-width: 600px) {
  .glass-panel {
    padding: 18px;
  }

  .topbar,
  .input-row {
    flex-direction: column;
    align-items: stretch;
  }

  .assistant-message,
  .user-message {
    max-width: 100%;
  }
}
