import productReducer from "./reducers/productReducer";
import cartReducer from "./reducers/cartReducer";
import restaurantReducer from "./reducers/restaurantReducer";
import { combineReducers, createStore, applyMiddleware } from "redux";
import { thunk } from "redux-thunk";

//reducer'ları birleştir:

const rootReducer = combineReducers({
  productReducer,
  restaurantReducer,
  cartReducer,
});

//store'u oluştur:

//applyMiddleware herhangi bir arayazılımı redux'a dahil etmeyi sağlar.
//Thunk 'ı dahil etmek için kullan:

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;

//bundan sonraki aşamada store 'un projeye tanıtılması gerek:
// >> main.jsx ----- Provider ile App i sar ve store'u prop olarak gönder
