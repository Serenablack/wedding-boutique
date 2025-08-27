import React, { useEffect, useRef } from "react";
import "./Services.css";

const Services: React.FC = () => {
  const servicesRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-slide-up");
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px",
      }
    );

    servicesRef.current.forEach((service) => {
      if (service) observer.observe(service);
    });

    return () => observer.disconnect();
  }, []);

  const services = [
    {
      id: 1,
      icon: "👰",
      title: "Bridal Gowns",
      description: "Stunning wedding dresses from top designers",
      image: "/images/bridal_dress1.jpg",
    },
    {
      id: 2,
      icon: "👯",
      title: "Bridesmaid Dresses",
      description: "Perfect matches for your bridal party",
      image: "/images/bridesmaids.jpg",
    },
    {
      id: 3,
      icon: "👩",
      title: "Mother of Bride/Groom",
      description: "Elegant options for special mothers",
      image: "/images/healthy_bride.jpg",
    },
    {
      id: 4,
      icon: "🧚",
      title: "Flower Girl Dresses",
      description: "Adorable styles for your little ones",
      image: "/images/bridal dress/bridal_dress5.jpg",
    },
    {
      id: 5,
      icon: "🤵",
      title: "Tuxedo Rentals",
      description: "Complete formal wear for grooms",
      image: "/images/couple_dress.jpg",
    },
    {
      id: 6,
      icon: "✨",
      title: "Gown Preservation",
      description: "Protect your precious memories",
      image: "/images/bridal dress/bridal_dress6.jpg",
    },
  ];

  return (
    <section className="services section-light">
      <div className="container">
        <h2 className="section-title animate-fade-in">
          Complete Bridal Solutions
        </h2>
        <p className="section-subtitle animate-fade-in">
          Everything you need for your perfect wedding day
        </p>

        <div className="services-grid">
          {services.map((service, index) => (
            <div
              key={service.id}
              className="service-card"
              ref={(el) => {
                servicesRef.current[index] = el;
              }}>
              <div className="service-image">
                <img src={service.image} alt={service.title} />
              </div>
              <div className="service-icon">{service.icon}</div>
              <h4>{service.title}</h4>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
