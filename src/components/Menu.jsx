import { useState } from "react";
import { products } from "../data/products";

function Menu() {
    const [activeCategory, setActiveCategory] = useState("makanan");

    return (
        <section className="menu-section" id="menu">
            <div className="menu-container">

                <div className="section-heading">
                    <span className="section-label">MENU KAMI</span>

                    <h2>
                        Menu <span>Unggulan</span>
                    </h2>

                    <p>
                        Pilihan menu favorit dengan ayam yang gurih, sambal khas
                        yang pedas, dan rasa yang bikin nagih.
                    </p>
                </div>

                <div className="menu-tabs">
    <button
        type="button"
        className={activeCategory === "makanan" ? "active" : ""}
        onClick={() => setActiveCategory("makanan")}
    >
        Makanan
    </button>

    <button
        type="button"
        className={activeCategory === "minuman" ? "active" : ""}
        onClick={() => setActiveCategory("minuman")}
    >
        Minuman
    </button>

    <button
        type="button"
        className={activeCategory === "pelengkap" ? "active" : ""}
        onClick={() => setActiveCategory("pelengkap")}
    >
        Pelengkap
    </button>

    <button
    type="button"
    className={activeCategory === "dessert" ? "active" : ""}
    onClick={() => setActiveCategory("dessert")}
>
    Dessert
</button>

    <button
    type="button"
    className={activeCategory === "paketan" ? "active" : ""}
    onClick={() => setActiveCategory("paketan")}
>
    Paketan
</button>
</div>

                <div className="menu-grid">
                    {products[activeCategory].map((product) => (
                        <div className="menu-card" key={product.name}>

                            <div className="menu-image">
                                <img
                                    src={product.image}
                                    alt={product.alt}
                                />

                                {product.badge && (
                                    <span
                                        className={`menu-badge ${product.badgeClass}`}
                                    >
                                        {product.badge}
                                    </span>
                                )}
                            </div>

                            <div className="menu-content">

                                <h3>{product.name}</h3>

                                <p>
                                    {product.description}
                                </p>

                                <div className="menu-bottom">

                                    <div className="menu-price">
                                        <small>Mulai dari</small>
                                        <strong>{product.price}</strong>
                                    </div>

                                    <a
                                        href="#reservation"
                                        className="menu-button"
                                    >
                                        Pesan Sekarang
                                    </a>

                                </div>

                            </div>

                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}

export default Menu;