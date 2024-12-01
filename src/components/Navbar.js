import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = ({ currentIndex }) => {
  return (
    <nav className="navbar">
      <ul className="navbar-links">
        <li><Link to="/home" state={{ currentIndex }}>Home</Link></li>
        <li><Link to="/about" state={{ currentIndex }}>About</Link></li>
        <li><Link to="/projects" state={{ currentIndex }}>Projects</Link></li>
        <li><Link to="/contact" state={{ currentIndex }}>Contact</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;

