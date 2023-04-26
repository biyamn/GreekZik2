import React from 'react';
import HeaderCartButton from './HeaderCartButton';
import classes from './Header.module.css';

const Header = props => {

  return (
    <>
      <header className={classes.header} >
        <h1>GreekZik</h1>
        <HeaderCartButton onClick={props.showCartHandler} />
      </header>
    </>
  );
};

export default Header;