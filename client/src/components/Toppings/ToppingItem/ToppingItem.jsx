import React from 'react';
import ToppingItemForm from './ToppingItemForm';
import classes from './ToppingItem.module.css';

const ToppingItem = props => {
  const onSaveAmount = (enteredAmount) => {
    props.onSaveAmount(enteredAmount);
  }
  return (
    <li className={classes.topping}>
      <div className={classes.namePriceDescription}>
        <h3 className={classes.name}>{props.name}</h3>
        <div className={classes.price}>{`${props.price}원`}</div>
        <div className={classes.description}>{props.description}</div>
      </div>
      <ToppingItemForm onSaveAmount={onSaveAmount} />
    </li>
  );
};

export default ToppingItem;