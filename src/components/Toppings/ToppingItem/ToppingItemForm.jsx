import React, { useState, useContext } from 'react';
import Input from '../../UI/Input';
import classes from './ToppingItemForm.module.css';
import CartContext from '../../../store/cartContext';
const ToppingItemForm = ({ topping, onSaveCategories }) => {
  const { onSave } = useContext(CartContext);

  const [itemState, setItemState] = useState({
    id: topping.id,
    name: topping.name,
    description: topping.description,
    price: topping.price,
    amount: topping.amount,
    toppings: {
      id: topping.id,
      name: topping.name,
      description: topping.description,
      price: topping.price,
      amount: topping.amount
    }
  });

  const submitHandler = (e) => {
    e.preventDefault();
    onSave(itemState);
  }

  const onChangeHandler = (e) => {
    setItemState(prev => {
      const newState = {
      ...prev,
      // typeof(newState.amount) -> string
      amount: Number(e.target.value),
      };
      // console.log('newState: ', newState)
      onSaveCategories(newState);
      return newState
    })
  }

  return (
    <form className={classes.form} onSubmit={submitHandler} key={topping.id} >
      <Input 
        onChange={onChangeHandler}
        label="수량" 
        input={{
          id: topping.id,
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