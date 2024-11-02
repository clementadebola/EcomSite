import React from 'react'
import styled from 'styled-components';

interface productProps {
  name: string;
  price: number;
  image: string;
  description: string;
}

const Card = styled.div`
width: 280px;
padding: 20px;
margin: 15px;
border-radius: 8px;
background-color: #f8f8f8;
box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
text-align: center;
transition: transform 0.3s ease;

&:hover {
transform: translateY(-5px);
}

`;

const Image = styled.img`
width: 100%;
height; 200px;
object-fit: cover;
border-radius: 8px;
`;

const Name = styled.h2`
font-size: 1.2rem;
margin: 10px 0;
color: #333;
`;

const Price = styled.p`
font-size: 1rem;
color: #333;
`;

const Description = styled.p`
font-size: 0.9rem;
margin-top: 8px;
color: #777;
`;

const Button = styled.button`
padding: 8px 16px;
margin-top: 10px;
background-color: #333;
color: #fff;
border: none;
border-radius: 4px;
cursor: pointer;

&:hover{
background-color: #555;
}
`;

const ProductCard: React.FC<productProps> = ({ name, price, image, description}) => {
  return (
   <Card>
    <Image src={image} alt={name}/>
    <Name>{name}</Name>
    <Price>${price}</Price>
    <Description>{description}</Description>
    <Button>Add to Cart</Button>
   </Card>
  )
}

export default ProductCard;