import React from 'react';
import ToppingItemForm from './ToppingItemForm';
import classes from './ToppingItem.module.css';

const ToppingItem = () => {
  return (
    <li className={classes.topping}>
      <div className={classes.titleAndPrice}>
        <h3>무화과</h3>
        <div className={classes.price}><i>1,000원</i></div>
      </div>
      <ToppingItemForm />
    </li>
  );
};

export default ToppingItem;