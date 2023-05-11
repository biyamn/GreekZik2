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

  const onAdd = (id) => {
    // backendData에서 selectedCategory를 찾아서 인자로 받은 id를 찾을 거임
    // console.log(selectedCategory);
    // console.log(id)

    // 💚 블로그용
    // 💥 왜 안되는지 모르겠음. 
    // ✨ return을 안써서 그런가?? 하 맞았음 .. ===이거 전에 return을 안써서 그럼
    // ✨ https://ko.javascript.info/arrow-functions-basics#ref-541
    const addedCategory = backendData.filter(category => {
      return category.id === selectedCategory
    })
    
    const addedItem = addedCategory[0].DUMMY_TOPPINGS.filter(item => {
      return item.id === id
    })
  // 💥 마지막에 선택한 카테고리의 addedItem만 정상적으로 받아오고 이전에 선택한 재료는 빈 배열이 됨
  // selectedCategory를 쓰면 안되고 여기서 새로 만들어야 함.
    console.log('addedItem: ', addedItem);
  }

  const onRemove = (id) => {
    // console.log(selectedCategory);
    // console.log(id)


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