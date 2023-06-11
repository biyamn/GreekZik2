import MainCartModal from './components/Cart/MainCartModal';
import React, { useState, useEffect } from 'react';
import MainHeader from './components/Layout/MainHeader';
import CartProvider from './store/CartProvider';
import Yogurt from './components/Yogurt/Yogurt';
import './App.css';

function App() {
  const [backendData, setBackendData] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('ca2');
  const [mainCartIsShown, setMainCartIsShown] = useState(false);
  const [subCartIsShown, setSubCartIsShown] = useState(false);
  // const [isLoading, setIsLoading] = useState(false);
  const [status, setStatus] = useState('init');
  const [selectModalIsShown, setSelectModalIsShown] = useState(false);

  const fetchData = async () => {
    setStatus('loading');

    try {
    const response = await fetch('https://greek-yogurt-order-app-17351-default-rtdb.firebaseio.com/data.json');
    const data = await response.json();
    // setIsLoading을 같은 핸들러에서 써도 되는 이유: await로 시간차가 생기기 때문에
    
    setStatus('loaded');
    setBackendData(data);
    } catch(error) {
      console.log('error: ', error)
    }
  }

  useEffect(() => {
    console.log('useEffect 시작')
    fetchData();
  }, [])
  
  const showMainCartHandler = () => {
    setMainCartIsShown(true);
  }

  const hideMainCartHandler = () => {
    setMainCartIsShown(false);
  }

  const showSubCartHandler = () => {
    setSubCartIsShown(true);
  }

  const hideSubCartHandler = () => {
    setSubCartIsShown(false);
  }

  const showSelectModalHandler = () => {
    setSelectModalIsShown(true);
  }

  const hideSelectModalHandler = () => {
    setSelectModalIsShown(false);
  }


  if (status === 'loading' || status === 'init') {
    return <div>Loading...</div>
  } else if (status === 'loaded') {
    return (
      <CartProvider>
        {mainCartIsShown && 
          <MainCartModal hideCartHandler={hideMainCartHandler} />}
        <MainHeader showCartHandler={showMainCartHandler} />
        <main>
          <Yogurt 
            cartIsShown={subCartIsShown}

            selectModalIsShown={selectModalIsShown}
            showModalHandler={showSelectModalHandler}
            hideModalHandler={hideSelectModalHandler} 
            
            
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