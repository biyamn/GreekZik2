import React from 'react';
import ToppingItem from './ToppingItem/ToppingItem';
import classes from './AvailableToppings.module.css';

const AvailableToppings = props => {
  

  const onSaveItem = itemState => {
    // console.log('enteredAmount: ', enteredAmount)
    // // 애초에 onSaveItem에 선택된 것만 오니까 그런 건가???
    // // 아니 근데 이게 수량만 보내는 건데 어떻게 이게 그 재료인 걸 아냐고 수량만 띡 하고 보냈는데..
    // // 일단 onSaveItem이라는 함수는 ToppingItemForm에서 얘를 부르지 않으면 실행되지 않음.
    // // 이해 완. ToppingItemForm에서 onSaveItem을 호출하는 순간 selectedItemData가 만들어진다. 
    // // ToppingItem에서 받는 props는 하나의 재료에 대한 상세 정보이다. 8개의 객체 모음이 아니라. 그래서 props.id는 담은 재료의 id가 나오게 된다.
    // // console.log('prop으로 받은 데이터들 펼치기. 그 중에 name만: ', props.name)
    props.onSaveItem(itemState);
  }

  const onSaveCategories = itemState => {
    props.onSaveCategories(itemState);
  }

  // console.log('categories: ', categories)
  // console.log('back: ', props.backendData)
  
  // console.log('filteredCategory: ', filteredCategory)
  // console.log(filteredCategory)

  // filteredCategory: 선택한 카테고리에 있는 모든 재료 객체가 담긴 배열
  // console.log('filter 위에 backendData: ', props.backendData)
  const filteredCategory = props.backendData.filter(category => {
    // console.log('category: ', category)
    // console.log('selectedCategory: ', props.selectedCategory)
    // console.log('category.id: ', category.id);
    return category.id === props.selectedCategory
})

  // console.log('filteredCategory: ', filteredCategory);
  const toppingsList = filteredCategory[0].DUMMY_TOPPINGS.map(topping => 
    <React.Fragment key={topping.id}>
      <ToppingItem
        id={topping.id}       
        name={topping.name}
        description={topping.description}
        price={topping.price}
        amount={topping.amount}
        onSaveItem={onSaveItem}
        // onSaveItem={props.onSaveItem} 위에거 대신 이걸 쓰자.
        topping={topping}
        backendData={props.backendData}
        onSaveCategories={onSaveCategories}
      />
      {/* <ToppingItemForm
        id={topping.id}  
        amount={topping.amount} 
        onSaveItem={onSaveItem} 
        topping={topping} 
      /> */}
    </React.Fragment>
  )

  // console.log('toppingsList: ', toppingsList)

  // const [categoryItem, setCategoryItem] = useState({
  // {
  //   id: 'ca1',
  //   items: 
  // }
  // })
  
  return (
    <section className={classes.toppings}>
      {toppingsList}
    </section>
  );
};

export default AvailableToppings;