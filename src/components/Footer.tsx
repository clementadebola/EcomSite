import React from 'react';
import styled from 'styled-components';
import { Typography } from '@mui/material';

// Footer styling
const FooterSection = styled.footer`
  background-color: #333;
  color: white;
  padding: 1.5rem 0;
  text-align: center;

  p {
    margin: 0;
  }
`;

const Footer: React.FC = () => {
  return (
    <FooterSection>
      <Typography variant="body1" component="p">
        &copy; {new Date().getFullYear()} Your E-Commerce. All rights reserved.
      </Typography>
    </FooterSection>
  );
};

export default Footer;
