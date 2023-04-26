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

  const hideCartHandler = () => {
    setCartIsShown(false);
  }

  return (
    <>
      {cartIsShown && <Cart hideCartHandler={hideCartHandler} />}
      <Header showCartHandler={showCartHandler} />
      <main>
        <Toppings />
      </main>
    </>
  );
}

export default App;