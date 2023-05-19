import classes from './CartItem.module.css';

const CartItem = ({ price, name, amount, handleAddItem, handleRemoveItem, id }) => {
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
        <button onClick={() => handleAddItem(id)}>-</button>
        <button onClick={() => handleRemoveItem(id)}>+</button>
      </div>
    </li>
  );
};

export default CartItem;
