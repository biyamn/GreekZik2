import React from 'react';
import Modal from '../UI/Modal';
import CartItem from './CartItem';
import classes from './Cart.module.css';

const Cart = ({ totalItemData, totalPrice, hideCartHandler }) => {
  const cartItems = (
    <ul className={classes['cart-items']}>
      {totalItemData.map(item => 
        <CartItem 
          key={item.id} 
          name={item.name} 
          amount={item.amount} 
          price={item.price.toLocaleString(3)} 
        />
      )}
    </ul>
    );
  const commaSeparatedPrice = totalPrice.toLocaleString(3);

  return (
    <Modal hideCartHandler={hideCartHandler}>
      <div>
        {cartItems}
      </div>
      <div className={classes.total}>
        <span>총계</span>
        <span>{commaSeparatedPrice}원</span>
      </div>
      <div className={classes.actions}>
        <button 
          className={classes['button--alt']} 
          onClick={hideCartHandler}
        >
          닫기
        </button>
        <button className={classes.button}>주문</button>
      </div>
    </Modal>
  );
};

export default Cart;