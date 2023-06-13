import { createContext } from 'react';
const cartContext = createContext({
  subCartItems: [],
  mainCartItems: [],

  subCartTotalPrice: 0,
  mainCartTotalPrice: 0,
  
  onSave: (selectedItemData) => {},
  onAdd: (id) => {},
  onRemove: (id) => {}
});

export default cartContext;