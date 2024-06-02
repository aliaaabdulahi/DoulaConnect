import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './SearchBar.css';

const SearchBar = () => {
  const [location, setLocation] = useState('');
  const [date, setDate] = useState('');
  const [guests, setGuests] = useState('');
  const navigate = useNavigate();

  const handleSearch = () => {
    navigate(`/search?location=${location}&date=${date}&guests=${guests}`);
  };

  return (
    <section className="search-bar">
      <input 
        type="text" 
        placeholder="City" 
        value={location} 
        onChange={(e) => setLocation(e.target.value)} 
      />
      <input 
        type="date" 
        value={date} 
        onChange={(e) => setDate(e.target.value)} 
      />
      <input 
        type="text" 
        placeholder="Family size" 
        value={guests} 
        onChange={(e) => setGuests(e.target.value)} 
      />
      <button className="search-button" onClick={handleSearch}>Search</button>
    </section>
  );
};

export default SearchBar;
