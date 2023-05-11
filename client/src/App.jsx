import Cart from './components/Cart/Cart';
import React, { useState, useEffect } from 'react';
import Header from './components/Layout/Header';
import Toppings from './components/Toppings/Toppings';
import './App.css';

function App() {
  const [backendData, setBackendData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState('ca1');
  const [cartIsShown, setCartIsShown] = useState(false);
  const [itemAmount, setItemAmount] = useState(0);
  const [itemData, setItemData] = useState([]);
  const [itemPrice, setItemPrice] = useState(0);
  const [cartAmount, setCartAmount] = useState(1);

  // 카테고리 ID도 넘겨야 함
  useEffect(() => {
    fetch('http://localhost:5000/api').then(
      response => {
        return response.json()
      }
    ).then(
      data => {
      setIsLoading(false);
      return setBackendData(data);
    })
  }, [])

  const onAdd = (id, amount) => {
    // 💥 왜 안되는지 모르겠음. 
    // ✨ return을 안써서 그런가?? 하 맞았음 .. ===이거 전에 return을 안써서 그럼
    // 🔎 https://ko.javascript.info/arrow-functions-basics#ref-541
    // const addedCategory = backendData.filter(category => {
    //   return category.id === selectedCategory
    // })
    
    // const addedItem = addedCategory[0].DUMMY_TOPPINGS.filter(item => {
    //   return item.id === id
    // })
    // console.log('addedItem: ', addedItem);

    // 💥 마지막에 선택한 카테고리의 addedItem만 정상적으로 받아오고 이전에 선택한 재료는 빈 배열이 됨
    // ✨ selectedCategory를 쓰면 안되고 여기서 새로 만들어야 함.
    let categoryOfItem = '';
    for (let i = 0; i < Object.keys(backendData).length; i++) {
      for (let j = 0; j < backendData[i].DUMMY_TOPPINGS.length; j++) { 
        if (backendData[i].DUMMY_TOPPINGS[j].id === id) {
          categoryOfItem = backendData[i].id
        }
      }
    }

    // console.log('categoryOfItem: ', categoryOfItem);
    const addedCategory = backendData.filter(category => {
      return category.id === categoryOfItem
    })
    
    const addedItem = addedCategory[0].DUMMY_TOPPINGS.filter(item => {
      return item.id === id
    })
    // console.log('addedItem: ', addedItem);

    const newData = backendData.map(category => {
      const newToppings = category.DUMMY_TOPPINGS.map(topping => {
        if (topping.id === id) {
          console.log('id: ', id)
          console.log('itemAmount before: ', itemAmount)

          // 💥 return문에서 갱신된 itemAmount가 반영되지 않음
          // ✨
          const newAmount = itemAmount + 1;
          setItemAmount(amount => amount+1);
          setCartAmount(itemAmount);
          console.log('topping: ', {...topping, amount: newAmount})
          return {...topping, amount: newAmount};
        }
        console.log('최종 topping: ', topping); 
        return topping; // 여기까진 잘 반영됨
      });
      return {...category, DUMMY_TOPPINGS: newToppings}
      }
    )
    console.log('newData: ', newData); // 심지어 여기까지도 잘 됨 어어 그럼 이걸... cart에만 반영하면 되는 건가..
    setBackendData(newData)
  }

  const onRemove = (id, amount) => {

  }

  const onSaveItem = selectedItemData => {
    const newItemData = itemData.concat(selectedItemData);
    setItemData(newItemData);
    const newAmount = itemAmount + Number(selectedItemData.amount);
    setItemAmount(newAmount);
    newItemData.forEach(item =>{
      setItemPrice(itemPrice + item.amount * item.price);
    })
  }

  const showCartHandler = () => {
    setCartIsShown(true);
  }

  const hideCartHandler = () => {
    setCartIsShown(false);
  }

  if (isLoading) {
    return <div>Loading...</div>
  } else {
    return (
      <>
        {cartIsShown && 
          <Cart hideCartHandler={hideCartHandler} 
            itemData={itemData} 
            itemPrice={itemPrice} 
            cartAmount={cartAmount}
            onAdd={onAdd} 
            onRemove={onRemove} 
        />}
        <Header showCartHandler={showCartHandler} itemAmount={itemAmount} />
        <main>
          <Toppings 
            onSaveItem={onSaveItem} 
            backendData={backendData} 
            setBackendData={setBackendData} 
            selectedCategory={selectedCategory}  
            setSelectedCategory={setSelectedCategory} 
          />
        </main>
      </>
    );
  }
}

export default App;