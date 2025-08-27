import React from "react";
import "./Footer.css";

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h4>Wedding Boutique</h4>
            <p>
              Oklahoma's premier bridal destination since 1993. Making brides
              happy with exceptional selection and personalized service.
            </p>
          </div>
          <div className="footer-section">
            <h4>Duncan Location</h4>
            <p>
              815 W Walnut Ave
              <br />
              Duncan, OK 73533
              <br />
              (580) 555-0123
            </p>
          </div>
          <div className="footer-section">
            <h4>Hours</h4>
            <p>
              Tuesday - Friday: 10 AM - 6 PM
              <br />
              Saturday: 10 AM - 5 PM
              <br />
              Closed Sunday & Monday
              <br />
              <em>By Appointment Only</em>
            </p>
          </div>
        </div>

        <div className="footer-bottom">
          <p>
            &copy; 2024 Wedding Boutique. All rights reserved. |
            <a href="#" className="footer-link">
              {" "}
              Privacy Policy
            </a>{" "}
            |
            <a href="#" className="footer-link">
              {" "}
              Terms of Service
            </a>
          </p>
          <p className="footer-note">
            Website designed for demonstration purposes - showcasing modern
            bridal boutique web design
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
