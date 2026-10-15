import { useEffect, useState } from "react";

export default function BackToTop() {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => setVisible(window.scrollY > 300);
        window.addEventListener("scroll", handleScroll);
        handleScroll();
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <button className={`back-to-top${visible ? " show" : ""}`} type="button" aria-label="Kembali ke atas"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
            <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M6 14L12 8L18 14"></path>
            </svg>
        </button>
    );
}
