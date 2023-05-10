import Cart from './components/Cart/Cart';
import React, { useState, useEffect } from 'react';
import Header from './components/Layout/Header';
import Toppings from './components/Toppings/Toppings';
import './App.css';

function App() {
  const [cartIsShown, setCartIsShown] = useState(false);
  const [totalAmount, setTotalAmount] = useState(0);
  const [totalItemData, setTotalItemData] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);


  // totalItemData에서 +, - 버튼이 눌린 재료를 찾아서 amount를 업데이트해야 함.
  // 그럼 id를 보내야겠군
  const onAdd = id => {
    console.log(id);
  }

  const onRemove = id => {
    console.log(id);
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

  return (
    <>
      {cartIsShown && <Cart hideCartHandler={hideCartHandler} totalItemData={totalItemData} totalPrice={totalPrice} onAdd={onAdd} onRemove={onRemove} />}
      <Header showCartHandler={showCartHandler} totalAmount={totalAmount} />
      <main>
        <Toppings onSaveItem={onSaveItem} />
      </main>
    </>
  );
}

export default App;