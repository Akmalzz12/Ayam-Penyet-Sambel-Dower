
import { useState } from "react";

const SCRIPT_URL = "https://script.google.com/macros/s/AKfycbzqvkS5AgMEHQlYxspdvGBVUDsna4Zv155nXWa5slOGl3q08pKaU1L7-osh2ZM-aXhR/exec";

export default function Chatbot() {
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([
    {
      role: "bot",
      text: "Halo! 👋 Selamat datang di Ayam Penyet Sambel Dower. Ada yang bisa saya bantu?"
    }
  ]);
  const [loading, setLoading] = useState(false);

  async function sendMessage(e) {
    e.preventDefault();

    const text = message.trim();
    if (!text || loading) return;

    setMessages(prev => [...prev, { role: "user", text }]);
    setMessage("");
    setLoading(true);

    try {
      const response = await fetch(SCRIPT_URL, {
        method: "POST",
        headers: {
          "Content-Type": "text/plain;charset=utf-8"
        },
        body: JSON.stringify({ message: text })
      });

      const data = await response.json();

      if (!response.ok || !data.success) {
        throw new Error(data.error || "Gagal mendapatkan jawaban.");
      }

      setMessages(prev => [
        ...prev,
        { role: "bot", text: data.reply }
      ]);
    } catch (error) {
      setMessages(prev => [
        ...prev,
        {
          role: "bot",
          text: "Maaf, chatbot sedang mengalami kendala. Silakan coba lagi."
        }
      ]);
      console.error("Chatbot error:", error);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="chatbot">
      {open && (
        <section className="chatbot-panel">
          <header className="chatbot-header">
            <div>
              <strong>Asisten Dower</strong>
              <small>AI Customer Service</small>
            </div>
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Tutup chatbot"
            >
              ×
            </button>
          </header>

          <div className="chatbot-messages" aria-live="polite">
            {messages.map((item, index) => (
              <div
                key={index}
                className={`chatbot-bubble ${item.role}`}
              >
                {item.text}
              </div>
            ))}
            {loading && (
              <div className="chatbot-bubble bot">
                Sedang mengetik...
              </div>
            )}
          </div>

          <form className="chatbot-form" onSubmit={sendMessage}>
            <input
              value={message}
              onChange={e => setMessage(e.target.value)}
              placeholder="Tulis pesan..."
              aria-label="Pesan untuk chatbot"
              disabled={loading}
            />
            <button type="submit" disabled={loading || !message.trim()}>
              Kirim
            </button>
          </form>
        </section>
      )}

      <button
        type="button"
        className="chatbot-toggle"
        onClick={() => setOpen(value => !value)}
        aria-label={open ? "Tutup chatbot" : "Buka chatbot"}
      >
        {open ? "×" : "💬"}
      </button>
    </div>
  );
              }
