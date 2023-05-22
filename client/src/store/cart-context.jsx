import React, { createContext } from 'react';
const cartContext = createContext({
  items: [],
  totalPrice: 0,
  onSave: (selectedItemData) => {},
  onAdd: (id) => {},
  onRemove: (id) => {}
});

export default cartContext;