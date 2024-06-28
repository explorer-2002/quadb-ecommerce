import React from 'react'
import styled from 'styled-components';
import { deleteItem, getTotalCartPrice } from './cartSlice';
import { useDispatch, useSelector } from 'react-redux';

const PageContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
  font-family: Arial, sans-serif;
`;

const Header = styled.header`
  width: 100%;
  padding: 20px;
  background-color: #f8f8f8;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  margin-bottom: 20px;
  text-align: center;
  font-size: 1.5rem;
`;

const CartContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const CartItem = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  border-bottom: 1px solid #ddd;
  padding: 15px 0;
`;

const Image = styled.img`
  width: 100px;
  height: 100px;
  margin-right: 20px;
  object-fit: cover;
`;

const ItemDetails = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

const ItemName = styled.h2`
  font-size: 1.2rem;
  margin: 0 0 10px;
`;

const ItemQuantity = styled.p`
  font-size: 1rem;
  color: #666;
  margin: 0 0 5px;
`;

const ItemPrice = styled.p`
  font-size: 1.2rem;
  font-weight: bold;
  color: #333;
  margin: 0 0 5px;
`;

const TotalPriceContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
  padding: 20px 0;
  /* border-top: 1px solid #ddd; */
  margin-top: 20px;
`;

const TotalPriceLabel = styled.p`
  font-size: 1.5rem;
  font-weight: bold;
  margin: 0 10px 0 0;
`;

const TotalPriceValue = styled.p`
  font-size: 1.5rem;
  font-weight: bold;
  margin: 0;
`;

const DeleteButton = styled.button`
  padding: 10px 15px;
  font-size: 1rem;
  color: #fff;
  background-color: #ff4d4d;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #e60000;
  }

  &:focus {
    outline: none;
  }
`;

function Cart() {
    const totalPrice = useSelector(getTotalCartPrice)
    const cartItems = useSelector(state => state.cart.cart)

    const dispatch = useDispatch()

    function handleDelete(id){
        dispatch(deleteItem(id))
    }

  return (
    <PageContainer>
      <Header>Shopping Cart</Header>
      <CartContainer>
        {cartItems.map((item) => (
          <CartItem key={item.productId}>
            <Image src={item.image} alt={item.title} />
            <ItemDetails>
              <ItemName>{item.title}</ItemName>
              {/* <ItemQuantity>Quantity: {item.quantity}</ItemQuantity> */}
              <ItemPrice>Price: ${item.price}</ItemPrice>
              <DeleteButton onClick={() => handleDelete(item.productId)}>Delete</DeleteButton>
            </ItemDetails>
          </CartItem>
        ))}
        <TotalPriceContainer>
          <TotalPriceLabel>Total Price:</TotalPriceLabel>
          <TotalPriceValue>${totalPrice}</TotalPriceValue>
        </TotalPriceContainer>
      </CartContainer>
    </PageContainer>
  )
}

export default Cart
