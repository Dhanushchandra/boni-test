const initialState = [];

const itemprice = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_ITEM_PRICE":
      return [...state, action.payload];
    case "REMOVE_ITEM_PRICE":
      return state.filter((item) => item !== action.payload);
    default:
      return state;
  }
};

export default itemprice;
