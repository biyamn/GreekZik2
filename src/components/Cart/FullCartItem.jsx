import React, { useContext } from 'react';  
import classes from './PartialCartItem.module.css';
import CartContext from '../../store/cartContext';

const FullCartItem = ({ price, name, amount, id }) => {
  const { onRemove, onAdd } = useContext(CartContext);

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
        <button onClick={() => onRemove(id)}>-</button>
        <button onClick={() => onAdd(id)}>+</button>
      </div>
    </li>
  );
};

export default FullCartItem;
