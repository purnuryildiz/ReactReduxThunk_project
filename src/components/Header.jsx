import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { IoRestaurant } from "react-icons/io5";
import { GrBasket } from "react-icons/gr";
import Container from "../components/Container";

const Header = () => {
  // Restaurant verilerini alıyoruz
  const { restaurants } = useSelector((store) => store.restaurant);

  // Cart verilerini alıyoruz
  const { cart } = useSelector((store) => store.cart);
  //cart dizisindeki elemanların amountlarını toplamak için
  const total = cart.reduce((a, b) => a + b.amount, 0);

  return (
    <header className="shadow">
      <Container designs="flex justify-between items-center">
        <Link to="/" className="text-red-500 font-[900] text-2xl font-mono md:text-3xl">
          FlavorFinder
        </Link>
        <div className="flex gap-5">
          <Link to="/" className="flex items-center gap-1 hover:underline cursor-pointer">
            {restaurants.length} <IoRestaurant className="text-red-500" />
            Restaurants
          </Link>
          <button className="border py-1 px-3 text-red-500 hover:bg-red-500 hover:text-white rounded transition max-md:hidden ">
            Log in
          </button>
          <button className="border py-1 px-3 text-red-500 hover:bg-red-500 hover:text-white rounded transition max-md:hidden">
            Sign up
          </button>
          <Link
            to="/cart"
            className="flex items-center p-2 gap-2 hover:bg-red-100 rounded-full"
          >
            <GrBasket />
            <span>{total}</span>
          </Link>
        </div>
      </Container>
    </header>
  );
};

export default Header;
