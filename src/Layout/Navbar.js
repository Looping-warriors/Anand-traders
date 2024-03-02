import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../Assets/anand-logo.jpg";
import "../css/Navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="Navbar">
      <div>
        <img className="nav-image" src={logo}></img>
        <span className="nav-logo">Anand Traders</span>
      </div>
      <div className={`nav-items ${isOpen && "open"}`}>
        <Link to="/home">Home</Link>
        <Link to="/about">About Us</Link>
        <Link to="/process">Process</Link>
        <Link to="/products">Products</Link>
        <Link to="/contact">Contact Us</Link>
      </div>
      <div
        className={`nav-toggle ${isOpen && "open"}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="bar"></div>
      </div>
    </div>
  );
};

export default Navbar;
