import React from 'react';
import './SearchBar.css';

const SearchBar = () => {
  return (
    <section className="search-bar">
      <input type="text" placeholder="City" />
      <input type="date" />
      <input type="text" placeholder="Family size" />
      <button className="search-button">Search</button>
    </section>
  );
};

export default SearchBar;
