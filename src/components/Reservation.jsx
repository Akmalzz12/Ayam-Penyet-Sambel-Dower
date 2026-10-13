
import { useState } from "react";

const SCRIPT_URL = "TEMPEL_URL_WEB_APP_DI_SINI";

export default function Reservation() {
    const [form, setForm] = useState({
        customerName: "",
        customerWhatsapp: "",
        orderDate: "",
        orderPeople: "",
        orderMenu: "",
        orderNotes: ""
    });

    const [status, setStatus] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = (event) => {
        const { id, value } = event.target;
        setForm((prev) => ({ ...prev, [id]: value }));
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (isSubmitting) return;

        if (SCRIPT_URL === "TEMPEL_URL_WEB_APP_DI_SINI") {
            setStatus("URL Google Sheets belum dipasang.");
            return;
        }

        setIsSubmitting(true);
        setStatus("");

        const data = {
            nama: form.customerName,
            whatsapp: form.customerWhatsapp,
            tanggalAcara: form.orderDate,
            jumlahOrang: form.orderPeople,
            pilihanMenu: form.orderMenu,
            deskripsi: form.orderNotes
        };

        try {
            await fetch(SCRIPT_URL, {
                method: "POST",
                mode: "no-cors",
                headers: {
                    "Content-Type": "text/plain;charset=utf-8"
                },
                body: JSON.stringify(data)
            });

            setStatus(
                "Permintaan telah dikirim. Periksa Google Sheets untuk memastikan pesanan tercatat."
            );
        } catch (error) {
            setStatus(
                "Pengiriman gagal. Periksa koneksi internet dan coba lagi."
            );
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section className="reservation-section" id="reservation">
            <div className="reservation-container">
                <div className="reservation-info">
                    <span className="section-label">PESAN SEKARANG</span>
                    <h2>
                        Siap Menikmati{" "}
                        <span>Ayam Sambel Dower?</span>
                    </h2>
                    <p>
                        Isi formulir pemesanan untuk mengirim data pesanan
                        langsung ke sistem reservasi kami.
                    </p>
                </div>

                <div className="reservation-card">
                    <div className="reservation-card-header">
                        <h3>Form Pemesanan</h3>
                        <p>Lengkapi data berikut untuk melanjutkan.</p>
                    </div>

                    <form id="reservationForm" onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="customerName">Nama</label>
                            <input
                                type="text"
                                id="customerName"
                                placeholder="Masukkan nama"
                                required
                                value={form.customerName}
                                onChange={handleChange}
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="customerWhatsapp">
                                Nomor WhatsApp
                            </label>
                            <input
                                type="tel"
                                id="customerWhatsapp"
                                placeholder="08xxxxxxxxxx"
                                required
                                value={form.customerWhatsapp}
                                onChange={handleChange}
                            />
                        </div>

                        <div className="form-row">
                            <div className="form-group">
                                <label htmlFor="orderDate">
                                    Tanggal Acara
                                </label>
                                <input
                                    type="date"
                                    id="orderDate"
                                    required
                                    min={
                                        new Date().toLocaleDateString("en-CA")
                                    }
                                    value={form.orderDate}
                                    onChange={handleChange}
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="orderPeople">
                                    Jumlah Orang
                                </label>
                                <select
                                    id="orderPeople"
                                    required
                                    value={form.orderPeople}
                                    onChange={handleChange}
                                >
                                    <option value="">Pilih jumlah</option>
                                    <option value="1–25 orang">
                                        1–25 orang
                                    </option>
                                    <option value="25–50 orang">
                                        25–50 orang
                                    </option>
                                    <option value="50–100 orang">
                                        50–100 orang
                                    </option>
                                    <option value="100+ orang">
                                        100+ orang
                                    </option>
                                </select>
                            </div>
                        </div>

                        <div className="form-group">
                            <label htmlFor="orderMenu">Pilihan Menu</label>
                            <select
                                id="orderMenu"
                                required
                                value={form.orderMenu}
                                onChange={handleChange}
                            >
                                <option value="">Pilih menu</option>
                                <option value="Ayam Penyet Geprek">
                                    Ayam Penyet Geprek
                                </option>
                                <option value="Ayam Penyet Mozarella">
                                    Ayam Penyet Mozarella
                                </option>
                                <option value="Ayam Penyet Sambel Matah">
                                    Ayam Penyet Sambel Matah
                                </option>
                                <option value="Ayam Bakar Penyet">
                                    Ayam Bakar Penyet
                                </option>
                            </select>
                        </div>

                        <div className="form-group">
                            <label htmlFor="orderNotes">Deskripsi</label>
                            <textarea
                                id="orderNotes"
                                rows="4"
                                placeholder="Tambahkan catatan jika diperlukan..."
                                value={form.orderNotes}
                                onChange={handleChange}
                            />
                        </div>

                        <button
                            type="submit"
                            className="reservation-button"
                            disabled={isSubmitting}
                        >
                            {isSubmitting
                                ? "Mengirim Pesanan..."
                                : "Kirim Pesanan"}
                        </button>

                        {status && (
                            <p className="reservation-note" role="status">
                                {status}
                            </p>
                        )}
                    </form>
                </div>
            </div>
        </section>
    );
}
