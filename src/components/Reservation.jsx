
import { useState } from "react";

const INITIAL_FORM = {
    customerName: "",
    customerWhatsapp: "",
    orderDate: "",
    orderPeople: "",
    orderMenu: "",
    orderNotes: ""
};

// GANTI dengan URL Web App Google Apps Script milik lu.
const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbz7Tt-ZYN9F_5VRPOBYc5lMN-PdpXaBYZsBx_Nz2-dgwmGXUSlqUfHueN15gXUkNHz-/exec";

export default function Reservation() {
    const [form, setForm] = useState(INITIAL_FORM);
    const [status, setStatus] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [showSuccess, setShowSuccess] = useState(false);

    const handleChange = (event) => {
        const { id, value } = event.target;
        setForm((prev) => ({ ...prev, [id]: value }));
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (isSubmitting) return;

        if (
            !GOOGLE_SCRIPT_URL.startsWith("https://script.google.com/")
        ) {
            setStatus("URL Google Sheets belum dikonfigurasi.");
            return;
        }

        setIsSubmitting(true);
        setStatus("");

        const payload = {
            nama: form.customerName.trim(),
            whatsapp: form.customerWhatsapp.trim(),
            tanggal_acara: form.orderDate,
            jumlah_orang: form.orderPeople,
            pilihan_menu: form.orderMenu,
            deskripsi: form.orderNotes.trim()
        };

        try {
            // no-cors digunakan karena endpoint Apps Script
            // tidak selalu mengizinkan pembacaan respons lintas origin.
            const response = await fetch(GOOGLE_SCRIPT_URL, {
                method: "POST",
                mode: "no-cors",
                headers: {
                    "Content-Type": "text/plain;charset=utf-8"
                },
                body: JSON.stringify(payload)
            });

            // Respons opaque dari no-cors tidak dapat memastikan
            // bahwa Google Sheets berhasil menyimpan data.
            setForm({ ...INITIAL_FORM });
            setShowSuccess(true);
        } catch (error) {
            console.error("Gagal mengirim reservasi:", error);
            setStatus(
                "Pengiriman gagal. Periksa koneksi internet lalu coba lagi."
            );
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section className="reservation-section" id="reservation">
            <div className="reservation-container">
                <div className="reservation-info">
                    <span className="section-label">
                        PESAN SEKARANG
                    </span>

                    <h2>
                        Siap Menikmati{" "}
                        <span>Ayam Sambel Dower?</span>
                    </h2>

                    <p>
                        Isi formulir pemesanan di samping untuk
                        mengirimkan pesanan Anda dengan mudah.
                    </p>
                </div>

                <div className="reservation-card">
                    <div className="reservation-card-header">
                        <h3>Form Pemesanan</h3>
                        <p>
                            Lengkapi data berikut untuk melanjutkan.
                        </p>
                    </div>

                    <form
                        id="reservationForm"
                        onSubmit={handleSubmit}
                    >
                        <div className="form-group">
                            <label htmlFor="customerName">Nama</label>
                            <input
                                type="text"
                                id="customerName"
                                placeholder="Masukkan nama"
                                required
                                maxLength={120}
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
                                minLength={8}
                                maxLength={20}
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
                                    min={
                                        new Date(
                                            Date.now() -
                                            new Date().getTimezoneOffset() *
                                            60000
                                        ).toISOString().slice(0, 10)
                                    }
                                    required
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
                                    <option value="1–25 orang">1–25 orang</option>
                                    <option value="25–50 orang">25–50 orang</option>
                                    <option value="50–100 orang">50–100 orang</option>
                                    <option value="100+ orang">100+ orang</option>
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
                                <option value="Paket Geprekin">Paket Geprekin</option>
                                <option value="Paket Mozain">Paket Mozain</option>
                                <option value="Paket Matahin">Paket Matahin</option>
                                <option value="Paket Bakarin">Paket Bakarin</option>
                            </select>
                        </div>

                        <div className="form-group">
                            <label htmlFor="orderNotes">Deskripsi</label>
                            <textarea
                                id="orderNotes"
                                rows="4"
                                maxLength={2000}
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
                            <p className="reservation-note" role="alert">
                                {status}
                            </p>
                        )}
                    </form>
                </div>
            </div>

            {showSuccess && (
                <div
                    className="success-modal-overlay"
                    onClick={() => setShowSuccess(false)}
                >
                    <div
                        className="success-modal"
                        role="dialog"
                        aria-modal="true"
                        aria-labelledby="success-title"
                        onClick={(event) => event.stopPropagation()}
                    >
                        <div className="success-icon">
                            <svg
                                viewBox="0 0 52 52"
                                fill="none"
                                aria-hidden="true"
                            >
                                <circle
                                    cx="26"
                                    cy="26"
                                    r="24"
                                    stroke="currentColor"
                                    strokeWidth="2.5"
                                />
                                <path
                                    d="M15 26.5L22.5 34L37.5 18"
                                    stroke="currentColor"
                                    strokeWidth="3.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>
                        </div>

                        <h3 id="success-title">
                            Permintaan Terkirim
                        </h3>
                        <p>
                            Permintaan pengiriman sudah dilakukan.
                            Silakan periksa Google Sheets untuk memastikan
                            pesanan tercatat.
                        </p>
                        <button
                            type="button"
                            className="success-modal-button"
                            onClick={() => setShowSuccess(false)}
                        >
                            Tutup
                        </button>
                    </div>
                </div>
            )}
        </section>
    );
            }
