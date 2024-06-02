import React from 'react';
import './SearchResults.css';

const dummyData = [
  {
    id: 1,
    name: 'Doula Oasis',
    distance: '0.4 km from city center',
    environment: 'Comfortable Environment',
    rating: 9.6,
    price: 180,
    sessions: 1920,
    tags: ['#Certified', '#Top Pick']
  },
  {
    id: 2,
    name: 'Doula Haven',
    distance: '1.7 km from city center',
    environment: 'Comfortable Rooms',
    rating: 9.2,
    price: 450,
    sessions: 832,
    tags: ['#Certified']
  },
  {
    id: 3,
    name: 'Doula Haven Retreat',
    distance: '20 km from city center',
    environment: 'Private consultation room',
    rating: 8.0,
    price: 220,
    sessions: 1000,
    tags: ['#Popular']
  },
  {
    id: 4,
    name: 'Nurturing Touch Doula',
    distance: '22 km from city center',
    environment: 'Relaxing atmosphere',
    rating: 6.3,
    price: 60,
    sessions: 200,
    tags: ['#Hot deal', '#Popular']
  }
];

const SearchResults = () => {
  return (
    <div className="search-results-page">
      <aside className="filters">
        <h2>Your Results</h2>
        <div className="filter-section">
          <label>Location</label>
          <input type="text" placeholder="City" />
        </div>
        <div className="filter-section">
          <label>Start Date</label>
          <input type="date" />
        </div>
        <div className="filter-section">
          <label>End Date</label>
          <input type="date" />
        </div>
        <div className="filter-section">
          <label>Number of Guests</label>
          <input type="text" placeholder="Number of Guests" />
        </div>
        <button className="apply-filters-button">Apply Filters</button>
      </aside>
      <section className="search-results">
        <h2>Showing 140 Results</h2>
        <div className="results-grid">
          {dummyData.map(doula => (
            <div className="doula-card" key={doula.id}>
              <img src={`path/to/image${doula.id}.jpg`} alt={doula.name} />
              <div className="doula-info">
                <div className="doula-header">
                  <h3>{doula.name}</h3>
                  <p>Highly {doula.rating}</p>
                </div>
                <p>{doula.distance}</p>
                <p>{doula.environment}</p>
                <p>${doula.price} per session</p>
                <p>{doula.sessions} appointments</p>
                <div className="tags">
                  {doula.tags.map(tag => (
                    <span key={tag} className="tag">{tag}</span>
                  ))}
                </div>
                <button className="book-button">Book now</button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default SearchResults;
