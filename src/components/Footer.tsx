import React from 'react';
import styled from 'styled-components';
import {
  Facebook,
  Instagram,
  Twitter
} from "@mui/icons-material";

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

const Footer: React.FC = () => {
  return (
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
  );
};

export default Footer;
