/** @format */

import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import ProductComponents from "./ProductComponents";
import axios from "axios";
const ProductListing = () => {
  const products = useSelector((state) => state);

  const fetchProduct = async () => {
    const response = axios
      .get("https://fakestoreapi.com/products")
      .catch((err) => {
        console.log("Err", err);
      });
    console.log(response.data);
  };
  useEffect(() => {
    fetchProduct();
  }, []);
  return (
    <div className="ui grid container">
      <ProductComponents />
    </div>
  );
};

export default ProductListing;
