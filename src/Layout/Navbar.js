import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../Assets/anand-logo.jpg";
import "../css/Navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <div className={`Navbar ${scrolled && "scrollnav"}`}>
        <div className='logo'>
          <img
            className='nav-image'
            src={logo}
          ></img>
          <span className='nav-logo'>
            <span>Anand</span> Traders
          </span>
        </div>
        <div className={`nav-items ${isOpen && "open"}`}>
          <NavLink to='/home'>Home</NavLink>
          <NavLink to='/about'>About Us</NavLink>
          <NavLink to='/process'>Process</NavLink>
          <NavLink to='/products'>Products</NavLink>
          <NavLink to='/contact'>Contact Us</NavLink>
        </div>
        <div
          className={`nav-toggle ${isOpen && "open"}`}
          onClick={() => setIsOpen(!isOpen)}
        >
          <div className='bar'></div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
