import React from 'react';
import MainHeaderCartButton from './MainHeaderCartButton';
import classes from './MainHeader.module.css';

const SubHeader = ({ showMainCartHandler }) => {

  return (
    <>
      <header className={classes.header} >
        <h1>GreekZik</h1>
        <MainHeaderCartButton onClick={showMainCartHandler} />
      </header>
    </>
  );
};

export default SubHeader;