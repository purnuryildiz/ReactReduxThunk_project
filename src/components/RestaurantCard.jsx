import React from "react";
import { Link } from "react-router-dom";

const RestaurantCard = ({ data }) => {
  return (
    <Link
      to={`/restaurant/${data.id}`}
      className="w-250 h-250 rounded-lg shadow-lg transition-transform duration-300 hover:scale-105 hover:brightness-75"
    >
      {/* object cover *** farklı boyutlardaki resimleri düzgün kırparak boyutları aynı hale getirirken resim kalitesini bozmamak için: */}
      <img
        className="w-full h-full object-cover rounded-lg"
        src={data.photo}
        alt="Restaurant"
      />
    </Link>
  );
};

export default RestaurantCard;
