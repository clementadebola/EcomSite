import React, { useState } from "react";
import styled from "styled-components";
import {
  Container,
  Grid,
  Typography,
  Button,
  CardContent,
  CardMedia,
} from "@mui/material";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header.tsx";
import GlobalStyles from "../styles/Globalstyles.ts";
import backgroundImg from "../assets/background.png";
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



const Home: React.FC = () => {

  return (
    <>
      <GlobalStyles />
     <Header/>

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

      {/* <Footer/> */}
    </>
  );
};

export default Home;
