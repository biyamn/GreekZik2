import Cart from './components/Cart/Cart';
import React, { useState, useEffect } from 'react';
import Header from './components/Layout/Header';
import Toppings from './components/Toppings/Toppings';
import './App.css';

function App() {
  const [backendData, setBackendData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const [cartIsShown, setCartIsShown] = useState(false);
  const [itemAmount, setItemAmount] = useState(0);
  const [itemData, setItemData] = useState([]);
  const [itemPrice, setItemPrice] = useState(0);


  // itemData에서 +, - 버튼이 눌린 재료를 찾아서 amount를 업데이트해야 함.
  // 그럼 id를 보내야겠군
  // 이 id를 itemData에서 찾아서 amount를 업데이트해야 함.
  
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

  const onAdd = id => {

  }

  const onRemove = id => {

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
        {cartIsShown && <Cart hideCartHandler={hideCartHandler} itemData={itemData} itemPrice={itemPrice} onAdd={onAdd} onRemove={onRemove} />}
        <Header showCartHandler={showCartHandler} itemAmount={itemAmount} />
        <main>
          <Toppings onSaveItem={onSaveItem} backendData={backendData} setBackendData={setBackendData} />
        </main>
      </>
    );
  }
}

export default App;