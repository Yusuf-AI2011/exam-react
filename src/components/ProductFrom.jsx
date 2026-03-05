import React from "react";
import { NavLink } from "react-router-dom";

const ProductFrom = () => {
  return (
    <div className="ProductFrom">
      <ul className="product__list">
        <li className="product__item">
          <NavLink to={"/product"}>Product</NavLink>
        </li>
      </ul>
    </div>
  );
};

export default ProductFrom;
