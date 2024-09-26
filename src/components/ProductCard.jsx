import React from "react";

const ProductCard = ({ item }) => {
  return (
    <div className="grid grid-cols-[1fr_115px] ">
      <div>
        <div>
          <h1>{item.title} </h1>
          <p>{item.price} </p>
        </div>
      </div>
      <div className="bg-red-500">selam</div>
    </div>
  );
};

export default ProductCard;
