// src/routes/FooterRoutes.jsx
import React from "react";
import { Routes, Route, Router } from "react-router-dom";
import Footer from "../footer/Footer";

// Pages
const Home = () => <div className="p-4 text-center">🏠 Home Page</div>;
const Profile = () => <div className="p-4 text-center">👤 Profile Page</div>;
const Cart = () => <div className="p-4 text-center">🛒 Cart Page</div>;
const Contact = () => <div className="p-4 text-center">📞 Contact Page</div>;

const FooterRoutes = () => {
  return (
    <Router>
        <Footer/>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
    </Router>
  );
};

export default FooterRoutes;
