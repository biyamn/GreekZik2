import React from 'react';
import Modal from '../UI/Modal';
import CartItem from './CartItem';
import classes from './Cart.module.css';

const Cart = props => {
  const cartItems = (
    <ul className={classes['cart-items']}>
      {props.totalItemData.map(item => 
        <CartItem 
          key={item.id} 
          name={item.name} 
          amount={item.amount} 
          price={item.price} 
        />
      )}
    </ul>
    );

  return (
    <Modal hideCartHandler={props.hideCartHandler}>
      <div>
        {cartItems}
      </div>
      <div className={classes.total}>
        <span>총계</span>
        <span>{props.totalPrice}</span>
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