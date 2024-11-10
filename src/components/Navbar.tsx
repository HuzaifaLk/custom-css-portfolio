'use client';

import React, { useState } from 'react';
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import "../app/styles/navbar.css";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="navbar-div">
      <div className="navbar">
        <div className="navbar-brand">Muhammad Huzaifa</div>
        <ul className="navbar-links">
          <li className="navbar-link"><a href="/">Home</a></li>
          <li className="navbar-link"><a href="about">About</a></li>
          <li className="navbar-link"><a href="contact">Contact</a></li>
        </ul>
        <div className="navbar-menu-icon" onClick={toggleMenu}>
          {isMenuOpen ? <AiOutlineClose size={30} /> : <AiOutlineMenu size={30} />}
        </div>
      </div>

      {isMenuOpen && (
        <ul className="navbar-menu">
          <li className="navbar-link"><a href="/" onClick={toggleMenu}>Home</a></li>
          <li className="navbar-link"><a href="about" onClick={toggleMenu}>About</a></li>
          <li className="navbar-link"><a href="contact" onClick={toggleMenu}>Contact</a></li>
        </ul>
      )}
    </div>
  );
}

export default Navbar;
