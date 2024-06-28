import  { useEffect } from 'react'
import Product from './Product'
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import Spinner from '../ui/Spinner';

import { addProduct } from './productSlice';

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 16px;
  padding: 16px;
  max-width: 1200px;
  margin: 0 auto;
`;




export default function Products() {

 
  const dispatch = useDispatch()
 const products = useSelector(state => state.products.products)

  useEffect(() => {
    async function getProducts(){
      if(products.length === 0){
      const res = await fetch("http://localhost:5012/products", {
        method:"GET",
        headers:{
            "Content-Type":"application/json"
        }}
        );
    
        const data = await res.json()
        data?.forEach((item) => dispatch(addProduct(item)))
      }
    }
     
    getProducts()
  },[dispatch])


  if(!products.length)
    return <Spinner />

  return (
    <div>
      {
         <Grid>
         {products.map((product, index) => (
           <Product
             key={index}
             id={product.id}
             image={product.image}
             title={product.title}
             description={product.description}
             price={product.price}
           />
         ))}
       </Grid>
      }
    </div>
  )
}


