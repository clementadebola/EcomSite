import React from 'react';
import styled from 'styled-components';
import { Typography, Button } from '@mui/material';
import { useCart } from '../context/CartContext';

const CartContainer = styled.div`
  max-width: 600px;
  margin: auto;
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  background-color: #ffffff;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
`;

const ItemContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 10px;
  border-bottom: 1px solid #e0e0e0;
  background-color: #f8f9fa;
  gap: 15px;
`;

const ItemImage = styled.img`
  width: 80px;
  height: 80px;
  object-fit: cover;
  border-radius: 8px;
`;

const ItemInfo = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`;

const SummaryContainer = styled.div`
  padding: 20px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-top: 1px solid #e0e0e0;
  background-color: #f8f9fa;
`;

const Cart: React.FC = () => {
  const { cartItems } = useCart();
  const total = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <CartContainer>
      {cartItems.length === 0 ? (
        <Typography variant="h5" align="center">Your cart is empty</Typography>
      ) : (
        <>
          {cartItems.map(item => (
            <ItemContainer key={item.id}>
              <ItemImage src={item.image} alt={item.name} />
              <ItemInfo>
                <Typography variant="h6">{item.name}</Typography>
                <Typography variant="body2">${item.price.toFixed(2)} x {item.quantity}</Typography>
              </ItemInfo>
            </ItemContainer>
          ))}
          <SummaryContainer>
            <Typography variant="h5">Total: ${total.toFixed(2)}</Typography>
            <Button variant="contained" color="primary">Checkout</Button>
          </SummaryContainer>
        </>
      )}
    </CartContainer>
  );
};

export default Cart;
