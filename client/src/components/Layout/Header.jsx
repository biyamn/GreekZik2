import React from 'react';
import HeaderCartButton from './HeaderCartButton';
import classes from './Header.module.css';

const Header = ({ showCartHandler, totalAmount }) => {

  return (
    <>
      <header className={classes.header} >
        <h1>GreekZik</h1>
        <HeaderCartButton onClick={showCartHandler} totalAmount={totalAmount} />
      </header>
    </>
  );
};

export default Header;