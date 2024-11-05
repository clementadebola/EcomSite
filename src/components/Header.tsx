import React, { useState } from "react";
import styled from "styled-components";
import { IconButton } from "@mui/material";
import { ShoppingCart, Menu, Search, Person, Close } from "@mui/icons-material";
import { NavLink, Link } from "react-router-dom";
import logoImg from "../assets/logo.png";

const HeaderSection = styled.header`
  display: flex;
  flex-direction: column;
  background-color: #000;
  padding: 10px;

  .header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px 20px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.5);
  }

  .logo-section {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.75rem;

    img {
      width: 50px;
      height: auto;
    }

    .company-name {
      font-size: 1.8rem;
      font-weight: bold;
      color: #fff;
    }
  }

  .menu-icon,
  .search-icon,
  .cart-icon,
  .person-icon {
    color: #fff;
    transition: color 0.3s;

    &:hover {
      color: #ddd;
    }
  }

  .menu-wrap {
    display: flex;
    align-items: center;
    gap: 1rem;

    .menu-icon {
      display: none;
    }
    .search-icon {
      display: block;
    }

    @media (max-width: 768px) {
      .menu-icon {
        display: block;
      }
      .search-icon {
        display: none;
      }
    }
  }

  .search-cart {
    display: flex;
    align-items: center;
    gap: 1rem;

    .cart-icon,
    .search-icon {
      color: #fff;
    }
  }

  @media (max-width: 768px) {
    .desktop-search {
      display: none;
    }
    .person-icon {
      display: none;
    }
  }
`;

const NavLinks = styled.nav<{ isOpen: boolean }>`
  display: ${(props) => (props.isOpen ? "flex" : "none")};
  flex-direction: column;
  position: absolute;
  top: 20%;
  right: 0;
  align-items: center;
  justify-content: center;
  width: 100%;
  background-color: #222;
  padding: 1rem;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.5);
  z-index: 10;
  transition: all 0.3s ease;

  a {
    color: white;
    text-decoration: none;
    font-weight: 500;
    padding: 0.75rem 0;
    font-size: 1.2rem;

    &:hover {
      text-decoration: underline;
      color: #ddd;
    }
  }

  @media (min-width: 769px) {
    display: flex;
    flex-direction: row;
    position: static;
    height: auto;
    background-color: transparent;
    padding: 0;
    gap: 2rem;
  }
`;

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <HeaderSection>
      <div className="header">
        {/* Left Section */}
        <div className="menu-wrap">
          {/* Menu Icon (only visible on mobile) */}
          <IconButton onClick={toggleMenu} className="menu-icon">
            {isMenuOpen ? <Close style={{ color: "white" }} /> : <Menu style={{ color: "white" }} />}
          </IconButton>

          {/* Search Icon (only visible on desktop) */}
          <IconButton className="desktop-search">
            <Search style={{ color: "white" }} />
          </IconButton>
        </div>

        {/* Logo Section */}
        <div className="logo-section">
          <img src={logoImg} alt="Company Logo" />
          <div className="company-name">Ecom Shop</div>
        </div>

        {/* Right Section */}
        <div className="search-cart">
          {/* Search Icon (visible on mobile) */}
          <IconButton className="search-icon">
            <Search />
          </IconButton>

          {/* Cart Icon */}
          <IconButton className="cart-icon">
            <ShoppingCart />
          </IconButton>

          {/* Person Icon (only visible on desktop) */}
          <IconButton className="person-icon">
            <Person />
          </IconButton>
        </div>
      </div>

      {/* Navigation Links */}
      <NavLinks isOpen={isMenuOpen}>
        <NavLink to="/aboutus">About Us</NavLink>
        <NavLink to="/privacy">Privacy</NavLink>
        <NavLink to="/contactus">Contact Us</NavLink>
        <NavLink to="/login">Login</NavLink>
      </NavLinks>
    </HeaderSection>
  );
};

export default Header;
