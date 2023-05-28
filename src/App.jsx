import Cart from './components/Cart/Cart';
import React, { useState, useEffect } from 'react';
import Header from './components/Layout/Header';
import Toppings from './components/Toppings/Toppings';
import CartProvider from './store/CartProvider';
import './App.css';

function App() {
  const [backendData, setBackendData] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('ca1');
  const [cartIsShown, setCartIsShown] = useState(false);

  const [isLoading, setIsLoading] = useState(true);

  const fetchData = async () => {
    setIsLoading(true);
    try {
    const response = await fetch('https://greek-yogurt-order-app-17351-default-rtdb.firebaseio.com/data.json');
    const data = await response.json();
    // setIsLoading을 같은 핸들러에서 써도 되는 이유: await로 시간차가 생기기 때문에
    setIsLoading(false);
    setBackendData(data);
    } catch(error) {
      console.log('error: ', error)
    }
  }

  useEffect(() => {
    console.log('useEffect 시작')
    fetchData();
  }, [])
  
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
      <CartProvider>
        {cartIsShown && 
          <Cart hideCartHandler={hideCartHandler} />}
        <Header showCartHandler={showCartHandler} />
        <main>
          <Toppings 
            backendData={backendData} 
            setBackendData={setBackendData} 
            selectedCategory={selectedCategory}  
            setSelectedCategory={setSelectedCategory} 
          />
        </main>
      </CartProvider>
    );
  }
}

export default App;