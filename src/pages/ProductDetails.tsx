import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import ProductCard from '../components/ProductCard';
import { ArrowBack } from "@mui/icons-material";
import shirt from "../assets/shirt.jpg";
import pants from "../assets/pants.jpg";
import everydaywear from "../assets/everydaywear.jpg";

const ProductSectionWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 20px;
  background-color: #f2f2f2;
`;

const HeaderWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
  margin: 20px 0;
`;

const SectionTitle = styled.h2`
  color: #333;
  font-size: 1.5em;
  margin: 0;
`;

const BackButton = styled.button`
  display: flex;
  align-items: center;
  background-color: #333;
  color: #fff;
  border: none;
  border-radius: 5px;
  padding: 8px 15px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #555;
  }

  svg {
    margin-right: 8px;
  }
`;

const products = [
  { id: 1, name: 'Casual Shirt', price: 29.99, image: shirt, description: 'Comfortable cotton shirt', category: 'Shirts' },
  { id: 2, name: 'Denim Jacket', price: 49.99, image: everydaywear, description: 'Stylish denim jacket', category: 'EverydayWear' },
  { id: 3, name: 'Summer Dress', price: 34.99, image: everydaywear, description: 'Breezy summer dress', category: 'EverydayWear' },
  { id: 4, name: 'Jeans', price: 39.99, image: pants, description: 'Classic blue jeans', category: 'Pants' },
  { id: 5, name: 'Chinos', price: 44.99, image: pants, description: 'Stylish chinos', category: 'Pants' },
  { id: 6, name: 'Formal Shirt', price: 35.99, image: shirt, description: 'Elegant formal shirt', category: 'Shirts' },
];

const ProductDetails: React.FC = () => {
  const navigate = useNavigate();
  const { category } = useParams<{ category: string }>();

  const filteredProducts = products.filter(product => product.category === category);

  return (
    <div>
      <HeaderWrapper>
        <BackButton onClick={() => navigate(-1)}>
          <ArrowBack /> Back
        </BackButton>
        <SectionTitle>{category}</SectionTitle>
      </HeaderWrapper>
      <ProductSectionWrapper>
        {filteredProducts.map((product) => (
          <ProductCard
            key={product.id}
            name={product.name}
            price={product.price}
            image={product.image}
            description={product.description}
          />
        ))}
      </ProductSectionWrapper>
    </div>
  );
};

export default ProductDetails;
