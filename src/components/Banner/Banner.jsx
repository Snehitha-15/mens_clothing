// src/components/Banner/Banner.jsx
import React from "react";


const Banner = () => {
  return (
    <div className="hero-banner">
      <div className="hero-content">
        <h1>CREATE YOUR INDIVIDUALITY</h1>
        <p>Explore new arrivals, styles, and premium fabrics.</p>
        <button className="shop-btn">Shop Now</button>
      </div>
      <div className="offer-section">
        <div className="offer-card">
          <h3>NEW ARRIVALS</h3>
          <p>Latest designs just for you!</p>
        </div>
        <div className="offer-card">
          <h3>BIG CLEARANCE</h3>
          <p>Up to 50% off on selected styles.</p>
        </div>
      </div>
    </div>
  );
};

export default Banner;
