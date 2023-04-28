import React from 'react';
import ToppingItemForm from './ToppingItemForm';
import classes from './ToppingItem.module.css';

const ToppingItem = props => {
  const onSaveItem = (amount) => {
    const selectedItemData = {
      id: props.id,
      name: props.name,
      price: props.price,
      amount: amount
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
      <ToppingItemForm onSaveItem={onSaveItem} id={props.id} />
    </li>
  );
};

export default ToppingItem;