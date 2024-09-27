//reducer'ın amacı bir state'i tutmak ve onu yönetmek, nasıl değişeceğine karar vermek. Tutulan state'in ilk değeri verilmeli:
//state = initialState'e eşitleyerek varsayılan değer atanmış oluyor:

// reducers/cartReducer.js
import ActionTypes from "../actionTypes";

const initialState = {
  cart: [],
  isLoading: true,
  error: null,
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.CART_LOADING:
      return { ...state, isLoading: true };
    case ActionTypes.CART_ERROR:
      return { ...state, isLoading: false, error: action.payload };
    case ActionTypes.CART_SUCCESS:
      return { isLoading: false, error: null, cart: action.payload };
    default:
      return state;
  }
};

export default cartReducer;
