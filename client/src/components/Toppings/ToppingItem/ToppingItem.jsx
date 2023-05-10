import React, { useState } from 'react';
import ToppingItemForm from './ToppingItemForm';
import classes from './ToppingItem.module.css';

const ToppingItem = props => {
  const { price, key, name, description, id, amount, topping, backendData } = props;

  const commaSeparatedPrice = price.toLocaleString(3);

  return (
    <li className={classes.topping} key={key}>
      <div className={classes.namePriceDescription}>
        <h3 className={classes.name}>{name}</h3>
        <div className={classes.price}>{`${commaSeparatedPrice}원`}</div>
        <div className={classes.description}>{description}</div>
      </div>
      <ToppingItemForm
        id={id}  
        amount={amount} 
        onSaveItem={props.onSaveItem} 
        topping={topping}
        backendData={backendData}
        onSaveCategories={props.onSaveCategories}
      />
    </li>
  );
};

export default ToppingItem;