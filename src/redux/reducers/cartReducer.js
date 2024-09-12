//reducer'ın amacı bir state'i tutmak ve onu yönetmek, nasıl değişeceğine karar vermek. Tutulan state'in ilk değeri verilmeli:
//state = initialState'e eşitleyerek varsayılan değer atanmış oluyor:

const initialState = {};
const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case "X":
      return state;
    case "Y":
      return state;
    case "Z":
      return state;
    default:
      return state;
  }
};

export default cartReducer;
