import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "../components/Header/Header";
import Footer from "../footer/Footer";
import Products from "../Pages/products/Products";

const Home = () => <Products />;
const Profile = () => <div className="p-4 text-center">👤 Profile Page</div>;
const Cart = () => <div className="p-4 text-center">🛒 Cart Page</div>;

const AppRoutes = () => (
  <Router>
    {/* Header will appear on all pages */}
    <Header />

    {/* Main content */}
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/cart" element={<Cart />} />
    </Routes>

    {/* Footer will appear on all pages */}
    <Footer />
  </Router>
);

export default AppRoutes;
