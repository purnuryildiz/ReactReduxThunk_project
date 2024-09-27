import Container from "../components/Container";
import Loader from "../components/Loader";
import Error from "../components/Error";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CartItem from "../components/CartItem";

const Cart = () => {
  const {
    cart = [],
    isLoading = true,
    error = null,
  } = useSelector((store) => store.cart) || {};

  return (
    <Container>
      <h1 className="text-2xl font-bold mb-5">Cart Summary</h1>
      <div>
        {isLoading ? (
          <Loader />
        ) : error ? (
          <Error />
        ) : cart.length === 0 ? ( // Sepet boşsa kontrol
          <p className="flex flex-col items-center gap-3">
            No items in your cart..
            <Link to="/" className="border p-2 shadow rounded hover:bg-gray-100">
              Add Item
            </Link>
          </p>
        ) : (
          cart.map((item) => (
            <div>
              <CartItem key={item.id} item={item} />
            </div>
          ))
        )}
      </div>
    </Container>
  );
};

export default Cart;
