import Cart from './components/Cart/Cart';
import React, { useState } from 'react';
import Header from './components/Layout/Header';
import Toppings from './components/Toppings/Toppings';
import './App.css';

function App() {
  const [cartIsShown, setCartIsShown] = useState(false);
  const [totalAmount, setTotalAmount] = useState(0);

  const onSaveAmount = (enteredAmount) => {
    setTotalAmount(totalAmount + enteredAmount)
  }

  const showCartHandler = () => {
    setCartIsShown(true);
  }

  const hideCartHandler = () => {
    setCartIsShown(false);
  }

  return (
    <>
      {cartIsShown && <Cart hideCartHandler={hideCartHandler} />}
      <Header showCartHandler={showCartHandler} totalAmount={totalAmount} />
      <main>
        <Toppings onSaveAmount={onSaveAmount}/>
      </main>
    </>
  );
}

export default App;