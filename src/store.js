import { configureStore } from "@reduxjs/toolkit";

import productReducer from "./Products/productSlice";
import cartReducer from "./Cart/cartSlice";
import userReducer from './User/userSlice';

const store = configureStore({
    reducer:{
        "products":productReducer,
        "cart":cartReducer,
        "users":userReducer
    }
})

export default store;