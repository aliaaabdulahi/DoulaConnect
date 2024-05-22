import React from 'react';
import './FeaturedDoula.css';
import featured1 from '../assets/images/featured-1.jpeg';
import featured2 from '../assets/images/featured-2.jpeg';
import featured3 from '../assets/images/featured-3.jpeg';


const FeaturedDoula = () => {
  return (
    <section className="featured-doula">
      <h2>Featured Doula</h2>
      <div className="featured-content">
        <div className="doula-info">
          <div className="price">$100/session</div>
          <button className="explore-button">Explore now</button>
        </div>
        <div className="doula-images">
          <div className="small-images">
            <img src={`${featured1}`} alt="Doula 1" />
            <img src={`${featured2}`} alt="Doula 2" />
          </div>
          <img src={`${featured3}`} alt="Doula 3" className="large-image" />
        </div>
      </div>
    </section>
  );
};

export default FeaturedDoula;
