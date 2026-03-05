import React, { useState, useEffect } from "react";
import axios from "axios";

const Products = () => {
  let products = localStorage.getItem("products");
  console.log(JSON.parse(products));
  products = JSON.parse(products);

  return (
    <div className="Product">
      <div className="product__cards">
        {products.map((item) => (
          <div key={item.id} className="product__card">
            <p className="product__info">{item.brand}</p>
            <p className="product__info">{item.category}</p>
            <div className="product__infos">
              <p className="product__info">{item.price}</p>
              <p className="product__info">{item.rating}</p>
            </div>
            <button onClick={() => {
              
            }} className="product__button-delete">Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
