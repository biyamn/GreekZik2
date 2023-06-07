import React, { useState } from 'react';
import ToppingItemForm from './ToppingItemForm';
import classes from './ToppingItem.module.css';
import yogurtImage from '../../../assets/yogurt.jpg';
const ToppingItem = ({ topping, backendData, onSaveItem, onSaveCategories}) => {
  const [isHovered, setIsHovered] = useState(false);
  
  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const commaSeparatedPrice = topping.price.toLocaleString(3);

  return (
    <li 
      className={classes.container} 
      key={topping.id}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <h3 className={classes.name}>{topping.name}</h3>
      <div className={classes.description}>{topping.description}</div>
      <div className={classes.form}>
        <ToppingItemForm
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