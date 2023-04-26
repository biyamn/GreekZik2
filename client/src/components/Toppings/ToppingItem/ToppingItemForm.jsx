import React, { useRef } from 'react';
import Input from '../../UI/Input';
import classes from './ToppingItemForm.module.css';

const ToppingItemForm = () => {
  const ref = useRef(null);

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(ref.current.value);
  }

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <Input 
        ref={ref}
        label="수량" 
        input={{
          id: 1,
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