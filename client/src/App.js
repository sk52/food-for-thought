// import React, { useState, useEffect } from "react";
import React from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as DB} from 'react-router-dom';
import NavBar from './components/Navbar';
import './App.css';

// SERVICES
// import productService from './services/productService';
// // import { Router } from "express";

function App() {
//   const [products, setproducts] = useState(null);

//   useEffect(() => {
//     if (!products) {
//       getProducts();
//     }
//   })

//   const getProducts = async () => {
//     let res = await productService.getAll();
//     console.log(res);
//     setproducts(res);
//   }

//   const renderProduct = product => {
//     return (
//       <li key={product._id} className="list__item product">
//         <h3 className="product__name">{product.name}</h3>
//         <p className="product__description">{product.description}</p>
//       </li>
//     );
//   };

  return (
    <DB>
      <div className="App">
        <NavBar/>
        {/* <h1 className="title">Welcome to the product list</h1>
        <ul className="list">
          {(products && products.length > 0) ? (
            products.map(product => renderProduct(product))
          ) : (
              <p>No products found</p>
            )}
        </ul> */}
        <p>Need a sprinkling of inspiration in the kitchen?</p>
        <p>Let's pepper your thoughts for you!</p>
      </div>
    </DB>
  );
}

export default App;