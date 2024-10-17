import React, { useState } from "react";
import styled from "styled-components";
import {
  Container,
  Grid,
  Typography,
  Button,
  Card,
  CardContent,
  CardMedia,
  TextField,
  IconButton,
} from "@mui/material";
import { ShoppingCart, Menu } from "@mui/icons-material";
import { NavLink } from "react-router-dom";
import Footer from "../components/Footer";
import GlobalStyles from "../styles/Globalstyles.ts";
import backgroundImg from "../assets/background.jpeg";
import logoImg from "../assets/logo.png";

// Hero Section styling with background image
const HeroSection = styled.section`
  background-image: url(${backgroundImg});
  background-size: cover;
  background-position: center;
  height: 80vh;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 2rem;

  @media (max-width: 768px) {
    height: 100vh;
    padding: 1rem;
    background-position: top;
    justify-content: center;
  }
`;

// Header styling for logo, search, and cart
const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  .logo-section {
    display: flex;
    align-items: center;
    gap: 1rem;

    img {
      width: 50px;
      height: auto;
    }

    .company-name {
      font-size: 1.5rem;
      font-weight: bold;
    }
  }

  .search-cart {
    display: flex;
    align-items: center;
    gap: 1rem;

    .search-bar {
      background-color: white;
      border-radius: 4px;
      overflow: hidden;
      input {
        padding: 0.5rem;
      }
    }

    .cart-icon {
      color: white;
    }

    @media (max-width: 768px) {
      margin-top: 1rem;
      width: 100%;
      justify-content: space-between;
      flex-direction: column;
      align-items: center;
    }
  }

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

// Navigation Links styling
const NavLinks = styled.nav<{ isOpen: boolean }>`
  display: ${(props) => (props.isOpen ? "flex" : "none")};
  flex-direction: column;
  gap: 1rem;
  margin-top: 1rem;
  align-items: center;

  a {
    color: white;
    text-decoration: none;
    font-weight: 500;
    &:hover {
      text-decoration: underline;
    }
  }

  @media (min-width: 769px) {
    display: flex;
    flex-direction: row;
    justify-content: center;
    gap: 2rem;
  }
`;

// Hero content styling
const HeroContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  h1 {
    font-size: 3rem;
    font-weight: bold;
  }

  h6 {
    font-size: 1.5rem;
    margin-bottom: 1.5rem;
  }

  @media (max-width: 768px) {
    h1 {
      font-size: 2.5rem;
    }

    h6 {
      font-size: 1.2rem;
    }
  }
`;

// Styled Button for Hero Section
const HeroButton = styled(Button)`
  background-color: #ff6f61;
  color: white;
  font-weight: bold;
  padding: 12px 24px;
  font-size: 1.2rem;
  &:hover {
    background-color: #ff8a70;
  }

  @media (max-width: 768px) {
    font-size: 1rem;
    padding: 10px 20px;
  }
`;

// Featured Products Section styling
const FeaturedSection = styled.section`
  padding: 4rem 0;
  background-color: #f9f9f9;

  h2 {
    text-align: center;
    margin-bottom: 2rem;
  }
`;

// Product Card Wrapper styling
const ProductCardWrapper = styled(Card)`
  transition: transform 0.3s ease-in-out;
  &:hover {
    transform: scale(1.05);
  }

  .MuiCardMedia-root {
    height: 250px;
  }

  .MuiCardContent-root {
    text-align: center;
  }
`;

const Home: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <>
      <GlobalStyles />
      {/* Hero Section */}
      <HeroSection>
        <Header>
          <div className="logo-section">
            <img src={logoImg} alt="Company Logo" />
            <div className="company-name">Ecom Shop</div>
          </div>

          {/* Search Bar and Cart Icon */}
          <div className="search-cart">
            <TextField
              className="search-bar"
              variant="outlined"
              size="small"
              placeholder="Search products..."
            />
            <IconButton className="cart-icon">
              <ShoppingCart />
            </IconButton>
            {/* Menu Button for Mobile View */}
            <IconButton onClick={toggleMenu}>
              <Menu style={{ color: "white" }} />
            </IconButton>
          </div>
        </Header>

        {/* Navigation Links */}
        <NavLinks isOpen={isMenuOpen}>
          <NavLink to="/aboutus">About Us</NavLink>
          <NavLink to="/privacy">Privacy</NavLink>
          <NavLink to="/contactus">Contact Us</NavLink>
          <NavLink to="/login">Login</NavLink>
        </NavLinks>

        {/* Hero Content */}
        <HeroContent>
          <Typography variant="h2" component="h1" gutterBottom>
            Discover Amazing Products
          </Typography>
          <Typography variant="h6" gutterBottom>
            Shop the latest trends and get exclusive deals, all in one place.
          </Typography>
          <HeroButton variant="contained">Shop Now</HeroButton>
        </HeroContent>
      </HeroSection>

      {/* Featured Products Section */}
      <FeaturedSection>
        <Container maxWidth="lg">
          <Typography variant="h4" component="h2" gutterBottom>
            Featured Products
          </Typography>
          <Grid container spacing={4}>
            <Grid item xs={12} sm={6} md={4}>
              <ProductCardWrapper>
                <CardMedia
                  component="img"
                  image="/images/product1.jpg"
                  title="Product 1"
                />
                <CardContent>
                  <Typography variant="h6">Product 1</Typography>
                  <Typography variant="body2" color="textSecondary">
                    $99.99
                  </Typography>
                </CardContent>
              </ProductCardWrapper>
            </Grid>

            <Grid item xs={12} sm={6} md={4}>
              <ProductCardWrapper>
                <CardMedia
                  component="img"
                  image="/images/product2.jpg"
                  title="Product 2"
                />
                <CardContent>
                  <Typography variant="h6">Product 2</Typography>
                  <Typography variant="body2" color="textSecondary">
                    $89.99
                  </Typography>
                </CardContent>
              </ProductCardWrapper>
            </Grid>

            <Grid item xs={12} sm={6} md={4}>
              <ProductCardWrapper>
                <CardMedia
                  component="img"
                  image="/images/product3.jpg"
                  title="Product 3"
                />
                <CardContent>
                  <Typography variant="h6">Product 3</Typography>
                  <Typography variant="body2" color="textSecondary">
                    $79.99
                  </Typography>
                </CardContent>
              </ProductCardWrapper>
            </Grid>
          </Grid>
        </Container>
      </FeaturedSection>

      {/* Footer Section */}
      <Footer />
    </>
  );
};

export default Home;
