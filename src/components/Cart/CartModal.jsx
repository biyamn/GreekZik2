import React, { useContext } from 'react';
import Modal from '../UI/Modal';
import CartItem from './CartItem';
import classes from './CartModal.module.css';
import CartContext from '../../store/cartContext'; 

const Cart = ({ hideCartHandler }) => {
  const { items, totalPrice } = useContext(CartContext);

  const cartItem = (
    <ul className={classes['cart-items']}>
      {items.map(item => 
        <CartItem 
          key={item.id} 
          id={item.id}
          name={item.name} 
          amount={item.amount} 
          price={item.price.toLocaleString(3)} 
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