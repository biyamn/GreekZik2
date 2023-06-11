import React, { useContext } from 'react';
import HeaderCartButton from './HeaderCartButton';
import classes from './Header.module.css';
const Header = ({ showCartHandler }) => {

  return (
    <>
      <header className={classes.header} >
        <h1>GreekZik</h1>
        <HeaderCartButton onClick={showCartHandler} />
      </header>
    </>
  );
};

export default Header;