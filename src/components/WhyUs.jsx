const reasons = [
    [
        "/images/sambal.png",
        "Sambal Khas yang Nampol",
        "Sambal dower dengan cita rasa pedas yang berani dan khas, cocok untuk pencinta pedas."
    ],
    [
        "/images/ayam.png",
        "Ayam Gurih & Berkualitas",
        "Ayam dipilih dengan baik dan diolah hingga menghasilkan rasa gurih dan tekstur yang nikmat."
    ],
    [
        "/images/fresh.png",
        "Dibuat Fresh",
        "Setiap pesanan disiapkan dengan bahan yang segar agar rasa dan kualitas tetap terjaga."
    ],
    [
        "/images/price.png",
        "Harga Bersahabat",
        "Rasa mantap dengan harga yang tetap terjangkau, cocok untuk makan sendiri maupun bersama."
    ]
];

export default function WhyUs() {
    return (
        <section className="why-section" id="why-us">
            <div className="why-container">
                <div className="section-heading">
                    <span className="section-label">KENAPA KAMI?</span>

                    <h2>
                        Kenapa Pilih <span>Kami?</span>
                    </h2>

                    <p>
                        Bukan cuma soal pedas. Kami mengutamakan rasa, kualitas,
                        dan kepuasan di setiap sajian.
                    </p>
                </div>

                <div className="why-grid">
                    {reasons.map(([icon, title, text]) => (
                        <div className="why-card" key={title}>
                            <div className="why-icon">
                                <img src={icon} alt="" />
                            </div>

                            <div className="why-content">
                                <h3>{title}</h3>
                                <p>{text}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}