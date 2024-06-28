// Card.js

import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { addItem } from '../Cart/cartSlice';
import { useSelector } from 'react-redux';

const CardContainer = styled.div`
  width: 300px;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s;
  
  &:hover {
    transform: translateY(-5px);
  }
`;
const Card = styled.div`
  border: 1px solid #ddd;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  max-width: 300px;
  margin: 20px;
  overflow: hidden;
  transition: transform 0.2s;

  &:hover {
    transform: scale(1.05);
  }
`;

const Image = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  cursor:pointer;
`;

const Content = styled.div`
  padding: 15px;
`;

const Title = styled.h2`
  font-size: 1.5rem;
  margin: 0 0 10px;
  color: #333;
`;

const Description = styled.p`
  font-size: 1rem;
  color: #666;
  margin: 0 0 15px;
`;

const Price = styled.p`
  font-size: 1.2rem;
  font-weight: bold;
  color: #333;
  margin: 0 0 15px;
`;

const AddToCartButton = styled.button`
  padding: 10px 15px;
  font-size: 1rem;
  color: #fff;
  background-color: #007bff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  width: 100%;
  
  &:hover {
    background-color: #0056b3;
  }
`;



const Product = ({ id, image, title, description, price }) => {
    const to = `${id}`
    const dispatch = useDispatch()
    const user = useSelector(state => state.users.user)

    function handleAddToCart() {
        const newItem = {
          productId: id,
          title,
          image,
          quantity: 1,
          price,
          totalPrice: price * 1
        }
    
        dispatch(addItem(newItem))
      }

    return (
        
        <Card>
        <Link to={to}><Image src={image} alt={title} /></Link>
        <Content>
          <Title>{title}</Title>
          <Description>{description}</Description>
          <Price>{price}</Price>
          <AddToCartButton onClick={handleAddToCart} disabled={user.name === ''}>Add to Cart</AddToCartButton>
        </Content>
      </Card>
  
    );
};

export default Product;
