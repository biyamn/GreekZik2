import classes from './CartItem.module.css';

const CartItem = ({ price, name, amount, onRemove, onAdd, id }) => {
  // n개의 수량을 선택한 후 담기 버튼을 누르면 n만큼의 수량이 CartItem에 찍혀있어야 함(amount)
  // 그니까 ToppingItemForm의 수량과 동기화하라는 것이 아님. 그저 'submit 되었을 때' 그 수량이 찍히면 됨.
  // 그럼 amount가 state여야겠네? 여러개여서 공간도 여러개여야겠고? 
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
