import React from 'react';
import HeaderCartButton from './HeaderCartButton';
import classes from './Header.module.css';

const Header = () => {
  const onOpen = () => {
    props.onOpen(true);
  }
  
  return (
    <>
      <header className={classes.header} >
        <h1>GreekZik</h1>
        <HeaderCartButton onClick={() => onClick} onOpen={onOpen} />
      </header>
    </>
  );
};

export default Header;