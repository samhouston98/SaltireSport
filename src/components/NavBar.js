import React from 'react';
import { Link } from 'react-router-dom';
import '../Styles/NavBar.css'; // Adjust path if needed

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
