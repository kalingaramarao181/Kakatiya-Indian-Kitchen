import React, { useState } from "react";
import "./Navbar.css";
import { FaSearch, FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="logo">
        <img className="kakatiya-logo" src="/images/kakatiya-logo.png" alt="Logo" />
      </div>

      {/* Hamburger Menu for Mobile */}
      <div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? <FaTimes /> : <FaBars />}
      </div>

      {/* Navigation Links */}
      <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
        <li><a href="#home">Home</a></li>
        <li><a href="#footer">Contact</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#rating">Rating</a></li>
        <li><a href="#reservation" className="btn-reserve">Reservation</a></li>
      </ul>

      {/* Search Box */}
      <div className="search-box">
        <input type="text" placeholder="Search..." />
        <FaSearch className="search-icon" />
      </div>
    </nav>
  );
};

export default Navbar;
