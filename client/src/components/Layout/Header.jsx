import React, { useContext } from 'react';
import HeaderCartButton from './HeaderCartButton';
import { Link } from 'react-router-dom';
import classes from './Header.module.css';

const Header = ({ showCartHandler }) => {
  return (
    <>
      <header className={classes.header}>
        <h1>GreekZik</h1>
        <Link to="/products">상품</Link>
        <Link to="/mypage">마이페이지</Link>
        <HeaderCartButton onClick={showCartHandler} />
      </header>
    </>
  );
};

export default Header;
