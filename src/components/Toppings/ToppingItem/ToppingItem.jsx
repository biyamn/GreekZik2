import React from 'react';
import ToppingItemForm from './ToppingItemForm';
import classes from './ToppingItem.module.css';

const ToppingItem = (props) => {
  return (
    <li className={classes.topping}>
      <div className={classes.titlePriceDescription}>
        <h3>{props.name}</h3>
        <div className={classes.price}><i>{props.price}</i></div>
        <div className={classes.description}>{props.description}</div>
      </div>
      <ToppingItemForm />
    </li>
  );
};

export default ToppingItem;