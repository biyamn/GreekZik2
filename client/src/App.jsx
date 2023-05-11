import Cart from './components/Cart/Cart';
import React, { useState, useEffect } from 'react';
import Header from './components/Layout/Header';
import Toppings from './components/Toppings/Toppings';
import './App.css';

function App() {
  const [backendData, setBackendData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const [cartIsShown, setCartIsShown] = useState(false);
  const [totalAmount, setTotalAmount] = useState(0);
  const [totalItemData, setTotalItemData] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);


  // totalItemData에서 +, - 버튼이 눌린 재료를 찾아서 amount를 업데이트해야 함.
  // 그럼 id를 보내야겠군
  // 이 id를 totalItemData에서 찾아서 amount를 업데이트해야 함.
  
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
    const newTotalItemData = totalItemData.concat(selectedItemData);
    setTotalItemData(newTotalItemData);
    const newTotalAmount = totalAmount + Number(selectedItemData.amount);
    setTotalAmount(newTotalAmount);
    newTotalItemData.forEach(item =>{
    setTotalPrice(totalPrice + item.amount * item.price);
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
        {cartIsShown && <Cart hideCartHandler={hideCartHandler} totalItemData={totalItemData} totalPrice={totalPrice} onAdd={onAdd} onRemove={onRemove} />}
        <Header showCartHandler={showCartHandler} totalAmount={totalAmount} />
        <main>
          <Toppings onSaveItem={onSaveItem} backendData={backendData} setBackendData={setBackendData} />
        </main>
      </>
    );
  }
}

export default App;