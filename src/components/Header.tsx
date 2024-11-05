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
  // position: sticky;
  // top: 0;
  // z-index: 1000;

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



  .search-cart {
    display: flex;
    align-items: center;

    .cart-icon, .person-icon, .search-icon {
      color: #fff;
      transition: color 0.3s;

      &:hover {
        color: #ddd;
      }
    }

    
     @media (max-width: 768px) {
    .person-icon {
      display: none;
    }


.menu-wrap{
display: flex;
flex-direction: column;

.menu-icon{
  display: none;
  }

    .searchin{
        color: #fff;
       transition: color 0.3s;
      display: none;

            &:hover {
               color: #ddd;
                   }
        @media (max-width: 768px) {
        .searchin{
         display: none;
                 }
       }
}


  
  @media (max-width: 768px) {
    .menu-icon {
      display: block;
    }

    .logo-section .company-name {
      font-size: 1.4rem;
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
        <div className="menu-wrap">
          <IconButton onClick={toggleMenu} className="menu-icon">
            <Menu style={{ color: "white" }} />
          </IconButton>

          <IconButton className="searchin">
            <Search style={{ color: "white" }} />
          </IconButton>
        </div>

        <div className="logo-section">
          <img src={logoImg} alt="Company Logo" />
          <div className="company-name">Ecom Shop</div>
        </div>

        <div className="search-cart">
          <IconButton className="search-icon">
            <Search />
          </IconButton>
          <IconButton className="person-icon">
            <Person />
          </IconButton>
          <IconButton className="cart-icon">
            <ShoppingCart />
          </IconButton>
        </div>
      </div>

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
