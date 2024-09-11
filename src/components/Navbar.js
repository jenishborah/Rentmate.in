import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        {/* Placeholder for your logo */}
        <img src="./logo.png" alt="Rentmate Logo" className="logo-img" />
        
      </div>
      <ul className="nav-links">
        <li><a href="#features">Features</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#contact">Contact</a></li>
        <li><button className="login-btn">Login</button></li>
      </ul>
    </nav>
  );
};

export default Navbar;
