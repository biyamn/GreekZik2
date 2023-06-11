import React, { useContext } from 'react';
import MainHeaderCartButton from './MainHeaderCartButton';
import classes from './MainHeader.module.css';

const SubHeader = ({ showCartHandler }) => {

  return (
    <>
      <header className={classes.header} >
        <h1>GreekZik</h1>
        <MainHeaderCartButton onClick={showCartHandler} />
      </header>
    </>
  );
};

export default SubHeader;