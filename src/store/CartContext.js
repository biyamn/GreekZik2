import { createContext } from "react";
const CartContext = createContext({
  subCartItems: [],
  mainCartItems: [],

  subCartTotalPrice: 0,
  mainCartTotalPrice: 0,

  onSave: (selectedItemData) => {},
  onAdd: (id) => {},
  onRemove: (id) => {},
});

export default CartContext;
