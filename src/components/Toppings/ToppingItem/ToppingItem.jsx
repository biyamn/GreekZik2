import React from 'react';
import ToppingItemForm from './ToppingItemForm';
import classes from './ToppingItem.module.css';

const ToppingItem = () => {
  return (
    <li className={classes.topping}>
      <div>
        <h3>무화과</h3>
        <div className={classes.price}>1,000원</div>
      </div>
      <div>
        <ToppingItemForm />
      </div>
    </li>
  );
};

export default ToppingItem;