import React from 'react';
import Modal from '../UI/Modal';
import CartItem from './CartItem';
import classes from './Cart.module.css';

const Cart = ({ cartItems, totalPrice, hideCartHandler, onRemove, onAdd }) => {
  const cartItem = (
    <ul className={classes['cart-items']}>
      {cartItems.map(item => 
        <CartItem 
          key={item.id} 
          categoryId={cartItems.id}
          id={item.id}
          name={item.name} 
          amount={item.amount} 
          price={item.price.toLocaleString(3)} 
          onRemove={onRemove}
          onAdd={onAdd}
        />
      )}
    </ul>
    );
    
  const commaSeparatedTotalPrice = totalPrice.toLocaleString(3);

  return (
    <Modal hideCartHandler={hideCartHandler}>
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