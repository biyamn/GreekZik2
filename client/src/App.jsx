import Cart from './components/Cart/Cart';
import React, { useState } from 'react';
import Header from './components/Layout/Header';
import Toppings from './components/Toppings/Toppings';
import './App.css';

function App() {
  const [cartIsShown, setCartIsShown] = useState(false);

  const showCartHandler = () => {
    setCartIsShown(true);
  }

  return (
    <>
      {cartIsShown && <Cart />}
      <Header showCartHandler={showCartHandler} />
      <main>
        <Toppings />
      </main>
    </>
  );
}

export default App;