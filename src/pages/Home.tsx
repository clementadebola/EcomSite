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
import {
  ShoppingCart,
  Menu,
  Search,
  Person,
  Facebook,
  Instagram,
  Twitter,
} from "@mui/icons-material";
import { NavLink, Link } from "react-router-dom";
import Footer from "../components/Footer";
import GlobalStyles from "../styles/Globalstyles.ts";
import backgroundImg from "../assets/background.png";
import logoImg from "../assets/logo.png";
import shirt from "../assets/shirt.jpg";
import pants from "../assets/pants.jpg";
import everydaywear from "../assets/everydaywear.jpg";
import previewimg from "../assets/preview.jpg";

const HeroSection = styled.section`
  background-image: url(${backgroundImg});
  background-size: cover;
  background-position: center;
  height: 100vh;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding: 2rem;

  @media (max-width: 768px) {
    height: 100vh;
    padding: 1rem;
    background-position: top;
    justify-content: center;
  }
`;
const Header = styled.header`
  display: flex;
  flex-direction: column;
  background-color: #000;
  padding: 10px;

  .header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: #000;
    padding: 10px 20px;
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
      font-size: 1.6rem;
      font-weight: bold;
      color: #fff;
    }
  }

  .search-cart {
    display: flex;
    align-items: center;

    .cart-icon {
      color: #fff;
      transition: color 0.3s;

      &:hover {
        color: #ddd;
      }
    }
  }

  @media (max-width: 768px) {
    .logo-section .company-name {
      font-size: 1.2rem;
    }
  }
`;

const NavLinks = styled.nav<{ isOpen: boolean }>`
  display: ${(props) => (props.isOpen ? "flex" : "none")};
  // flex-direction: column;
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

const CollectionSection = styled.div`
  padding: 4rem 0;
  background-color: #f9f9f9;

  h2 {
    text-align: center;
    margin-bottom: 2rem;
  }
`;

const FeaturedSection = styled.section`
  padding: 4rem 0;
  background-color: #f9f9f9;

  h2 {
    text-align: center;
    margin-bottom: 2rem;
  }
`;

const ProductCardWrapper = styled(Link)`
  display: block;
  // padding: 20px;
  margin: 10px 0;
  font-size: 1.2rem;
  text-decoration: none;
  color: #333;
  background-color: #e0e0e0;
  border-radius: 8px;
  text-align: center;

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

const Overviewsection = styled.div`
  padding: 20px;
  background-color: #f9f9f9;
  align-items: center;
  display: flex;
  justify-content: center;

  img {
    width: 400px;
    height: 400px;
    border-radius: 10px;
    object-fit: cover;

    @media (max-width: 768px) {
      width: 300px;
      height: 300px;
      margin-bottom: 20px;
    }
  }

  .overview-sec {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    width: 400px;
    padding: 20px;

    h2 {
      font-size: 2rem;
      font-weight: bold;
      margin: 0;
    }

    p {
      font-size: 1.1rem;
      color: #555;
      line-height: 1.5;
    }
  }

  button {
    align-self: start;
    background-color: black;
    width: 120px;
    border: none;
    border-radius: 7px;
    color: white;
    padding: 10px 15px;
    font-size: 1.1rem;
    cursor: pointer;
    transition: background-color 0.3s;

    &:hover {
      background-color: #333;
    }

    @media (max-width: 768px) {
      align-self: center;
      width: 100%;
      font-size: 1rem;
      padding: 10px;
    }
  }

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
`;

const FooterContainer = styled.footer`
  background-color: #111;
  color: #fff;
  padding: 40px 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

const BrandName = styled.h1`
  font-size: 1.8rem;
  font-weight: bold;
  margin-bottom: 15px;
`;

const FooterLinks = styled.div`
  display: flex;
  gap: 20px;
  margin-bottom: 20px;

  a {
    color: #aaa;
    text-decoration: none;
    font-size: 1rem;

    &:hover {
      color: #fff;
    }
  }
`;

const SocialMedia = styled.div`
  display: flex;
  gap: 15px;
  margin-bottom: 20px;

  svg {
    color: #aaa;
    font-size: 1.5rem;
    cursor: pointer;
    transition: color 0.3s;

    &:hover {
      color: #fff;
    }
  }
`;

const Copyright = styled.p`
  font-size: 0.9rem;
  color: #666;
  margin-top: 20px;
`;

const Home: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <>
      <GlobalStyles />
      <Header>
        <div className="header">
          <IconButton onClick={toggleMenu}>
            <Menu style={{ color: "white" }} />
          </IconButton>

          <div className="logo-section">
            <img src={logoImg} alt="Company Logo" />
            <div className="company-name">Ecom Shop</div>
          </div>

          <div className="search-cart">
            <IconButton className="cart-icon">
              <Search />
            </IconButton>
            <IconButton className="cart-icon">
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
      </Header>

      <HeroSection>
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

      <CollectionSection>
        <Container maxWidth="lg">
          <Typography variant="h4" component="h3" gutterBottom>
            Collections
          </Typography>
          <Grid container spacing={6}>
            <Grid item xs={12} sm={6} md={4}>
              <ProductCardWrapper to="/category/Shirts">
                <CardMedia component="img" image={shirt} title="Shirt" />
                <CardContent>
                  <Typography variant="h6">Shirt</Typography>
                </CardContent>
              </ProductCardWrapper>
            </Grid>

            <Grid item xs={12} sm={6} md={4}>
              <ProductCardWrapper to="/category/Pants">
                <CardMedia component="img" image={pants} title="Pants" />
                <CardContent>
                  <Typography variant="h6">Pants</Typography>
                </CardContent>
              </ProductCardWrapper>
            </Grid>

            <Grid item xs={12} sm={6} md={4}>
              <ProductCardWrapper to="/category/EverydayWear">
                <CardMedia
                  component="img"
                  image={everydaywear}
                  title="everydaywear"
                />
                <CardContent>
                  <Typography variant="h6">everydaywear</Typography>
                </CardContent>
              </ProductCardWrapper>
            </Grid>
          </Grid>
        </Container>
      </CollectionSection>

      <FeaturedSection>
        <Container maxWidth="lg">
          <Typography variant="h4" component="h2" gutterBottom>
            Featured Products
          </Typography>
          <Grid container spacing={4}>
            <Grid item xs={12} sm={6} md={4}>
              <ProductCardWrapper to="/category/Shirts">
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
              <ProductCardWrapper to="/category/Shirts">
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
              <ProductCardWrapper to="/category/Shirts">
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

      <Overviewsection>
        <img src={previewimg} alt="preview" />
        <div className="overview-sec">
          <h2>Ecom Exclusive Tees</h2>
          <p>
            {" "}
            Limited edition pieces that add on element of exclusivity to your
            wardrobe.
          </p>

          <button>shop now</button>
        </div>
      </Overviewsection>

      <FooterContainer>
        <BrandName>Your Brand</BrandName>

        <FooterLinks>
          <a href="/shop">Shop</a>
          <a href="/about">About</a>
          <a href="/contact">Contact</a>
          <a href="/faq">FAQ</a>
        </FooterLinks>

        <SocialMedia>
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Facebook />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Instagram />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Twitter />
          </a>
        </SocialMedia>

        <Copyright>
          &copy; {new Date().getFullYear()} Your Brand. All rights reserved.
        </Copyright>
      </FooterContainer>
    </>
  );
};

export default Home;
