import React, { useState } from "react";
import "./header.css";
import logo from "./logo.png";
import { Link } from "react-router-dom";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="containerB">
      <nav className="navbar">
        <div className="navbar-logo">
          <img src={logo} alt="Livam Solutions Limited" className="logo" />
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
            <Link to="/">Home</Link>
          </li>

          <li>
            <Link to="/about">About</Link>
          </li>

          <li>
            <Link to="/services">Services</Link>
          </li>

          <li>
            <Link to="/contact">Contact</Link>
          </li>

          <li>
            <Link to="/gallery">Our Gallery</Link>
          </li>

          <li>
            <Link to="/blog">Blog</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;