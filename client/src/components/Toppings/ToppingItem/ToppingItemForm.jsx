import React, { useState, useEffect } from 'react';
import Input from '../../UI/Input';
import classes from './ToppingItemForm.module.css';

const ToppingItemForm = props => {

  // console.log('selectedTopping: ', props.topping) // 선택한 카테고리의 토핑들이 잘 나옴
  // 초기에 설정한 카테고리의 토핑들만 나옴
  const [itemState, setItemState] = useState({
    id: props.topping.id,
    name: props.topping.name,
    description: props.topping.description,
    price: props.topping.price,
    amount: props.topping.amount
  });

  // console.log('selectedToppings: ', props.topping);
  // let item = {
  //   id: props.topping.id,
  //   name: props.topping.name,
  //   description: props.topping.description,
  //   price: props.topping.price,
  //   amount: props.topping.amount
  // };

  
  // console.log('itemState: ', itemState)
  // 8 1 1 1 1 1 9 1(선택된 카테고리의 amount들을 가져옴)
  // console.log('props.amount: ', props.amount)
  // 1 1 2 1 1 1 3 1(선택되는 거랑 상관없이 초기값으로 설정된 카테고리의 amount들을 가져옴)
  // console.log('amountState: ', amountState) 

  const submitHandler = (e) => {
    e.preventDefault();
    props.onSaveItem(itemState);// 여기서 onSaveItem을 호출했기 때문에 ToppingItem에서 onSaveItem이 실행되고 selectedItemData 객체가 만들어짐
  }

  const onChangeHandler = (e) => {
    setItemState(prev => {
      return {
      ...prev,
      amount: e.target.value,
      }
    })
  }

  // useEffect(() => console.log('amount: ', item.amount));
  return (
    <form className={classes.form} onSubmit={submitHandler} key={props.id} >
      <Input 
        onChange={onChangeHandler}
        label="수량" 
        input={{
          id: props.id,
          type: 'number',
          min: '1',
          max: '10',
          step: '1',
          value: itemState.amount,
          // value: props.amount
        }} 
      />
      <button type="submit">+ 담기</button>
    </form>
  );
};

export default ToppingItemForm;