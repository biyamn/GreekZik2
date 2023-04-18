import React from 'react';
import Card from '../UI/Card';
import ToppingItem from './ToppingItem/ToppingItem';

const AvailableToppings = () => {
  return (
    <section>
      <Card>
        <ToppingItem />
      </Card>
    </section>
  );
};

export default AvailableToppings;