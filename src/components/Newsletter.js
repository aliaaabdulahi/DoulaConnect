import React from 'react';
import './Newsletter.css';

function Newsletter() {
  return (
    <section className="newsletter">
      <h2>Subscribe to our newsletter</h2>
      <input type="email" placeholder="your-email@example.com" />
      <button className="subscribe-button">Subscribe</button>
    </section>
  );
}

export default Newsletter;
