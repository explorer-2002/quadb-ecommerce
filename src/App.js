// import logo from './logo.svg';
// import './App.css';
import { GlobalStyles } from './styles/GlobalStyles';
import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom'
import Dashboard from './Dashboard/Dashboard';
import AppLayout from './ui/AppLayout';
import Products from './Products/Products';
import {Provider} from 'react-redux'
import store from './store'
import ProductDescription from './Products/ProductDescription';

import './index.css'
import Cart from './Cart/Cart';
import Login from './Dashboard/Login';
import Signup from './Dashboard/Signup';

import {Toaster} from 'react-hot-toast'

// products api working
// implemented redux for user, products and cart
// login of user is working
// registering of user is working
// add to cart functionality is working
//removal from cart is working
// when a user logins, his name is displayed on the header and whether he is the admin or not, a logout button
//is displayed for every user when logged in
// an add product button is displayed on the sidebar if the logged in user is the admin


// backend apis
// login - post api is working
// signup - post api is working
// products - get api is working

function App() {
  return (
    <Provider store={store}>
    <GlobalStyles />
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
          <Route index element={<Navigate replace to="dashboard" />} />
          <Route path="dashboard" element={<Dashboard />} />
           <Route path="products" element={<Products />} />
           <Route path="products/:id" element={<ProductDescription />} />

           <Route path="cart" element={<Cart />} />

           <Route path="login" element={<Login />} />

           <Route path="signup" element={<Signup />} />
          {/* <Route path="cabins" element={<Cabins />} />
          <Route path="users" element={<Users />} />
          <Route path="settings" element={<Settings />} />
          <Route path="accounts" element={<Account />} />  */}
        </Route>

        {/* <Route path="login" element={<Login />} />
        <Route path="*" element={<PageNotFound />} /> */}
      </Routes>
    </BrowserRouter>

    <Toaster position="top-center" gutter={12} containerStyle={{margin:"8px"}} 
      toastOptions={{
        success:{
          duration:3000
        },

        error:{
          duration:5000
        },

        style:{
          fontSize:'10px',
          maxWidth:'150px',
          padding:'16px 24px',
          backgroundColor:`var(--color-grey-0)`,
          color:`var(--color-grey-700)`
        }
      }} />

    </Provider>
  );
}

export default App;
