import React from 'react';
import CartIcon from '../Cart/CartIcon';

const HeaderCartButton = () => {
  return (
    <button>
      <span>
        <CartIcon />
      </span>
      <span>장바구니</span>
      <span>0</span>
    </button>
  );
};

export default HeaderCartButton;