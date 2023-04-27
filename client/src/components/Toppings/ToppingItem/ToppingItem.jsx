import React from 'react';
import ToppingItemForm from './ToppingItemForm';
import classes from './ToppingItem.module.css';

const ToppingItem = props => {
  const onSaveAmount = (enteredAmount) => {
    props.onSaveAmount(enteredAmount);
  }

  const onSaveItem = id => {
    const selectedItemData = {
      id: id,
      name: props.name,
      price: props.price,
      description: props.description
    }
    props.onSaveItem(selectedItemData);
  }

  return (
    <li className={classes.topping}>
      <div className={classes.namePriceDescription}>
        <h3 className={classes.name}>{props.name}</h3>
        <div className={classes.price}>{`${props.price}원`}</div>
        <div className={classes.description}>{props.description}</div>
      </div>
      <ToppingItemForm onSaveAmount={onSaveAmount} onSaveItem={onSaveItem} id={props.id} />
    </li>
  );
};

export default ToppingItem;