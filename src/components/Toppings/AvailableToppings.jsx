import React from 'react';
import Card from '../UI/Card';
import ToppingItem from './ToppingItem/ToppingItem';
import classes from './AvailableToppings.module.css';

const AvailableToppings = () => {
  return (
    <section className={classes.toppings}>
      <Card>
        <ToppingItem />
      </Card>
    </section>
  );
};

export default AvailableToppings;