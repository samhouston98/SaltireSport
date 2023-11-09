import React from 'react';
import '../Styles/Header.css';

const Header = ({ title }) => {
  return (
    <header className="header">
      <h1>{title}</h1>
      {/* Add navigation or other header content here */}
    </header>
  );
};

export default Header;
