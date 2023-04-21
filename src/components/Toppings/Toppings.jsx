import React, { useState } from 'react';
import ToppingsSummary from './ToppingsSummary';
import AvailableToppings from './AvailableToppings';
import ToppingsCategory from './ToppingsCategory';
import classes from './Toppings.module.css';

const DUMMY_CATEGORIES = [
  {
    name: '그릭요거트',
    id: 'c1',
    DUMMY_TOPPINGS: [
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
    ]
  },
  {
    name: '생과일',
    id: 'c2',
    DUMMY_TOPPINGS: [
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
    ]
  },
  {
    name: '수제청/시럽',
    id: 'c3',
    DUMMY_TOPPINGS: [
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
    ]
  },
  {
    name: '시리얼',
    id: 'c4',
    DUMMY_TOPPINGS: [
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
    ]
  },
]

const Toppings = () => {
  const [selectedCategory, setSelectedCategory] = useState('c1');

  const onSelect = (id) => {
    setSelectedCategory(id);
  }

  const toppingsInSelectedCategory = DUMMY_CATEGORIES.filter(category => category.id === selectedCategory);
  // console.log(toppingsInSelectedCategory)
  return (
    <div className={classes.toppings}>
      <ToppingsSummary />
      <ul>
        <ToppingsCategory DUMMY_CATEGORIES={DUMMY_CATEGORIES} onSelect={onSelect} />
      </ul>
      <AvailableToppings toppingsInSelectedCategory={toppingsInSelectedCategory} />
      
    </div>
  );
};

export default Toppings;