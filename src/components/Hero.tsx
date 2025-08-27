import React from "react";
import "./Hero.css";

const Hero: React.FC = () => {
  return (
    <section className="hero">
      <div className="container">
        <div className="hero-content">
          <h1>Find Your Perfect Wedding Dress</h1>
          <p>
            Oklahoma's Premier Bridal Destination featuring Designer Collections
            in Duncan
          </p>
          <div className="hero-buttons">
            <a href="#contact" className="cta-button">
              Book Your Appointment
            </a>
            <a href="tel:580-786-5170" className="cta-button cta-secondary">
              Call Now
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
