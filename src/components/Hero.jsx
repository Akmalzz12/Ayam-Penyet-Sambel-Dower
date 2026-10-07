import { useEffect, useState } from "react";

const heroImages = [
    "/images/banner1.png",
    "/images/banner2.png",
    "/images/banner3.png"
];

export default function Hero() {
    const [activeImage, setActiveImage] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveImage((prev) => (prev + 1) % heroImages.length);
        }, 5000);

        return () => clearInterval(interval);
    }, []);

    return (
        <section className="hero" id="home">

            {/* Background slideshow */}
            {heroImages.map((image, index) => (
                <div
                    key={image}
                    className={`hero-slide ${
                        index === activeImage ? "active" : ""
                    }`}
                    style={{
                        backgroundImage: `url("${image}")`
                    }}
                ></div>
            ))}

            <div className="hero-overlay"></div>

            <div className="hero-container">
                <div className="hero-content">
                    <span className="hero-label">
                        RUMAH MAKAN
                    </span>

                    <h1>
                        Ayam Penyet
                        <br />
                        <span>Sambel Dower</span>
                    </h1>

                    <h2>
                        Pedasnya nampol, gurihnya bikin nagih!
                    </h2>

                    <p>
                        Kami hadir membawa cita rasa ayam penyet yang gurih
                        dipadukan dengan sambal khas yang berani, pedas, dan
                        bikin nagih di setiap suapan.
                    </p>

                    <a href="#menu" className="hero-button">
                        Lihat Menu Unggulan
                    </a>
                </div>
            </div>

        </section>
    );
}