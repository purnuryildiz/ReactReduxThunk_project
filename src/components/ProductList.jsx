import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import api from "../utils/api";
import { FaFireFlameCurved } from "react-icons/fa6";
import Error from "../components/Error";
import Loader from "./Loader";
import ProductCard from "../components/ProductCard";

const ProductList = () => {
  const { id } = useParams();
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    api
      .get(`/products?restaurantId=${id}`)
      .then((res) => {
        setProducts(res.data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, [id]);

  return (
    <div>
      <h2 className="flex items-center gap-2 text-2xl font-bold">
        <FaFireFlameCurved className="text-red-500" />
        Popular
      </h2>
      <p className="text-gray-600 mt-7">The most popular dishes of the restaurant:</p>
      {loading ? (
        <Loader />
      ) : error ? (
        <Error message={error} />
      ) : (
        <ul className="grid lg:grid-cols-2 gap-5 mt-4">
          {products.map((item) => (
            <div>
              <ProductCard key={item.id} item={item} />
            </div>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ProductList;
