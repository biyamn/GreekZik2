import React, { useState } from 'react';
import ToppingItem from './ToppingItem/ToppingItem';
import classes from './AvailableToppings.module.css';

const AvailableToppings = props => {
  const onSaveItem = selectedItemData => {
    props.onSaveItem(selectedItemData);
  }

  // filteredCategoty: 선택한 카테고리에 있는 모든 재료 객체가 담긴 배열
  const filteredCategoty = props.backendData.filter(category => {
    return category.id === props.selectedCategory;
  })

  console.log('filteredCategoty: ', filteredCategoty)
  const toppingsList = filteredCategoty[0].DUMMY_TOPPINGS.map(topping => 
    <ToppingItem
      id={topping.id}
      key={topping.id}
      name={topping.name}
      description={topping.description}
      price={topping.price}
      onSaveItem={onSaveItem}
    />
  )

  const tList = filteredCategoty[0].DUMMY_TOPPINGS.map(topping => topping);
  tList;
  
  return (
    <section className={classes.toppings}>
      {toppingsList}
    </section>
  );
};

export default AvailableToppings;