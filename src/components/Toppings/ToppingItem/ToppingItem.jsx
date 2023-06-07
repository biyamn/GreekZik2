import React, { useState } from 'react';
import ToppingItemForm from './ToppingItemForm';
import classes from './ToppingItem.module.css';
import yogurtImage from '../../../assets/yogurt.jpg';
const ToppingItem = ({ price, name, description, id, amount, topping, backendData, onSaveItem, onSaveCategories}) => {
  const [isHovered, setIsHovered] = useState(false);
  
  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const commaSeparatedPrice = price.toLocaleString(3);

  return (
    <li 
      className={classes.container} 
      key={id}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <h3 className={classes.name}>{name}</h3>
      <div className={classes.description}>{description}</div>
      <div className={classes.form}>
        <ToppingItemForm
          id={id}  
          amount={amount} 
          onSaveItem={onSaveItem} 
          topping={topping}
          backendData={backendData}
          onSaveCategories={onSaveCategories}
        />
      </div>
      <div className={classes.price}>{`${commaSeparatedPrice}원`}</div>
      <img className={classes.image} src={yogurtImage} alt={topping.name} />
    </li>
  );
};

export default ToppingItem;