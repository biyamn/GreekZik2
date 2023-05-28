import React, { useContext } from 'react';  
import classes from './CartItem.module.css';
import CartContext from '../../store/CartContext';

const CartItem = ({ price, name, amount, id }) => {
  const cartCtx = useContext(CartContext);

  return (
    <li className={classes['cart-item']}>
      <div>
        <h2>{name}</h2>
        <div className={classes.summary}>
          <span className={classes.price}>{price}원</span>
          <span className={classes.amount}>x {amount}</span>
        </div>
      </div>
      <div className={classes.actions}>
        <button onClick={() => cartCtx.onRemove(id)}>-</button>
        <button onClick={() => cartCtx.onAdd(id)}>+</button>
      </div>
    </li>
  );
};

export default CartItem;
