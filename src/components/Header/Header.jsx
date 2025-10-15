// src/components/Header/Header.jsx
import React, { useState } from "react";
import {
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
  Input,
  Button,
  Collapse,
} from "reactstrap";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import "./Header.css";

// ✅ React Icons (Font Awesome)
import { FaShoppingCart, FaUser, FaSearch } from "react-icons/fa";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { totalAmount } = useSelector((state) => state.cart || { totalAmount: 0 });
  const { isLoggedIn, name } = useSelector((state) => state.user || {});

  return (
    <Navbar expand="md" className="header-nav px-4 py-2 shadow-sm">
      <NavbarBrand tag={Link} to="/" className="brand-logo d-flex align-items-center">
        <span className="brand-title">Men’s</span>
        <span className="brand-sub ms-1">Clothing</span>
      </NavbarBrand>

      {/* Toggler for Mobile View */}
      <Button className="navbar-toggler" onClick={() => setIsOpen(!isOpen)}>
        ☰
      </Button>

      <Collapse isOpen={isOpen} navbar>
        <Nav className="ms-auto align-items-center" navbar>
          {/* Search Bar */}
          <NavItem className="search-container d-flex align-items-center me-3">
            <Input
              type="search"
              placeholder="Search for products..."
              className="search-input"
            />
            <Button color="light" className="search-btn ms-1">
              <FaSearch size={16} />
            </Button>
          </NavItem>

          {/* Cart */}
          <NavItem>
            <Link to="/cart" className="nav-link d-flex align-items-center">
              <FaShoppingCart size={18} />
              <span className="ms-1">${totalAmount?.toFixed(2) || "0.00"}</span>
            </Link>
          </NavItem>

          {/* Profile / Account */}
          <NavItem>
            <Link to="/profile" className="nav-link d-flex align-items-center">
              <FaUser size={18} />
              <span className="ms-1">{isLoggedIn ? name : "Account"}</span>
            </Link>
          </NavItem>
        </Nav>
      </Collapse>
    </Navbar>
  );
};

export default Header;
