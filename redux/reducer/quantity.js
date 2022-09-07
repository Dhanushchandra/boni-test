const initialState = 1;

const cartQuantity = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_ITEM":
      return state + action.payload;
    case "REMOVE_ITEM":
      return state - action.payload;
    default:
      return state;
  }
};

export default cartQuantity;
