import React from 'react';
import Modal from '../UI/Modal';
import classes from './Cart.module.css';

const Cart = props => {

  return (
    <Modal hideCartHandler={props.hideCartHandler}>
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>0</span>
      </div>
      <div className={classes.actions}>
        <button 
          className={classes['button--alt']} 
          onClick={props.hideCartHandler}
        >
          닫기
        </button>
        <button className={classes.button}>주문</button>
      </div>
    </Modal>
  );
};

export default Cart;