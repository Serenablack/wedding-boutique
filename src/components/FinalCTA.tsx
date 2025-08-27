import React, { useEffect, useRef } from "react";
import "./FinalCTA.css";

const FinalCTA: React.FC = () => {
  const ctaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-bounce-in");
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px",
      }
    );

    if (ctaRef.current) {
      observer.observe(ctaRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section className="final-cta" id="contact">
      <div className="container">
        <div className="cta-content" ref={ctaRef}>
          <h2>Ready to Say Yes to the Dress?</h2>
          <p>
            Book your personalized consultation today and let us help you find
            the wedding dress of your dreams.
          </p>
          <div className="cta-buttons">
            <a href="tel:580-786-5170" className="cta-button">
              📞 Call Now: (580) 786-5170
            </a>

            <a
              href="https://www.facebook.com/profile.php?id=100063508935412"
              className="cta-button cta-secondary"
              target="_blank"
              rel="noopener noreferrer">
              📘 Visit Our Facebook
            </a>
          </div>

          <p className="cta-footer">
            Follow us on social media for the latest collections and real bride
            features
            <span className="business-highlights">
              LGBTQ+ Friendly • Women-Owned • In-Store Pickup • Delivery
              Available
            </span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
