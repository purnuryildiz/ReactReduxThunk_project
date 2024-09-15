import Container from "../components/Container";
import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { IoRestaurant } from "react-icons/io5";

const Header = () => {
  const { restaurants } = useSelector((store) => store.restaurantReducer);
  return (
    <header className="shadow">
      <Container designs="flex justify-between items-center">
        <Link to="/" className="text-red-500 font-[900] text-2xl font-mono md:text-3xl">
          FlavorFinder
        </Link>
        <div className="flex gap-5">
          <Link to="/" className="flex items-center gap-1 hover:underline cursor-pointer">
            {restaurants.length} <IoRestaurant className="text-red-500" /> Restaurants{" "}
          </Link>
          <button className="border py-1 px-3 text-red-500 hover:bg-red-500 hover:text-white rounded transition">
            Log in
          </button>
          <button className="border py-1 px-3 text-red-500 hover:bg-red-500 hover:text-white rounded transition max-md:hidden">
            Sign up
          </button>
        </div>
      </Container>
    </header>
  );
};

export default Header;
