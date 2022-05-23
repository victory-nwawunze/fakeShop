/** @format */

import React from "react";
import "./App.css";
import Header from "./containers/Header";
import ProductListing from "./containers/ProductListing";
import { Route, Routes, Navigate } from "react-router-dom";
import ProductDetail from "./containers/ProductDetail";
function App() {
  return (
    <React.Fragment>
      <Header />
      <Routes>
        <Route path={"/"} element={<Navigate to="fakeshop/list" />} />
        <Route path={"/fakeshop/list"} element={<ProductListing />} />
        <Route path={"/product/:productId"} element={<ProductDetail />} />
        <Route>404 not found</Route>
      </Routes>
    </React.Fragment>
  );
}

export default App;
