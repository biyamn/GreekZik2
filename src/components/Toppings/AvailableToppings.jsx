import React from 'react';
import ToppingItem from './ToppingItem/ToppingItem';
import classes from './AvailableToppings.module.css';

const AvailableToppings = props => {
  const {backendData, selectedCategory} = props

  const filteredCategory = backendData.filter(category => {
    return category.id === selectedCategory
  })
  console.log('filteredCategory: ', filteredCategory)
  const toppingsList = filteredCategory[0].DUMMY_TOPPINGS.map(topping => 
    <ToppingItem
      key={topping.id}
      id={topping.id}       
      name={topping.name}
      description={topping.description}
      price={topping.price}
      amount={topping.amount}
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