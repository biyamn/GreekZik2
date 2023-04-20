import React from 'react';
import ToppingsSummary from './ToppingsSummary';
import AvailableToppings from './AvailableToppings';
import classes from './Toppings.module.css';

const Toppings = () => {
  return (
    <div className={classes.toppings}>
      <ToppingsSummary />
      <AvailableToppings />
    </div>
  );
};

export default Toppings;