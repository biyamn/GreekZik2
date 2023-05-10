import React, { useState, useEffect } from 'react';
import Input from '../../UI/Input';
import classes from './ToppingItemForm.module.css';

const ToppingItemForm = ({ topping, onSaveItem, onSaveCategories, id }) => {
  const [itemState, setItemState] = useState({
    id: topping.id,
    name: topping.name,
    description: topping.description,
    price: topping.price,
    amount: topping.amount
  });

  const submitHandler = (e) => {
    e.preventDefault();
    onSaveItem(itemState);
  }

  const onChangeHandler = (e) => {
    setItemState(prev => {
      const newState = {
      ...prev,
      amount: e.target.value,
      };
      onSaveCategories(newState);
      return newState
    })
  }

  return (
    <form className={classes.form} onSubmit={submitHandler} key={id} >
      <Input 
        onChange={onChangeHandler}
        label="수량" 
        input={{
          id: id,
          type: 'number',
          min: '1',
          max: '10',
          step: '1',
          value: itemState.amount,
        }} 
      />
      <button type="submit">+ 담기</button>
    </form>
  );
};

export default ToppingItemForm;