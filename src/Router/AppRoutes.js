// src/routes/AppRoutes.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "../components/Header/Header";
import Footer from "../footer/Footer";
import Shirts from "../Pages/shirts/Shirts"
// import HomePage from "../components/Header/Home"
import Banner from "../components/Banner/Banner";

const Home = () => <div className="p-4 text-center">🏠 Home Page
<Footer/>
</div>;
const Profile = () => <div className="p-4 text-center">👤 Profile Page</div>;
const Cart = () => <div className="p-4 text-center">🛒 Cart Page</div>;

const AppRoutes = () => (
  <Router>
    
    <Header />
    {/* <HomePage/> */}
  
    <Shirts/>
      <Banner/>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/cart" element={<Cart />} />
    </Routes>
  </Router>
);

export default AppRoutes;
