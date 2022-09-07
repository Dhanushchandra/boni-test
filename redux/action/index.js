const addItem = () => {
  return {
    type: "ADD_ITEM",
  };
};

const removeItem = () => {
  return {
    type: "REMOVE_ITEM",
  };
};

const addItemToCart = (item) => {
  return {
    type: "ADD_ITEM_TO_CART",
    payload: item,
  };
};

const removeItemToCart = (item) => {
  return {
    type: "REMOVE_ITEM_FROM_CART",
    payload: item,
  };
};

const addItemprice = (item) => {
  return {
    type: "ADD_ITEM_PRICE",
    payload: item,
  };
};

const removeItemprice = (item) => {
  return {
    type: "REMOVE_ITEM_PRICE",
    payload: item,
  };
};

export {
  addItem,
  removeItem,
  addItemToCart,
  removeItemToCart,
  addItemprice,
  removeItemprice,
};
