import classes from './CartItem.module.css';

const CartItem = ({ price, name, amount, onRemove, onAdd, id }) => {

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
        <button onClick={() => onRemove(id, amount)}>-</button>
        <button onClick={() => onAdd(id, amount)}>+</button>
      </div>
    </li>
  );
};

export default CartItem;
