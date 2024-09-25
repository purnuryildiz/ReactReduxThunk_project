import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import api from "../utils/api";

const ProductList = () => {
  const { id } = useParams();

  const [products, setProducts] = useState(null);

  useEffect(() => {
    api.get(`/products?restaurantId=${id}`).then((res) => setProducts(res.data));
  }, []);
  return <div>ProductList</div>;
};

export default ProductList;
