import { FaPlus } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { addToBasket } from "../redux/actions/basketActions";

const ProductCard = ({ item }) => {
  const dispatch = useDispatch();
  const handleAdd = () => {
    dispatch(addToBasket(item));
  };
  return (
    <div className="grid grid-cols-[1fr_115px] gap-3 border shadow p-3  rounded-lg hover:bg-red-100  hover:scale-[1.02] cursor-pointer transition duration-300 ">
      <div className="flex flex-col justify-between">
        <div className="flex flex-col justify-between">
          <h1 className="text-xl font-semibold">{item.title} </h1>
          <p className="text-gray-500 my-2">{item.desc} </p>
        </div>
        <p className="text-lg font-semibold">
          {item.price} <span> {"\u20BA"} </span>{" "}
        </p>
      </div>
      <div className=" size-[115px] relative ">
        <img src={item.photo} className="rounded-md object-cover w-full h-full" />
        <button
          onClick={handleAdd}
          className="absolute end-2 bottom-2 bg-white rounded-full hover:bg-red-100 size-8 grid place-items-center "
        >
          <FaPlus />
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
