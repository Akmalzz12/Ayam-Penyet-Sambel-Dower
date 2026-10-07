import { useState } from "react";

export default function Reservation() {
    const [form, setForm] = useState({
        customerName: "", customerWhatsapp: "", orderDate: "",
        orderPeople: "", orderMenu: "", orderNotes: ""
    });

    const handleChange = event => {
        const { id, value } = event.target;
        setForm(prev => ({ ...prev, [id]: value }));
    };

    const handleSubmit = event => {
        event.preventDefault();
        const whatsappNumber = "6281234567890";
        const message = `Halo Ayam Penyet Sambel Dower,

Saya ingin melakukan pemesanan.

Nama: ${form.customerName}
No. WhatsApp: ${form.customerWhatsapp}
Tanggal: ${form.orderDate}
Jumlah: ${form.orderPeople}
Menu: ${form.orderMenu}
Catatan: ${form.orderNotes || "-"}

Mohon informasi dan konfirmasinya. Terima kasih.`;
        window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`, "_blank");
    };

    return (
        <section className="reservation-section" id="reservation">
            <div className="reservation-container">
                <div className="reservation-info">
                    <span className="section-label">PESAN SEKARANG</span>
                    <h2>Siap Menikmati <span>Ayam Sambel Dower?</span></h2>
                    <p>Isi formulir pemesanan di samping dan lanjutkan pesanan langsung melalui WhatsApp. Mudah, cepat, dan praktis.</p>
                </div>
                <div className="reservation-card">
                    <div className="reservation-card-header">
                        <h3>Form Pemesanan</h3>
                        <p>Lengkapi data berikut untuk melanjutkan.</p>
                    </div>
                    <form id="reservationForm" onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="customerName">Nama</label>
                            <input type="text" id="customerName" placeholder="Masukkan nama" required value={form.customerName} onChange={handleChange} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="customerWhatsapp">Nomor WhatsApp</label>
                            <input type="tel" id="customerWhatsapp" placeholder="08xxxxxxxxxx" required value={form.customerWhatsapp} onChange={handleChange} />
                        </div>
                        <div className="form-row">
                            <div className="form-group">
                                <label htmlFor="orderDate">Tanggal</label>
                                <input type="date" id="orderDate" required value={form.orderDate} onChange={handleChange} />
                            </div>
                            <div className="form-group">
                                <label htmlFor="orderPeople">Jumlah</label>
                                <select id="orderPeople" required value={form.orderPeople} onChange={handleChange}>
                                    <option value="">Pilih jumlah</option>
                                    <option value="1–25 orang">1–25 orang</option>
                                    <option value="25–50 orang">25–50 orang</option>
                                    <option value="50–100 orang">50–100 orang</option>
                                    <option value="100+ orang">100+ orang</option>
                                </select>
                            </div>
                        </div>
                        <div className="form-group">
                            <label htmlFor="orderMenu">Pilihan Menu</label>
                            <select id="orderMenu" required value={form.orderMenu} onChange={handleChange}>
                                <option value="">Pilih menu</option>
                                <option value="Ayam Penyet Geprek">Ayam Penyet Geprek</option>
                                <option value="Ayam Penyet Mozarella">Ayam Penyet Mozarella</option>
                                <option value="Ayam Penyet Sambel Matah">Ayam Penyet Sambel Matah</option>
                                <option value="Ayam Bakar Penyet">Ayam Bakar Penyet</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <label htmlFor="orderNotes">Catatan</label>
                            <textarea id="orderNotes" rows="4" placeholder="Tambahkan catatan jika diperlukan..." value={form.orderNotes} onChange={handleChange}></textarea>
                        </div>
                        <button type="submit" className="reservation-button">Pesan via WhatsApp</button>
                        <p className="reservation-note">Anda akan diarahkan ke WhatsApp untuk melanjutkan pesanan.</p>
                    </form>
                </div>
            </div>
        </section>
    );
}
