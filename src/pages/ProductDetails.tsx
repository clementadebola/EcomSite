import React from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import ProductCard from '../components/ProductCard';
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

const SectionTitle = styled.h2`
  width: 100%;
  text-align: left;
  margin: 20px 0;
  color: #333;
`;

// Use the imported images in the product objects directly
const products = [
  { id: 1, name: 'Casual Shirt', price: 29.99, image: shirt, description: 'Comfortable cotton shirt', category: 'Shirts' },
  { id: 2, name: 'Denim Jacket', price: 49.99, image: everydaywear, description: 'Stylish denim jacket', category: 'EverydayWear' },
  { id: 3, name: 'Summer Dress', price: 34.99, image: everydaywear, description: 'Breezy summer dress', category: 'EverydayWear' },
  { id: 4, name: 'Jeans', price: 39.99, image: pants, description: 'Classic blue jeans', category: 'Pants' },
  { id: 5, name: 'Chinos', price: 44.99, image: pants, description: 'Stylish chinos', category: 'Pants' },
  { id: 6, name: 'Formal Shirt', price: 35.99, image: shirt, description: 'Elegant formal shirt', category: 'Shirts' },
];

const ProductDetails: React.FC = () => {
  const { category } = useParams<{ category: string }>();

  const filteredProducts = products.filter(product => product.category === category);
  return (
    <div>
      <SectionTitle>{category}</SectionTitle>
      <ProductSectionWrapper>
        {filteredProducts.map((product) => (
          <ProductCard
            key={product.id}
            name={product.name}
            price={product.price}
            image={product.image}  // Use the imported image variable
            description={product.description}
          />
        ))}
      </ProductSectionWrapper>
    </div>
  );
};

export default ProductDetails;
