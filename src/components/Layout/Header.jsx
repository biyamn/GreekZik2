import React from 'react';
import HeaderCartButton from './HeaderCartButton';
import classes from './Header.module.css';

const Header = () => {
  return (
    <>
      <header className={classes.header}>
        <h1>GreekZik</h1>
        <HeaderCartButton />
      </header>
    </>
  );
};

export default Header;