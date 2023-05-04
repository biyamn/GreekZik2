import React, { useState } from 'react';
import ToppingItemForm from './ToppingItemForm';
import classes from './ToppingItem.module.css';

const ToppingItem = props => {
  const onSaveItem = itemState => {
    props.onSaveItem(itemState);
  }
  
  const onSaveCategories = itemState => {
    props.onSaveCategories(itemState);
  }
  
  const commaSeparatedPrice = props.price.toLocaleString(3);
  // 한 카테고리에 있는 재료들의 상세 설명을 map으로 펼쳤으므로 8개가 쭉 나올 거임
  return (
    <li className={classes.topping} key={props.key}>
      <div className={classes.namePriceDescription}>
        <h3 className={classes.name}>{props.name}</h3>
        <div className={classes.price}>{`${commaSeparatedPrice}원`}</div>
        <div className={classes.description}>{props.description}</div>
      </div>
      <ToppingItemForm
        id={props.id}  
        amount={props.amount} 
        onSaveItem={onSaveItem} 
        topping={props.topping}
        backendData={props.backendData}
        onSaveCategories={onSaveCategories}
      />
    </li>
  );
};

export default ToppingItem;