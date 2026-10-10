import { useState } from "react";

const galleryCategories = [
    {
        id: "indoor",
        label: "Indoor",
        images: [
            {
                src: "/images/indoor1.png",
                alt: "Suasana area makan indoor Ayam Penyet Sambel Dower",
            },
            {
                src: "/images/indoor2.png",
                alt: "Area tempat duduk indoor restoran",
            },
        ],
    },
    {
        id: "outdoor",
        label: "Outdoor",
        images: [
            {
                src: "/images/outdor1.png",
                alt: "Suasana area makan outdoor",
            },
            {
                src: "/images/outdor2.png",
                alt: "Area outdoor Ayam Penyet Sambel Dower",
            },
        ],
    },
    {
        id: "parkir",
        label: "Tempat Parkir",
        images: [
            {
                src: "/images/parkir1.png",
                alt: "Area parkir restoran",
            },
            {
                src: "/images/parkir2.png",
                alt: "Area kendaraan pengunjung restoran",
            },
        ],
    },
];

export default function Gallery() {
    const [activeCategory, setActiveCategory] = useState("indoor");

    const selectedCategory = galleryCategories.find(
        (category) => category.id === activeCategory
    );

    return (
        <section className="gallery-section" id="gallery">
            <div className="gallery-container">
                
<div className="gallery-heading">
    <span className="gallery-eyebrow">
        KENALI TEMPAT KAMI
    </span>

    <h2>
        Suasana <span>Kami</span>
    </h2>

    <p>
        Lihat suasana tempat makan kami, dari area indoor
        hingga outdoor dan tempat parkir.
    </p>
</div>


                <div
                    className="gallery-tabs"
                    role="tablist"
                    aria-label="Kategori foto tempat"
                >
                    {galleryCategories.map((category) => (
                        <button
                            key={category.id}
                            type="button"
                            role="tab"
                            aria-selected={activeCategory === category.id}
                            className={`gallery-tab ${
                                activeCategory === category.id
                                    ? "active"
                                    : ""
                            }`}
                            onClick={() => setActiveCategory(category.id)}
                        >
                            {category.label}
                        </button>
                    ))}
                </div>

                <div
                    className="gallery-grid"
                    role="tabpanel"
                    key={selectedCategory.id}
                >
                    {selectedCategory.images.map((image) => (
                        <figure className="gallery-card" key={image.src}>
                            <img
                                src={image.src}
                                alt={image.alt}
                                loading="lazy"
                            />
                        </figure>
                    ))}
                </div>
            </div>
        </section>
    );
      }
