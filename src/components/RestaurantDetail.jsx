import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import api from "../utils/api";
import Loader from "./Loader";
import { FaArrowDown, FaClock, FaStar } from "react-icons/fa";

const RestaurantDetail = () => {
  const { id } = useParams();
  const [restaurant, setRestaurant] = useState(null);

  useEffect(() => {
    api.get(`/restaurants/${id} `).then((res) => setRestaurant(res.data));
  }, []);
  if (!restaurant) return <Loader />;
  return (
    <div>
      <div className="flex gap-5">
        <img className="w-[300px] rounded-md" src={restaurant.photo} />
        <div className="flex flex-col ">
          <div className="text-red-500 flex gap-5">
            <p className="flex items-center gap-2 text-xs md:text-lg">
              <FaArrowDown />
              <span className="gap-3 text-gray-500">
                <span className="mr-1">minimum</span>
                {restaurant.minPrice} $
              </span>
            </p>
            <p className="flex items-center gap-2 text-xs md:text-lg  ">
              <FaClock />
              <span className="text-gray-500">{restaurant.estimatedDelivery} min. </span>
            </p>
          </div>

          <h1 className="text-xxl md:text-2xl font-semibold mt-5 mb-24 ">
            {restaurant.name}
          </h1>
          <p className="flex items-center gap-2">
            <FaStar className="text-red-500" />
            <span className="text-gray-500">{restaurant.rating}</span>
            <button className="text-red-500 font-semibold rounded hover:bg-red-100 transition ">
              Comments
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default RestaurantDetail;
