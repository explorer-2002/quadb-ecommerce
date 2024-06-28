import { createSlice } from "@reduxjs/toolkit"
// { id:1,image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg", title: "Product 1", description: "This is a brief description of product 1.", price: "29.99" },
        // { id:2,image: "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg", title: "Product 2", description: "This is a brief description of product 2.", price: "39.99" },
        // { id:3,image: "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg", title: "Product 3", description: "This is a brief description of product 3.", price: "49.99" },
        // { id:4,image: "https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg", title: "Product 4", description: "This is a brief description of product 4.", price: "59.99" },
        // // Add more products as needed

const initialState = {
    products : []
}

const productSlice = createSlice({
    name:"products",
    initialState,
    reducers:{
       addProduct(state,action){
        state.products.push(action.payload)
       }
    }
})


export const {addProduct} = productSlice.actions;
export default productSlice.reducer;

