import React from 'react';
import ToppingItem from './ToppingItem/ToppingItem';
import classes from './AvailableToppings.module.css';

const AvailableToppings = (props) => {
    const toppingsList = props.toppingsInSelectedCategory[0].DUMMY_TOPPINGS.map(topping => 
      <ToppingItem
        id={topping.id}
        key={topping.id}
        name={topping.name}
        description={topping.description}
        price={topping.price}
      />
  )
  console.log(props.toppingsInSelectedCategory)
  return (
    <section className={classes.toppings}>
      {toppingsList}
    </section>
  );
};

export default AvailableToppings;