import React from 'react';
import AvailableToppings from './AvailableToppings';
import ToppingsCategory from './ToppingsCategory';
import Card from './../UI/Card';
import classes from './Toppings.module.css';

const Toppings = ({ onSelect, onSaveCategories, backendData, selectedCategory }) => {
  console.log('backendData: ', backendData)

  return (
    <div className={classes.toppings}>
        <div className={classes.container}>
          <div className={classes.ulContainer}>
            <ul className={classes.liContainer}>
              <ToppingsCategory
                backendData={backendData}
                onSelect={onSelect}
              />
            </ul>
          </div>
          <AvailableToppings
            selectedCategory={selectedCategory} 
            onSaveCategories={onSaveCategories}
            backendData={backendData}
          />
        </div>
    </div>
    );
  }

export default Toppings;