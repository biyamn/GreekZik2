import Cart from './components/Cart/Cart';
import React, { useState, useEffect, useReducer } from 'react';
import Header from './components/Layout/Header';
import Toppings from './components/Toppings/Toppings';
import './App.css';

function App() {
  const [backendData, setBackendData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState('ca1');
  const [cartIsShown, setCartIsShown] = useState(false);

  const [cartItems, setCartItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

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

  // const reducer = (state, action) => { 
  //   switch (action.type) {
  //     case 'added':
  //       return state.map((cur) => {  
  //         if (cur.id === action.id) {
  //           return { ...cur, amount: cur.amount + 1 }
  //         }
  //         return cur;
  //       })
  //     case 'removed':
  //       return state.map((cur) => {
  //         if (cur.id === action.id) {
  //           return { ...cur, amount: cur.amount - 1 }
  //         }
  //         return cur;
  //       })
  //     default:
  //       return state;
  //   }
  // }

  // const handleAddItem = (id) => {
  //   dispatch({
  //     type: 'added',
  //     id: id
  //   })
  // }

  // const handleRemoveItem = (id) => {  
  //   dispatch({
  //     type: 'removed',
  //     id: id
  //   })
  // }

  // reducer => added
  const onAdd = (id) => {
    const updatedArr = cartItems.map((cur) => {
      if (cur.id === id) {
        cur.amount++;
      }
      return cur;
    });

    const newTotalPrice = updatedArr.reduce((acc, cur) => acc + (cur.amount * cur.price), 0);

    setTotalPrice(newTotalPrice)
    setCartItems(updatedArr);
    
    const newTotalAmount = updatedArr.reduce((acc, cur) => acc + cur.amount, 0);
  }

  // reducer => removed
  const onRemove = (id) => {
    const updatedArr = cartItems.map((cur) => {
      if (cur.amount > 0 && cur.id === id) {
        cur.amount--;
      } else if (cur.amount === 0 && cur.id === id) { 
        cur.amount
      }
      return cur;
    });

    const newTotalPrice = updatedArr.reduce((acc, cur) => {
      return acc + (cur.amount * cur.price);
    }, 0);
    
    setTotalPrice(newTotalPrice)

    const removedArr = updatedArr.filter((cur) => { 
      return cur.amount > 0
    })

    setCartItems(removedArr);

    const newTotalAmount = removedArr.reduce((acc, cur) => acc + cur.amount, 0); 
  }

  const onSaveItem = selectedItemData => {
    const newItemData = cartItems.concat(selectedItemData);

    const mergedItemData = newItemData.reduce((acc, cur) => {
      const found = acc.find((item) => item.id === cur.id);
      if (found) {
        found.amount += Number(cur.amount);
      } else {
        acc.push({...cur});
      }
      return acc;
    }, []);

    setCartItems(mergedItemData);

    newItemData.forEach(item =>{
      setTotalPrice(totalPrice + item.amount * item.price);
    })
  };

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
        {cartIsShown && 
          <Cart hideCartHandler={hideCartHandler} 
            cartItems={cartItems} 
            totalPrice={totalPrice} 
            onAdd={onAdd} 
            onRemove={onRemove} 
        />}
        <Header showCartHandler={showCartHandler} cartItems={cartItems} />
        <main>
          <Toppings 
            onSaveItem={onSaveItem} 
            backendData={backendData} 
            setBackendData={setBackendData} 
            selectedCategory={selectedCategory}  
            setSelectedCategory={setSelectedCategory} 
          />
        </main>
      </>
    );
  }
}

export default App;