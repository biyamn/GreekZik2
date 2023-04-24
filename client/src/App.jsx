import React from 'react';
import Header from './components/Layout/Header';
import Toppings from './components/Toppings/Toppings';
import './App.css';

function App() {

  return (
    <>
      <Header />
      <main>
        <Toppings />
      </main>
    </>
  )
}

export default App;
