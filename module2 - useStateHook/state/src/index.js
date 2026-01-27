import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import IncrementDecrementCounter from "./IncrementDecrementCounter";
import SubmitForm from "./submitForm";
import BrandSearch from "./brandsSearch";
import AddToCart from './addToCart';
import Wishlist from './wishlist';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <div>
      <App />
      <IncrementDecrementCounter />
      <SubmitForm />
      <BrandSearch />
      <AddToCart />
    </div>
    <div>
      <Wishlist />
    </div>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
