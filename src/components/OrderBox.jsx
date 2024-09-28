import { useSelector } from "react-redux";

const OrderBox = () => {
  const { cart } = useSelector((store) => store.cart);
  const totalAmount = cart.reduce((a, b) => a + b.amount, 0);
  const totalPrice = cart.reduce((a, b) => a + b.amount * b.price, 0);

  return (
    <div className="p-5 rounded-md border order-2 h-fit ">
      <h2 className="font-semibold text-xl">Order Details</h2>
      <p className="flex gap-2 items-center my-4">
        <span className="text-gray-600 ">Number of Items:</span>
        <span className="text-lg font-bold text-red-500 ">{totalAmount} </span>
      </p>
      <p className="flex gap-2 items-center my-4">
        <span className="text-gray-600 ">Total Price: :</span>
        <span className="text-lg font-bold text-red-500 ">{totalPrice.toFixed(2)} $</span>
      </p>
      <button className="bg-red-500 p-1 px-3 rounded-md text-white transition hover:bg-red-400 ">
        Confirm Order
      </button>
    </div>
  );
};

export default OrderBox;
