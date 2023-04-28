import Cart from './components/Cart/Cart';
import React, { useState, useEffect } from 'react';
import Header from './components/Layout/Header';
import Toppings from './components/Toppings/Toppings';
import './App.css';

function App() {
  const [cartIsShown, setCartIsShown] = useState(false);
  const [totalAmount, setTotalAmount] = useState(0);
  const [totalItemData, setTotalItemData] = useState([]);
  
  const onSaveAmount = enteredAmount => {
    setTotalAmount(totalAmount + enteredAmount);
    // console.log(totalItemData) // 한박자씩 느림
  }

  // useEffect(() => console.log(totalItemData)) // 제대로 찍힘

  const onSaveItem = selectedItemData => {
    const newTotalAmount = totalItemData.concat(selectedItemData);
    setTotalItemData(newTotalAmount);
  }

  const showCartHandler = () => {
    setCartIsShown(true);
  }

  const hideCartHandler = () => {
    setCartIsShown(false);
  }

  return (
    <>
      {cartIsShown && <Cart hideCartHandler={hideCartHandler} totalItemData={totalItemData} />}
      <Header showCartHandler={showCartHandler} totalAmount={totalAmount} />
      <main>
        <Toppings onSaveAmount={onSaveAmount} onSaveItem={onSaveItem} />
      </main>
    </>
  );
}

export default App;