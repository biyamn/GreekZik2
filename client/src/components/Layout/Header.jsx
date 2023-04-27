import React from 'react';
import HeaderCartButton from './HeaderCartButton';
import classes from './Header.module.css';

const Header = props => {

  return (
    <>
      <header className={classes.header} >
        <h1>GreekZik</h1>
        <HeaderCartButton onClick={props.showCartHandler} totalAmount={props.totalAmount} />
      </header>
    </>
  );
};

export default Header;