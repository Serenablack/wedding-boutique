import React, { useEffect, useRef } from "react";
import "./About.css";

const About: React.FC = () => {
  const aboutRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-slide-right");
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px",
      }
    );

    if (aboutRef.current) {
      observer.observe(aboutRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section className="about section-light">
      <div className="container">
        <div className="about-grid" ref={aboutRef}>
          <div className="about-image">
            <img
              src="/images/bridal dress/bridal_dress1.jpg"
              alt="Luxury bridal collection"
            />
          </div>
          <div className="about-content">
            <h3>The Ultimate Bridal Experience</h3>
            <p>
              Since 1993, Wedding Boutique has been making brides happy with our
              exceptional selection and personalized service. We're Oklahoma's
              premier bridal destination located in Duncan.
            </p>

            <ul className="features-list">
              <li>Premium Designer Collections</li>
              <li>Expert Styling Consultations</li>
              <li>Complete Bridal Party Solutions</li>
              <li>Convenient Duncan Location</li>
              <li>Tuxedo Rentals Available</li>
              <li>Gown Preservation Services</li>
            </ul>

            <a href="#contact" className="cta-button">
              Schedule Your Visit
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
