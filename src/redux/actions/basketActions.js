import { v4 } from "uuid";
import api from "../../utils/api";
import ActionTypes from "../actionTypes";
import { GiPriceTag } from "react-icons/gi";

// Sepetteki elemanları alan Thunk Aksiyonu:
export const getCart = () => {
  return (dispatch) => {
    dispatch({
      type: ActionTypes.CART_LOADING,
    });

    api
      .get("/cart")
      .then((res) => {
        dispatch({
          type: ActionTypes.CART_SUCCESS,
          payload: res.data,
        });
      })
      .catch((err) => {
        dispatch({
          type: ActionTypes.CART_ERROR,
          payload: err.message,
        });
      });
  };
};

//Sepete yeni eleman ekleyen Thunk Aksiyonu:

export const addToBasket = (product) => (dispatch) => {
  //? 1-Sepete eklenecek olan ürünün bilgilerini belirle
  const newItem = {
    id: v4(),
    productId: product.id,
    title: product.title,
    price: product.price,
    photo: product.photo,
    amount: 1,
  };
};
