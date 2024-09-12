import React, { useEffect } from "react";
import Home from "./pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cart from "./pages/Cart";
import Header from "./components/Header";
import { useDispatch } from "react-redux";

import api from "./utils/api";
import {
  getData,
  setError,
  setLoading,
  setRestaurants,
} from "./redux/actions/restActions";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getData());
  }, []);
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
