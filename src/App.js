import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer/Footer";

// Pages
const Home = () => <div className="p-4 text-center">🏠 Home Page</div>;
const Profile = () => <div className="p-4 text-center">👤 Profile Page</div>;
const Cart = () => <div className="p-4 text-center">🛒 Cart Page</div>;
const Contact = () => <div className="p-4 text-center">📞 Contact Page</div>;

function App() {
  return (
    <Router>
      <div className="app-container">
        <main className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
