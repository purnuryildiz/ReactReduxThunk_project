import { useSelector } from "react-redux";

import ActionTypes from "../redux/actionTypes";
const Home = () => {
  const state = useSelector((store) => store.restaurantReducer);

  console.log(state);

  return (
    <div className="p-5 text-4xl ">
      <h1>Home</h1>
      <p>{state.restaurants.length} restaurant </p>
    </div>
  );
};

export default Home;
