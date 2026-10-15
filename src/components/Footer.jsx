export default function Footer() {
    return (
        <footer className="footer" id="contact">
            <div className="footer-container">
                <div className="footer-main">
                    <div className="footer-brand">
                        <a href="#home" className="footer-logo-link">
                            <img src="/images/logo.png" alt="Ayam Penyet Sambel Dower" className="footer-logo" />
                        </a>
                        <p>Cita rasa ayam penyet yang gurih dipadukan dengan sambal khas yang pedas dan bikin nagih.</p>
                    </div>
                    <div className="footer-column">
                        <h3>Kontak Kami</h3>
                        <a href="#" className="footer-contact"><span>Alamat</span><p>Jl. Ciputat Raya, Gg Bendi Raya, Kebayoran Lama Utara, Jakarta Selatan</p></a>
                        <a href="https://wa.me/6281234567890" className="footer-contact"><span>WhatsApp</span><p>0896-3630-3141</p></a>
                        <a href="mailto:ayampenyetdower@gmail.com" className="footer-contact"><span>Email</span><p>ayampenyetdower@gmail.com</p></a>
                    </div>
                    <div className="footer-column">
                        <h3>Jam Operasional</h3>
                        <div className="footer-hours">
                            <div><span>Senin - Sabtu</span><strong>10.00 - 22.00</strong></div>
                            <div><span>Minggu</span><strong>10.00 - 21.00</strong></div>
                        </div>
                    </div>
                    <div className="footer-column">
                        <h3>Ikuti Kami</h3>
                        <div className="footer-social"><a href="#" aria-label="Instagram">Instagram</a><a href="#" aria-label="TikTok">TikTok</a></div>
                        <p className="footer-social-text">Temukan informasi dan promo terbaru dari Ayam Penyet Sambel Dower.</p>
                    </div>
                </div>
                <div className="footer-bottom">
                    <p>© 2026 Ayam Penyet Sambel Dower. All rights reserved.</p>
                    <a href="#home">Kembali ke atas</a>
                </div>
            </div>
        </footer>
    );
}
