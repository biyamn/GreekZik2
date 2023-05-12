import React from 'react';
import HeaderCartButton from './HeaderCartButton';
import classes from './Header.module.css';

const Header = ({ showCartHandler, headerAmount }) => {

  return (
    <>
      <header className={classes.header} >
        <h1>GreekZik</h1>
        <HeaderCartButton onClick={showCartHandler} headerAmount={headerAmount} />
      </header>
    </>
  );
};

export default Header;