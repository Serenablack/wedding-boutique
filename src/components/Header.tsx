import React, { useEffect, useState } from "react";
import "./Header.css";

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`header ${isScrolled ? "scrolled" : ""}`}>
      <div className="container">
        <nav className="nav">
          <a href="#" className="logo">
            <img
              src="/images/logo.jpg"
              alt="Wedding Boutique Logo"
              className="logo-image"
            />
            <span className="logo-text">Wedding Boutique</span>
          </a>
          <a href="tel:580-786-5170" className="nav-phone">
            📞 (580) 786-5170
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
