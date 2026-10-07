import { useState } from "react";

const faqItems = [
    ["Apakah bisa pesan untuk dibawa pulang?", "Bisa. Semua menu dapat dipesan untuk dibawa pulang dan akan disiapkan dengan baik agar tetap nikmat saat sampai di tujuan."],
    ["Apakah bisa pesan dalam jumlah banyak?", "Bisa. Kami menerima pesanan dalam jumlah banyak untuk acara keluarga, kumpul bersama, maupun berbagai kebutuhan lainnya."],
    ["Apakah tingkat kepedasan sambalnya bisa disesuaikan?", "Tingkat kepedasan dapat disesuaikan dengan ketersediaan pilihan yang kami sediakan. Silakan tuliskan permintaan saat melakukan pemesanan."],
    ["Bagaimana cara melakukan pemesanan?", "Pilih menu yang diinginkan, kemudian klik tombol Pesan Sekarang. Anda akan diarahkan ke WhatsApp untuk melanjutkan detail pesanan."],
    ["Apakah tersedia paket untuk acara atau rombongan?", "Tersedia. Untuk pesanan acara atau rombongan, Anda dapat menghubungi kami terlebih dahulu agar menu dan jumlah pesanan dapat disesuaikan."]
];

export default function FAQ() {
    const [activeIndex, setActiveIndex] = useState(null);

    return (
        <section className="faq-section" id="faq">
            <div className="faq-container">
                <div className="section-heading">
                    <span className="section-label">FAQ</span>
                    <h2>Pertanyaan yang <span>Sering Ditanyakan</span></h2>
                    <p>Beberapa pertanyaan yang sering ditanyakan sebelum memesan Ayam Penyet Sambel Dower.</p>
                </div>
                <div className="faq-list">
                    {faqItems.map(([question, answer], index) => {
                        const active = activeIndex === index;
                        return (
                            <div className={`faq-item${active ? " active" : ""}`} key={question}>
                                <button className="faq-question" type="button" onClick={() => setActiveIndex(active ? null : index)} aria-expanded={active}>
                                    <span>{question}</span>
                                    <span className="faq-arrow">+</span>
                                </button>
                                <div className="faq-answer" style={{ maxHeight: active ? "500px" : "0px" }}>
                                    <p>{answer}</p>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
