import React from 'react';
import './Categories.css';

const Categories = () => {
  return (
    <section className="categories">
      <h2>Doula Categories</h2>
      <div className="category-grid">
        <div className="category">
          <i className="fas fa-baby"></i>
          <p>Prenatal Care</p>
        </div>
        <div className="category">
          <i className="fas fa-baby-carriage"></i>
          <p>Postpartum Support</p>
        </div>
        <div className="category">
          <i className="fas fa-book"></i>
          <p>Educational Resources</p>
        </div>
        <div className="category">
          <i className="fas fa-calendar-check"></i>
          <p>Appointment Scheduling</p>
        </div>
        <div className="category emergency">
          <i className="fas fa-ambulance"></i>
          <p>Emergency Assistance</p>
        </div>
        <div className="category">
          <i className="fas fa-brain"></i>
          <p>Mental Health</p>
        </div>
      </div>
    </section>
  );
};

export default Categories;
