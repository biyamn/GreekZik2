import React, { useContext, useState } from 'react';
import Modal from '../UI/Modal';
import MainCartItem from './MainCartItem';
import classes from './MainCartModal.module.css';
import CartContext from '../../store/cartContext'; 

const MainCartModal = ({ hideMainCartHandler }) => {
  const { subCartItems, subCartTotalPrice } = useContext(CartContext);
  const [fullItems, setFullItems] = useState([]);
  const merged = subCartItems.filter(item => item.id === '');
  console.log('merged: ', merged);

  const cartItem = (
    <ul className={classes['cart-items']}>
      {subCartItems.map(item => 
        <MainCartItem 
          key={item.id} 
          id={item.id}
          name={item.name} 
          amount={item.amount} 
          price={item.price.toLocaleString(3)} 
        />
      )}
    </ul>
    );
    
  const commaSeparatedTotalPrice = subCartTotalPrice.toLocaleString(3);

  return (
    <Modal hideHandler={hideMainCartHandler}>
      <div>
        {cartItem}
      </div>
      <div className={classes.total}>
        <span>총액</span>
        <span>{commaSeparatedTotalPrice}원</span>
      </div>
      <div className={classes.actions}>
        <button 
          className={classes['button--alt']} 
          onClick={hideMainCartHandler}
        >
          닫기
        </button>
        <button className={classes.button}>주문</button>
      </div>
    </Modal>
  );
};

export default MainCartModal;