import React, { useRef } from 'react';
import Input from '../../UI/Input';
import classes from './ToppingItemForm.module.css';

const ToppingItemForm = props => {
  const amountInputRef = useRef();

  const submitHandler = (e) => {
    e.preventDefault();
    const enteredAmount = Number(amountInputRef.current.value);
    props.onSaveAmount(enteredAmount);
    props.onSaveItem(amountInputRef.current.id);
  }

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <Input 
        ref={amountInputRef}
        label="수량" 
        input={{
          id: props.id,
          type: 'number',
          min: '1',
          max: '10',
          step: '1',
          defaultValue: '1',
        }} 
      />
      <button type="submit">+ 담기</button>
    </form>
  );
};

export default ToppingItemForm;