import React, { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import ProductFrom from "./components/ProductFrom";
import ProductCard from "./components/ProductCard";
import NotFound from "./pages/NotFound";
import { Route, Routes } from "react-router-dom";
import Products from "./pages/Products";

const App = () => {
  // const [product, setProduct] = useState([]);
  let api = `https://dummyjson.com/products`;
  axios.get(api).then((data) => {
    // console.log(data);
    localStorage.setItem("products", JSON.stringify(data?.data?.products));
  });
  return (
    <div className="App">
      <ProductFrom />
      <div className="left">
        <Navbar />
        <div className="Result">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/product" element={<ProductCard />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default App;
