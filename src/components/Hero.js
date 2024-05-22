import React from 'react';
import './Hero.css';
import heroImage from '../assets/images/hero-image.png';

const Hero = () => {
  return (
    <section className="hero" style={{ backgroundImage: `url(${heroImage})` }}>
      <div className="hero-overlay">
        <div className="hero-text">
          <h2>Connect with certified doulas</h2>
          <p>Discover top doulas near you!</p>
          <button className="explore-button">Explore</button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
