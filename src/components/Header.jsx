import React, { useState } from "react";
import "./header.css";
import logo from "./logo.png";
import { Link } from "react-router-dom";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <div className="containerB">
      <nav className="navbar">
        <div className="navbar-logo">
  <img src={logo} alt="Livam Solutions Limited" className="logo" />
  <div className="company-name">
    Livam Solutions Ltd
  </div>
</div>
        <button
          className={`menu-toggle ${isOpen ? "open" : ""}`}
          onClick={toggleMenu}
        >
          <span className={`menu-icon ${isOpen ? "open" : ""}`}>
            {isOpen ? "✖" : "☰"}
          </span>
        </button>

        <ul className={`navbar-links ${isOpen ? "open" : ""}`}>
          <li>
            <Link to="/" onClick={closeMenu}>Home</Link>
          </li>

          <li>
            <Link to="/about" onClick={closeMenu}>About</Link>
          </li>

          <li>
            <Link to="/services" onClick={closeMenu}>Services</Link>
          </li>

          <li>
            <Link to="/contact" onClick={closeMenu}>Contact</Link>
          </li>

          <li>
            <Link to="/gallery" onClick={closeMenu}>Our Gallery</Link>
          </li>

          <li>
            <Link to="/blog" onClick={closeMenu}>Blog</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;