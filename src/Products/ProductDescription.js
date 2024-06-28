import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import styled from "styled-components";

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  max-width: 1200px;
  margin: 0 auto;
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

const ProductContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const Image = styled.img`
  width: 50%;
  max-width: 600px;
  border-radius: 8px;
  margin-right: 20px;
`;

const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 50%;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 10px;
`;

const Description = styled.p`
  font-size: 1.2rem;
  margin-bottom: 20px;
`;

const Price = styled.p`
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 20px;
`;

const AddToCartButton = styled.button`
  padding: 15px 30px;
  font-size: 1rem;
  color: #fff;
  background-color: #007bff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  
  &:hover {
    background-color: #0056b3;
  }
`;

function ProductDescription() {
    const {id} = useParams()

    const product = useSelector(state => state.products.products.find(item => item.id == id))

  return (
    <div>
      <PageContainer>
      {/* <Header>Product Detail Page</Header> */}
      <ProductContainer>
        <Image src={product.image} alt={product.title} />
        <InfoContainer>
          <Title>{product.title}</Title>
          <Description>{product.description}</Description>
          <Price>{product.price}</Price>
          <AddToCartButton>Add to Cart</AddToCartButton>
        </InfoContainer>
      </ProductContainer>
    </PageContainer>
    </div>
  )
}

export default ProductDescription
