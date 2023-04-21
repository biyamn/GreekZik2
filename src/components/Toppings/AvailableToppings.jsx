import React from 'react';
import Card from '../UI/Card';
import ToppingItem from './ToppingItem/ToppingItem';
import classes from './AvailableToppings.module.css';

const AvailableToppings = (props) => {
  const toppingsList = props.toppingsInSelectedCategory.DUMMY_TOPPINGS.map(topping => 
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
      <Card>
        {toppingsList}
      </Card>
    </section>
  );
};

export default AvailableToppings;