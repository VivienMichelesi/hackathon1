import React from "react";

const CartContext = React.createContext({
  openPanel: false,
  setOpenPanel() {
    throw Error("Not Implemented");
  },
  products: [],
  add() {
    throw Error("Not Implemented");
  },
  remove() {
    throw Error("Not Implemented");
  },
});
export default CartContext;
