import React from 'react';
import './Features.css';

const Features = () => {
  return (
    <section id="features" className="features-section">
      <h2>Why Rentmate?</h2>
      <div className="features-list">
        <div className="feature">
          <h3>Verified Listings</h3>
          <p>All rental properties are verified for authenticity.</p>
        </div>
        <div className="feature">
          <h3>Secure Payments</h3>
          <p>Safe and reliable rent payments through our platform.</p>
        </div>
        <div className="feature">
          <h3>Flexible Search</h3>
          <p>Find rooms and PGs based on location, price, and amenities.</p>
        </div>
      </div>
    </section>
  );
};

export default Features;
