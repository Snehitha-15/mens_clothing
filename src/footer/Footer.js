import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import "./footer.css";

const Footer = () => {
  const cartItems = useSelector(state => state.cart?.items ?? []);

  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-section">
          <h4>Company</h4>
          <Link to="/">About Us</Link>
          <Link to="/">Contact</Link>
          <Link to="/">Careers</Link>
        </div>
        <div className="footer-section">
          <h4>Support</h4>
          <Link to="/">FAQ</Link>
          <Link to="/">Shipping</Link>
          <Link to="/">Returns</Link>
        </div>
        <div className="footer-section">
          <h4>Cart</h4>
          <p>{cartItems.length} items in cart</p>
          <Link to="/cart">Go to Cart</Link>
        </div>
      </div>
      <div className="footer-bottom">
        © 2025 Men’s Clothing Brand. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
