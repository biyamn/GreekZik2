import React from 'react';
import ToppingItem from './ToppingItem/ToppingItem';
import classes from './AvailableToppings.module.css';

const AvailableToppings = props => {
  const {backendData, selectedCategory} = props
  console.log('selectedCategory: ', selectedCategory)
  console.log('backendData[1].toppingData: ', backendData[1].toppingData)
  const filteredCategory = Object.values(backendData[1].toppingData).filter(category => {
    console.log('category: ', category)
    console.log('category.id: ', category.id)
    if (category.id === selectedCategory) {
      console.log('카테고리 ID 일치')
    }
    return category.id === selectedCategory
  })
  console.log('filteredCategory: ', filteredCategory)
  const toppingsList = filteredCategory[0].DUMMY_TOPPINGS.map(topping => 
    <ToppingItem
      id={topping.id}       
      name={topping.name}
      description={topping.description}
      price={topping.price}
      amount={topping.amount}
      topping={topping}
      backendData={backendData}
      onSaveCategories={props.onSaveCategories}
    />
  )
  
  return (
    <section className={classes.toppings}>
      {toppingsList}
    </section>
  );
};

export default AvailableToppings;