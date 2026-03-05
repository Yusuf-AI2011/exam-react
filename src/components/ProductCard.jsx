import React, { useState, useEffect } from "react";
import axios from "axios";
import Products from "../pages/Products";

const ProductCard = () => {

  return (
    <div className="ProductCard">
      <button onClick={() => {
        
      }} className="product__button">+ Create</button>
      <Products />
    </div>
  );
};

export default ProductCard;
