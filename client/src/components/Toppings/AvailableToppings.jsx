import React, { useState } from 'react';
import ToppingItem from './ToppingItem/ToppingItem';
import classes from './AvailableToppings.module.css';

const AvailableToppings = props => {
  const onSaveItem = selectedItemData => {
    props.onSaveItem(selectedItemData);
  }

  const filtered = props.backendData.filter(category => {
    return category.id === props.selectedCategory;
  })

  console.log('filtered: ', filtered)
  const toppingsList = filtered[0].DUMMY_TOPPINGS.map(topping => 
    <ToppingItem
      id={topping.id}
      key={topping.id}
      name={topping.name}
      description={topping.description}
      price={topping.price}
      onSaveItem={onSaveItem}
    />
  )

  console.log(filtered[0].DUMMY_TOPPINGS.map(topping => topping));
  return (
    <section className={classes.toppings}>
      {toppingsList}
    </section>
  );
};

export default AvailableToppings;