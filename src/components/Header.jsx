import React from "react";
import { useSelector } from "react-redux";

const Header = () => {
  const state = useSelector((store) => store.restaurantReducer);
  return (
    <div className="p-5 text-4xl flex justify-between ">
      <h1>Header</h1>
      <p>{state.restaurants.length} </p>
    </div>
  );
};

export default Header;
