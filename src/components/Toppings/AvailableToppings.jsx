import React from 'react';
import ToppingItem from './ToppingItem/ToppingItem';
import classes from './AvailableToppings.module.css';

const AvailableToppings = props => {
  const {backendData, selectedCategory} = props
  const filteredCategory = Object.values(backendData[1].toppingData).filter(category => {
    return category.id === selectedCategory
  })

  const toppingsList = filteredCategory[0].DUMMY_TOPPINGS.map(topping => 
    <ToppingItem
      topping={topping}
      backendData={backendData}
      onSaveCategories={props.onSaveCategories}
    />
  )
  
  return (
    <section className={classes.toppings}>
      {toppingsList}
    </section>
  );
};

export default AvailableToppings;