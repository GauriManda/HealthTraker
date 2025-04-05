// src/Components/Header.jsx
import React from "react";
import mindEaseLogo from "../assets/MindEase.png"; 
import "./Header.css"; 
const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <img src={mindEaseLogo} alt="MindEase" className="logo-image" />
      </div>
      <nav className="nav">
        <a href="#features">Features</a>
        <a href="#demo">Demo</a>
        <a href="#">Profile</a>
        <a href="#testimonials">Testimonials</a>
        <a href="#signup" className="cta-button">Sign Up</a>
      </nav>
    </header>
  );
};

export default Header;
