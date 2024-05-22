import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="logo-container">
        <h1 className="logo">DoulaConnect</h1>
      </div>
      <nav className="nav-links">
        <button>Search</button>
        <button>Profiles</button>
        <button>Book</button>
        <button>FAQs</button>
        <input type="text" placeholder="Search for doulas" />
      </nav>
    </header>
  );
};

export default Header;
