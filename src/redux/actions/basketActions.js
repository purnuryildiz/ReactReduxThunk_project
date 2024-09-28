import { v4 } from "uuid";
import api from "../../utils/api";
import ActionTypes from "../actionTypes";

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

// Sepete yeni eleman ekleyen Thunk Aksiyonu:
export const addToBasket = (product) => (dispatch) => {
  // Sepete eklenecek olan ürünün bilgilerini belirle
  const newItem = {
    id: v4(),
    productId: product.id,
    title: product.title,
    price: product.price,
    photo: product.photo,
    amount: 1,
  };

  // API'ye sepete eleman eklemek için istek at
  api
    .post("/cart", newItem)
    // İstek başarılı olursa reducer'a haber ver
    .then(() =>
      dispatch({
        type: ActionTypes.ADD_TO_BASKET,
        payload: newItem,
      })
    )
    .catch((err) => {
      dispatch({
        type: ActionTypes.CART_ERROR,
        payload: err.message,
      });
    });
};

//Sepetteki elemanın miktarını güncelleyen Thunk aksiyonu:
//güncellenecek item ın id sine ve yeni miktarına ihtiyaç var parametre olarak:
export const updateItem = (id, newAmount) => (dispatch) => {
  api
    .patch(`/cart/${id}`, { amount: newAmount })
    //istek başarılı olursa reducer'a güncellemeyi haber veriyouz
    .then((res) => {
      dispatch({ type: ActionTypes.UPDATE_ITEM, payload: res.data });
    });
};

//Sepetten elemanı kaldıran thunk aksiyonu
export const deleteItem = (id) => (dispatch) => {
  //api'ye silmek için istek at
  api
    .delete(`/cart/${id}`)
    //başarılı olursa reducer'a elamnın  silinme haberini gönder
    .then(() =>
      dispatch({
        type: ActionTypes.DELETE_ITEM,
        payload: id,
      })
    );
};
