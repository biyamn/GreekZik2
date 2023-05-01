import React, { useState } from 'react';
import Input from '../../UI/Input';
import classes from './ToppingItemForm.module.css';

const ToppingItemForm = props => {
  console.log('amountState: ', props.amountState)
  
  // console.log('state인 amount: ', amount);

  const submitHandler = (e) => {
    e.preventDefault();
    const enteredAmount = Number(props.amountState);
    console.log('form에서 받은 수량: ', enteredAmount)
    props.onSaveItem(enteredAmount); // 여기서 onSaveItem을 호출했기 때문에 ToppingItem에서 onSaveItem이 실행되고 selectedItemData 객체가 만들어짐
  }

  

  return (
    <form className={classes.form} onSubmit={submitHandler} key={props.id} >
      amount: {props.amountState}
      <Input 
        onChange={props.onChange}
        label="수량" 
        input={{
          id: props.id,
          type: 'number',
          min: '1',
          max: '10',
          step: '1',
          value: props.amount,
        }} 
      />
      <button type="submit">+ 담기</button>
    </form>
  );
};

export default ToppingItemForm;