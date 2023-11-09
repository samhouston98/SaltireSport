
import React from 'react';
import { Link } from 'react-router-dom'; // This will be used for navigation
import '../Styles/NavBar.css'; // Assuming you have CSS modules

const NavBar = () => {
  return (
    <nav className="navbar">
      <h1 className="navbar-title">Saltire Sport</h1>
      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/archives">Archives</Link>
        <Link to="/contact">Contact Us</Link>
      </div>
    </nav>
  );
};

export default NavBar;
