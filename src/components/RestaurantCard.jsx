import { FaStar, FaClock } from "react-icons/fa";
import { MdDeliveryDining } from "react-icons/md";
import { Link } from "react-router-dom";

const RestaurantCard = ({ data }) => {
  return (
    <Link
      to={`/restaurant/${data.id}`}
      className="w-250 h-250 rounded-lg shadow-lg transition-transform duration-300 hover:scale-105 hover:brightness-75 relative"
    >
      <div className="bg-red-500 p-1 px-3 text-sm absolute end-1 top-2 rounded-md text-white">
        {data.distance} km distance
      </div>
      {/* object cover *** farklı boyutlardaki resimleri düzgün kırparak boyutları aynı hale getirirken resim kalitesini bozmamak için: */}
      <div className="w-full h-[300px]">
        <img
          className="w-full h-full object-cover rounded-lg"
          src={data.photo}
          alt={data.name}
        />
      </div>
      <div className="p-3">
        <div className="flex justify-between items-center">
          <h3 className="text-l md:text-xl font-semibold">{data.name}</h3>
          <p className="flex items-center gap-2 text-red-500">
            <FaStar />
            {data.rating}
          </p>
        </div>
        <p className="text-sm my-2 text-gray-500">
          <span className="mr-2">{data.minPrice} $</span>
          minimum
        </p>
        <div className="flex justify-between items-center">
          <p className="flex gap-2 items-center font-semibold text-gray-500">
            <FaClock />
            <span>{data.estimatedDelivery} min. </span>
          </p>
          {data.isDeliveryFree && (
            <p className="flex gap-2 text-gray-500">
              <MdDeliveryDining className="text-2xl" />
              Free Delivery
            </p>
          )}
        </div>
      </div>
    </Link>
  );
};

export default RestaurantCard;
