import React from 'react';
import HeaderCartButton from './HeaderCartButton';
import classes from './Header.module.css';

const Header = ({ showCartHandler, cartItems }) => {

  return (
    <>
      <header className={classes.header} >
        <h1>GreekZik</h1>
        <HeaderCartButton onClick={showCartHandler} cartItems={cartItems} />
      </header>
    </>
  );
};

export default Header;