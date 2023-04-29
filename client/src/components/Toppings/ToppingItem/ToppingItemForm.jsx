import React, { useRef } from 'react';
import Input from '../../UI/Input';
import classes from './ToppingItemForm.module.css';

const ToppingItemForm = props => {
  const amountInputRef = useRef();

  const submitHandler = (e) => {
    e.preventDefault();
    const enteredAmount = Number(amountInputRef.current.value);
    console.log('form에서 받은 수량: ', enteredAmount)
    props.onSaveItem(enteredAmount); // 여기서 onSaveItem을 호출했기 때문에 ToppingItem에서 onSaveItem이 실행되고 selectedItemData 객체가 만들어짐
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