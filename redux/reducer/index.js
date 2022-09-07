import { combineReducers } from "redux";
import cartQuantity from "./quantity";
import cartItems from "./cartItems";
import itemPrice from "./Itemprice";

const rootReducer = combineReducers({
  cartQuantity,
  cartItems,
  itemPrice,
});

export default rootReducer;
