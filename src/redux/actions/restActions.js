import api from "../../utils/api";
import ActionTypes from "../actionTypes";

//Normal Aksiyon Fonksiyonlar
//Sadece bir nesne return ederler:

//aksiyon oluşturan  nesne return eden fonksiyonları belirle:
export const setLoading = (payload) => ({
  type: ActionTypes.REST_LOADING,
});

export const setRestaurants = (payload) => ({
  type: ActionTypes.REST_SUCCESS,
  payload,
});

export const setError = (payload) => ({
  type: ActionTypes.REST_ERROR,
  payload,
});

//Thunk Fonksiyonu
//İçerisinde bir fonksiyon return eder:
//Thunk bu fonksiyon içerisindeki fonksiyonu aksiyon tetiklendiği anda algılar ve bu fonksiyon içerisinde api istekleri atılabilir:

export const getData = () => {
  return async (dispatch) => {
    dispatch(setLoading());

    api
      .get("/restaurants")
      .then((res) => dispatch(setRestaurants(res.data)))
      .catch((err) => dispatch(setError(err)));
  };
};
