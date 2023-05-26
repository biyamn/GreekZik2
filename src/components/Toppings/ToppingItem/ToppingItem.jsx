import React, { useState } from 'react';
import ToppingItemForm from './ToppingItemForm';
import classes from './ToppingItem.module.css';
import yogurtImage from '../../../assets/yogurt.jpg';
const ToppingItem = props => {
  const { price, key, name, description, id, amount, topping, backendData } = props;
  const commaSeparatedPrice = price.toLocaleString(3);

  return (
    <li className={classes.container} key={key}>
        <h3 className={classes.name}>{name}</h3>
        <img className={classes.image} src={yogurtImage} alt={topping.name} />
        <div className={classes.description}>{description}</div>
        <div className={classes.form}>
          <ToppingItemForm
            id={id}  
            amount={amount} 
            onSaveItem={props.onSaveItem} 
            topping={topping}
            backendData={backendData}
            onSaveCategories={props.onSaveCategories}
          />
        </div>
        <div className={classes.price}>{`${commaSeparatedPrice}원`}</div>
    </li>
  );
};

export default ToppingItem;