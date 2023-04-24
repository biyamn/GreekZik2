import React, { useState } from 'react';
import ToppingItem from './ToppingItem/ToppingItem';
import classes from './AvailableToppings.module.css';

const AvailableToppings = (props) => {

  const filtered = props.backendData.filter(category => {
    return category.id === props.selectedCategory;
  })

  const toppingsList = filtered[0].DUMMY_TOPPINGS.map(topping => 
    <ToppingItem
      id={topping.id}
      key={topping.id}
      name={topping.name}
      description={topping.description}
      price={topping.price}
    />
  )

  return (
    <section className={classes.toppings}>
      {toppingsList}
    </section>
  );
};

export default AvailableToppings;