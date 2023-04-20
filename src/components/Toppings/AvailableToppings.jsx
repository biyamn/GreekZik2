import React from 'react';
import Card from '../UI/Card';
import ToppingItem from './ToppingItem/ToppingItem';
import classes from './AvailableToppings.module.css';

const DUMMY_TOPPINGS = [
  {
    id: 't1',
    name: '무화과',
    description: '인기만점 부드럽고 향기로운 무화과',
    price: 2000,
  },
  {
    id: 't2',
    name: '생딸기',
    description: '달콤하고 싱싱한 설향딸기',
    price: 2000,
  },
  {
    id: 't3',
    name: '블루베리',
    description: '단단하고 싱그러운 블루베리',
    price: 1000,
  },
  {
    id: '4',
    name: '샤인머스켓',
    description: '고당도 명품포도, 샤인머스켓',
    price: 1000,
  },
];

const AvailableToppings = () => {
  const toppingsList = DUMMY_TOPPINGS.map(topping => 
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