import React from 'react';
import ToppingItemForm from './ToppingItemForm';
import classes from './ToppingItem.module.css';

const ToppingItem = props => {
  const onSaveItem = (amount) => {
    // 애초에 onSaveItem에 선택된 것만 오니까 그런 건가???
    // 아니 근데 이게 수량만 보내는 건데 어떻게 이게 그 재료인 걸 아냐고 수량만 띡 하고 보냈는데..
    // 일단 onSaveItem이라는 함수는 ToppingItemForm에서 얘를 부르지 않으면 실행되지 않음.
    // 이해 완. ToppingItemForm에서 onSaveItem을 호출하는 순간 selectedItemData가 만들어진다. 
    // ToppingItem에서 받는 props는 하나의 재료에 대한 상세 정보이다. 8개의 객체 모음이 아니라. 그래서 props.id는 담은 재료의 id가 나오게 된다.
    console.log('prop으로 받은 데이터들 펼치기. 그 중에 name만: ', props.name)
    const selectedItemData = {
      id: props.id,
      name: props.name,
      price: props.price,
      amount: amount
    }
    console.log('선택된 객체(id, name, price, ): ', selectedItemData)
    props.onSaveItem(selectedItemData);
  }

  // 한 카테고리에 있는 재료들의 상세 설명을 map으로 펼쳤으므로 8개가 쭉 나올 거임
  return (
    <li className={classes.topping}>
      <div className={classes.namePriceDescription}>
        <h3 className={classes.name}>{props.name}</h3>
        <div className={classes.price}>{`${props.price}원`}</div>
        <div className={classes.description}>{props.description}</div>
      </div>
      <ToppingItemForm onSaveItem={onSaveItem} id={props.id} />
    </li>
  );
};

export default ToppingItem;