import React, { useEffect, useRef } from "react";
import "./BridalGallery.css";

const BridalGallery: React.FC = () => {
  const galleryRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in");
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px",
      }
    );

    galleryRef.current.forEach((item) => {
      if (item) observer.observe(item);
    });

    return () => observer.disconnect();
  }, []);

  const bridalDresses = [
    {
      id: 1,
      name: "Elegant A-Line Gown",
      description: "Timeless silhouette with intricate beading",
      image: "/images/bridal dress/bridal_dress1.jpg",
    },
    {
      id: 2,
      name: "Romantic Ball Gown",
      description: "Princess-style with flowing tulle skirt",
      image: "/images/bridal dress/bridal_dress2.jpg",
    },
    {
      id: 3,
      name: "Modern Mermaid Dress",
      description: "Contemporary fit with lace details",
      image: "/images/bridal dress/bridal_dress3.jpg",
    },
    {
      id: 4,
      name: "Boho Lace Gown",
      description: "Free-spirited design with vintage charm",
      image: "/images/bridal dress/bridal_dress4.jpg",
    },
    {
      id: 5,
      name: "Classic Sheath Dress",
      description: "Sophisticated simplicity at its finest",
      image: "/images/bridal dress/bridal_dress5.jpg",
    },
    {
      id: 6,
      name: "Luxury Designer Gown",
      description: "Haute couture with premium fabrics",
      image: "/images/bridal dress/bridal_dress6.jpg",
    },
  ];

  return (
    <section className="bridal-gallery">
      <div className="container">
        <h2 className="section-title animate-fade-in">
          Bridal Dress Collection
        </h2>
        <p className="section-subtitle animate-fade-in">
          Discover our stunning selection of wedding dresses for every style and
          budget
        </p>

        <div className="gallery-grid">
          {bridalDresses.map((dress, index) => (
            <div
              key={dress.id}
              className="gallery-item"
              ref={(el) => {
                galleryRef.current[index] = el;
              }}>
              <div className="gallery-image">
                <img src={dress.image} alt={dress.name} />
                <div className="gallery-overlay">
                  <div className="gallery-content">
                    <h4>{dress.name}</h4>
                    <p>{dress.description}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="gallery-cta">
          <a href="#contact" className="cta-button">
            Schedule Your Fitting
          </a>
        </div>
      </div>
    </section>
  );
};

export default BridalGallery;
