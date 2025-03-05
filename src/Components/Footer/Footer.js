import React from "react";

import "./Footer.css";

const Footer = () => {
  return (
    <footer id="footer" className="footer-section">
      <div className="footer-container">
        <div className="footer-column">
          <h3 className="footer-title">KAKATIYA INDIAN KITCHEN</h3>
          <p className="footer-text">
          Experience the finest dining with exquisite cuisine and exceptional service. 
          Our restaurant offers a variety of dishes, from fresh seafood to mouth-watering steaks.
          </p>
          <div className="footer-icons">
            <span role="img" aria-label="bird">
              🐦
            </span>
            <span role="img" aria-label="camera">
              📷
            </span>
            <span role="img" aria-label="phone">
              📱
            </span>
            <span role="img" aria-label="printer">
              🖨️
            </span>
          </div>
        </div>

        <div className="footer-column">
          <h3 className="footer-title">Our Location</h3>
          <p className="footer-text">
          2905 Jordan Ct A, Alpharetta, GA 30004, United States
          </p>
          <p className="footer-text">+1 234 567 890</p>
          <a  target="_blank" rel="noopener noreferrer" href="https://maps.app.goo.gl/YvpYvn85J9BVFypF8" className="footer-link">
            Get Directions
          </a>
        </div>

        <div className="footer-column">
          <h3 className="footer-title">Quick Links</h3>
          <ul className="footer-links">
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#about">About Us</a>
            </li>
            <li>
              <a href="#services">Services</a>
            </li>
            <li>
              <a href="#portfolio">Portfolio</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </div>

        <div className="footer-column">
          <h3 className="footer-title">Opening Hours</h3>
          <p className="footer-text">
            <strong>Sunday to Wednesday:</strong> 9AM - 10:30PM
          </p>
          <p className="footer-text">
            <strong>Thursday, Friday, Saturday:</strong> 9AM - 12:30AM
          </p>
          <button className="reservation-btn">Reservation</button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
