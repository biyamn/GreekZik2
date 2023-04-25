import React from 'react';
import CartIcon from '../Cart/CartIcon';
import classes from './HeaderCartButton.module.css';

const HeaderCartButton = props => {
  const onOpen = () => {
    props.onOpen(true);
  }

  return (
    <button className={classes.button} onClick={() =>  onOpen}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>장바구니</span>
      <span className={classes.badge}>0</span>
    </button>
  );
};

export default HeaderCartButton;