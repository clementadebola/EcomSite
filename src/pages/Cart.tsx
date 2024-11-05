import React, { useState } from 'react';
import styled from 'styled-components';
import { IconButton, Typography, Button } from '@mui/material';
import { Add, Remove, Delete } from '@mui/icons-material';

interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
}

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

  @media (max-width: 600px) {
    padding: 15px;
    width: 90%;
  }
`;

const ItemContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  border-bottom: 1px solid #e0e0e0;
  background-color: #f8f9fa;
`;

const ItemInfo = styled.div`
  display: flex;
  flex-direction: column;
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
  const [cartItems, setCartItems] = useState<CartItem[]>([
    { id: 1, name: 'Product 1', price: 19.99, quantity: 1 },
    { id: 2, name: 'Product 2', price: 9.99, quantity: 2 },
    { id: 3, name: 'Product 3', price: 14.99, quantity: 1 },
  ]);

  const handleAdd = (id: number) => {
    setCartItems(items =>
      items.map(item => (item.id === id ? { ...item, quantity: item.quantity + 1 } : item))
    );
  };

  const handleRemove = (id: number) => {
    setCartItems(items =>
      items.map(item => (item.id === id && item.quantity > 1 ? { ...item, quantity: item.quantity - 1 } : item))
    );
  };

  const handleDelete = (id: number) => {
    setCartItems(items => items.filter(item => item.id !== id));
  };

  const handleCheckout = () => {
    alert('Proceeding to checkout');
  };

  const total = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <CartContainer>
      {cartItems.map(item => (
        <ItemContainer key={item.id}>
          <ItemInfo>
            <Typography variant="h6">{item.name}</Typography>
            <Typography variant="body2" color="text.secondary">
              ${item.price.toFixed(2)}
            </Typography>
          </ItemInfo>
          <div>
            <IconButton onClick={() => handleRemove(item.id)}><Remove /></IconButton>
            <Typography variant="body1">{item.quantity}</Typography>
            <IconButton onClick={() => handleAdd(item.id)}><Add /></IconButton>
            <IconButton onClick={() => handleDelete(item.id)}><Delete /></IconButton>
          </div>
        </ItemContainer>
      ))}
      
      <SummaryContainer>
        <Typography variant="h5">Total: ${total.toFixed(2)}</Typography>
        <Button variant="contained" color="primary" onClick={handleCheckout}>
          Checkout
        </Button>
      </SummaryContainer>
    </CartContainer>
  );
};

export default Cart;
