import React from 'react';
import './BestDoulas.css';
import bestDoula1 from '../assets/images/best-doula-1.jpeg';
import bestDoula2 from '../assets/images/best-doula-2.jpeg';
import bestDoula3 from '../assets/images/best-doula-3.jpeg';

const BestDoulas = () => {
  return (
    <section className="best-doulas">
      <h2>Best doulas this week</h2>
      <div className="best-doulas-grid">
        <div className="doula-card">
          <div className="doula-image-container red-border">
            <img src={`${bestDoula1}`} alt="Doula 1" />
          </div>
          <div className="doula-info">
            <h3>Postpartum Support</h3>
            <p>from $150</p>
          </div>
        </div>
        <div className="doula-card pink-background">
          <div className="doula-image-container">
            <img src={`${bestDoula2}`} alt="Doula 2" />
          </div>
          <div className="doula-info">
            <h3>Prenatal Care</h3>
            <p>from $120</p>
          </div>
        </div>
        <div className="doula-card blue-background">
          <div className="doula-image-container">
          <img src={`${bestDoula3}`} alt="Doula 3" />
          </div>
          <div className="doula-info">
            <h3>Educational</h3>
            <p>from $80</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BestDoulas;
