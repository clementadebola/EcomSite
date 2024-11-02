import React from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import ProductCard from '../components/ProductCard';


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

const products = [
  {id: 1, name: 'casual Shirt', price: 29.99, image: '/images/shirt1.jpg', description: 'comfortable cotton shirt', category: 'Shirts'},
  {id: 2, name: 'Denim jacket', price: 49.99, image: '/images/shirt1.jpg', description: 'comfortable cotton shirt', category: 'EverydayWear'},
  {id: 3, name: 'Summer Dress', price: 29.99, image: '/images/shirt1.jpg', description: 'comfortable cotton shirt', category: 'EverydayWear'},
  {id: 4, name: 'Jeans', price: 39.99, image: '/images/shirt1.jpg', description: 'comfortable cotton shirt', category: 'Pants'},
  {id: 5, name: 'Chinos', price: 44.99, image: '/images/shirt1.jpg', description: 'comfortable cotton shirt', category: 'Pants'},
  {id: 6, name: 'Formal Shirt', price: 35.99, image: '/images/shirt1.jpg', description: 'comfortable cotton shirt', category: 'Shirts'},
];

const ProductDetails : React.FC = () => {
  const { category } = useParams<{category: string}>();

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
          image={product.image}
          description={product.description}
          />
        ))}
      </ProductSectionWrapper>
    </div>
  );
};

export default ProductDetails