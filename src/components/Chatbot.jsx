import { useEffect, useRef, useState } from "react";

const SUGGESTIONS = [
    "Menu dan harganya apa saja?",
    "Jam buka restoran kapan?",
    "Ada promo apa sekarang?",
    "Bagaimana cara reservasi?"
];

const INITIAL_MESSAGES = [
    {
        role: "model",
        text: "Halo! 👋 Aku Dower AI, asisten virtual Ayam Penyet Sambel Dower. Mau tanya menu, harga, jam operasional, atau cara reservasi?"
    }
];

export default function Chatbot() {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState(INITIAL_MESSAGES);
    const [input, setInput] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState("");
    const listRef = useRef(null);
    const inputRef = useRef(null);

    useEffect(() => {
        if (isOpen && listRef.current) {
            listRef.current.scrollTop = listRef.current.scrollHeight;
        }
    }, [messages, isLoading, isOpen]);

    useEffect(() => {
        if (isOpen) inputRef.current?.focus();
    }, [isOpen]);

    async function sendMessage(text = input) {
        const message = text.trim();
        if (!message || isLoading) return;

        const priorMessages = messages
            .filter((item) => item.role === "user" || item.role === "model")
            .slice(-10)
            .map((item) => ({
                role: item.role,
                parts: [{ text: item.text }]
            }));

        setMessages((current) => [...current, { role: "user", text: message }]);
        setInput("");
        setIsLoading(true);
        setError("");

        try {
            const response = await fetch("/api/chat", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    message,
                    history: priorMessages
                })
            });

            const data = await response.json().catch(() => ({}));
            if (!response.ok) {
                throw new Error(data.error || "Chatbot sedang tidak bisa menjawab.");
            }

            setMessages((current) => [
                ...current,
                { role: "model", text: data.reply || "Maaf, aku belum bisa menjawab saat ini." }
            ]);
        } catch (err) {
            setError(
                err.message === "Failed to fetch"
                    ? "Tidak bisa terhubung ke server. Pastikan website sudah di-deploy ke Vercel."
                    : err.message || "Terjadi gangguan. Coba lagi sebentar."
            );
        } finally {
            setIsLoading(false);
        }
    }

    function handleSubmit(event) {
        event.preventDefault();
        sendMessage();
    }

    return (
        <div className="dower-chatbot">
            {isOpen && (
                <section className="dower-chat-window" aria-label="Chat Dower AI">
                    <header className="dower-chat-header">
                        <div className="dower-chat-avatar" aria-hidden="true">
                            <svg viewBox="0 0 24 24" fill="none">
                                <path d="M4 5.5A2.5 2.5 0 0 1 6.5 3h11A2.5 2.5 0 0 1 20 5.5v8a2.5 2.5 0 0 1-2.5 2.5H11l-5 4v-4.1A2.5 2.5 0 0 1 4 13.5v-8Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round"/>
                                <path d="M8 8h8M8 11.5h5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
                            </svg>
                        </div>
                        <div className="dower-chat-title">
                            <strong>Dower AI</strong>
                            <span><i /> Asisten virtual</span>
                        </div>
                        <button
                            className="dower-chat-close"
                            type="button"
                            aria-label="Tutup chat"
                            onClick={() => setIsOpen(false)}
                        >×</button>
                    </header>

                    <div className="dower-chat-messages" ref={listRef} aria-live="polite">
                        <div className="dower-chat-date">ASISTEN AYAM PENYET SAMBEL DOWER</div>
                        {messages.map((item, index) => (
                            <div className={`dower-chat-row ${item.role === "user" ? "from-user" : "from-bot"}`} key={`${index}-${item.role}`}>
                                {item.role === "model" && <span className="dower-message-avatar">D</span>}
                                <div className="dower-chat-bubble">{item.text}</div>
                            </div>
                        ))}
                        {isLoading && (
                            <div className="dower-chat-row from-bot">
                                <span className="dower-message-avatar">D</span>
                                <div className="dower-chat-bubble dower-typing" aria-label="Sedang mengetik">
                                    <span /><span /><span />
                                </div>
                            </div>
                        )}
                        {error && <p className="dower-chat-error" role="alert">{error}</p>}
                    </div>

                    {messages.length === 1 && !isLoading && (
                        <div className="dower-chat-suggestions">
                            {SUGGESTIONS.map((suggestion) => (
                                <button type="button" key={suggestion} onClick={() => sendMessage(suggestion)}>
                                    {suggestion}
                                </button>
                            ))}
                        </div>
                    )}

                    <form className="dower-chat-form" onSubmit={handleSubmit}>
                        <input
                            ref={inputRef}
                            type="text"
                            value={input}
                            onChange={(event) => setInput(event.target.value)}
                            placeholder="Tulis pertanyaan..."
                            aria-label="Tulis pesan"
                            maxLength={2000}
                            disabled={isLoading}
                        />
                        <button type="submit" aria-label="Kirim pesan" disabled={!input.trim() || isLoading}>
                            <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
                                <path d="m21 3-7.2 18-3.9-7.9L2 9.2 21 3Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round"/>
                                <path d="M10 13 21 3" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
                            </svg>
                        </button>
                    </form>
                    <div className="dower-chat-footnote">Jawaban AI dapat keliru. Konfirmasi detail penting ke admin.</div>
                </section>
            )}

            <button
                className={`dower-chat-launcher ${isOpen ? "is-open" : ""}`}
                type="button"
                aria-label={isOpen ? "Tutup Dower AI" : "Buka Dower AI"}
                aria-expanded={isOpen}
                onClick={() => setIsOpen((current) => !current)}
            >
                {isOpen ? (
                    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
                        <path d="m6 6 12 12M18 6 6 18" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round"/>
                    </svg>
                ) : (
                    <>
                        <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
                            <path d="M4 5.5A2.5 2.5 0 0 1 6.5 3h11A2.5 2.5 0 0 1 20 5.5v8a2.5 2.5 0 0 1-2.5 2.5H11l-5 4v-4.1A2.5 2.5 0 0 1 4 13.5v-8Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round"/>
                            <path d="M8 8h8M8 11.5h5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
                        </svg>
                        <span>Chat dengan kami</span>
                    </>
                )}
            </button>
        </div>
    );
}
