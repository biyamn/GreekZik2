import React, { useContext } from 'react';
import CartIcon from '../Cart/CartIcon';
import classes from './HeaderCartButton.module.css';
import CartContext from '../../store/cartContext';
const HeaderCartButton = ({ onClick }) => {
  const cartCtx = useContext(CartContext);
  
  const numberOfCartItems = cartCtx.items.reduce((curNumber, item) => {
    return curNumber + item.amount;
  }, 0);

  return (
    <button className={classes.button} onClick={onClick}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>장바구니</span>
      <span className={classes.badge}>{numberOfCartItems}</span>
    </button>
  );
};

export default HeaderCartButton;