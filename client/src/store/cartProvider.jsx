import React from 'react';
import cartContext from './cart-context';

const cartProvider = ({ children }) => {
  return (
    <cartContext.Provider value={cartContext}>
      {children}
    </cartContext.Provider>
  );
};

export default cartProvider;