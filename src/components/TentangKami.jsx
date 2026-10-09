import { Link } from "react-router-dom";

export default function TentangKami() {
return (
<main className="about-page">
<section className="about-page-hero">
<span className="section-label">CERITA KAMI</span>

            <h1>
                Tentang <span>Kami</span>
            </h1>

            <p>
                Mengenal lebih dekat Ayam Penyet Sambel Dower,
                tempat cita rasa gurih bertemu dengan sambal
                pedas yang bikin nagih.
            </p>

            <Link to="/" className="hero-button">
                Kembali ke Beranda
            </Link>
        </section>

        <section className="about-page-content">
            <div className="about-page-image">
                <img
                    src="/images/banner1.png"
                    alt="Hidangan Ayam Penyet Sambel Dower"
                />
            </div>

            <div className="about-page-text">
                <span className="section-label">SIAPA KAMI?</span>

                <h2>Pedasnya Punya Cerita</h2>

                <p>
                    Ayam Penyet Sambel Dower hadir untuk menyajikan
                    hidangan ayam penyet dengan perpaduan ayam yang
                    gurih dan sambal khas yang menggugah selera.
                </p>

                <p>
                    Kami percaya bahwa makanan yang nikmat bukan
                    hanya soal rasa, tetapi juga tentang pengalaman
                    makan yang menyenangkan bersama keluarga,
                    sahabat, dan orang-orang terdekat.
                </p>
            </div>
        </section>
    </main>
);

}