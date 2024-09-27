import { useDispatch, useSelector } from "react-redux";
import Loader from "../components/Loader";
import Error from "../components/Error";
import { setRestaurants } from "../redux/actions/restActions";
import Container from "../components/Container";
import RestaurantCard from "../components/RestaurantCard";

const Home = () => {
  const dispatch = useDispatch();
  const { isLoading, error, restaurants = [] } = useSelector((store) => store.restaurant);

  const retry = () => dispatch(setRestaurants());

  return (
    <Container>
      {isLoading ? (
        <Loader />
      ) : error ? (
        <Error msg={error.message || "An error occurred."} retry={retry} />
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-6">
          {restaurants.map((item) => (
            <RestaurantCard key={item.id} data={item} />
          ))}
        </div>
      )}
    </Container>
  );
};

export default Home;
