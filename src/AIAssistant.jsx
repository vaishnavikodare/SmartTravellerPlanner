import { useState } from "react"

function AIAssistant() {
  const [isOpen, setIsOpen] = useState(false)
  const [message, setMessage] = useState("")
  const [messages, setMessages] = useState([
    {
      sender: "ai",
      text: "Hi! 👋 I'm your Smart Traveller AI Assistant. How can I help you plan your trip?",
    },
  ])

  const handleSend = async () => {
    if (!message.trim()) return

    const currentMessage = message

    setMessages((prev) => [
      ...prev,
      {
        sender: "user",
        text: currentMessage,
      },
    ])

    setMessage("")

    try {
      const response = await fetch("http://localhost:5000/api/ai", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          message: currentMessage,
        }),
      })

      const data = await response.json()

      setMessages((prev) => [
        ...prev,
        {
          sender: "ai",
          text: data.reply,
        },
      ])
    } catch (error) {
      console.error("AI Error:", error)

      setMessages((prev) => [
        ...prev,
        {
          sender: "ai",
          text: "Sorry, I couldn't connect to the AI assistant right now. Please make sure the AI server is running. 🤖",
        },
      ])
    }
  }

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      handleSend()
    }
  }

  return (
    <>
      {/* Floating AI Button */}

      <button
        className="ai-floating-button"
        onClick={() => setIsOpen((prev) => !prev)}
        type="button"
        aria-label="Open AI Assistant"
      >
        🤖
      </button>

      {/* Chat Window */}

      {isOpen && (
        <div className="ai-floating-window">

          {/* Header */}

          <div className="ai-floating-header">

            <div className="ai-floating-title">

              <div className="ai-floating-avatar">
                🤖
              </div>

              <div>
                <h3>Smart Travel AI</h3>
                <span>● Online</span>
              </div>

            </div>

            <button
              className="ai-close-button"
              onClick={() => setIsOpen(false)}
              type="button"
            >
              ×
            </button>

          </div>

          {/* Messages */}

          <div className="ai-floating-messages">

            {messages.map((msg, index) => (
              <div
                key={index}
                className={`ai-floating-message ${
                  msg.sender === "user"
                    ? "ai-user-message"
                    : "ai-assistant-message"
                }`}
              >
                {msg.text}
              </div>
            ))}

          </div>

          {/* Input */}

          <div className="ai-floating-input">

            <input
              type="text"
              placeholder="Ask me anything..."
              value={message}
              onChange={(event) => setMessage(event.target.value)}
              onKeyDown={handleKeyDown}
            />

            <button
              type="button"
              onClick={handleSend}
            >
              ➤
            </button>

          </div>

        </div>
      )}
    </>
  )
}

export default AIAssistant