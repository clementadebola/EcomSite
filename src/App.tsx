import React, { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';


const Home = React.lazy(() => import('./pages/Home'));
const AboutUs = React.lazy(() => import('./pages/AboutUs'));
const ProductDetails = React.lazy(() => import('./pages/ProductDetails'));
const Cart = React.lazy(() => import('./pages/Cart'));
// const Checkout = React.lazy(() => import('./pages/Checkout'));
// const Profile = React.lazy(() => import('./pages/Profile'));
const Chat = React.lazy(() => import('./components/Chat'));
// const NotFound = React.lazy(() => import('./pages/NotFound'));

// Theme configuration
const theme = {
  colors: {
    primary: '#2196f3',
    secondary: '#f50057',
    text: '#333333',
    background: '#ffffff',
  },
  breakpoints: {
    mobile: '320px',
    tablet: '768px',
    desktop: '1024px',
  },
};


const LoadingFallback: React.FC = () => (
  <Box 
    display="flex" 
    justifyContent="center" 
    alignItems="center" 
    minHeight="100vh"
  >
    <CircularProgress />
  </Box>
);

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Suspense fallback={<LoadingFallback />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/aboutus" element={<AboutUs />} />
            <Route path="/category/:category" element={<ProductDetails />} />
            <Route path="/cart" element={<Cart />} />
            
            {/* <Route path="/checkout" element={<Checkout />} />
            <Route path="/profile" element={<Profile />} /> */}
            <Route path="/chat/:sellerId" element={<Chat />} />
            
            {/* 404 Route */}
            {/* <Route path="*" element={<NotFound />} /> */}
          </Routes>
        </Suspense>
      </Router>
    </ThemeProvider>
  );
};

export default App;



import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      primary: string;
      secondary: string;
      text: string;
      background: string;
    };
    breakpoints: {
      mobile: string;
      tablet: string;
      desktop: string;
    };
  }
}