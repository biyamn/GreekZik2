import Cart from './components/Cart/Cart';
import React, { useState, useEffect, useReducer } from 'react';
import Header from './components/Layout/Header';
import Toppings from './components/Toppings/Toppings';
import './App.css';

const initialCartState = {
  items: [],
  totalPrice: 0
}


// const onSaveItem = selectedItemData => {
//   const newItemData = cartState.items.concat(selectedItemData);

//   const mergedItemData = newItemData.reduce((acc, cur) => {
//     const found = acc.find((item) => item.id === cur.id);
//     if (found) {
//       found.amount += Number(cur.amount);
//     } else {
//       acc.push({...cur});
//     }
//     return acc;
//   }, []);
// }

const cartReducer = (state, action) => { 
  switch (action.type) {
    case 'saved': {
      // console.log('saved')
      // console.log('action.selectedItemData: ', action.selectedItemData)
      const newItemData = state.items.concat(action.selectedItemData);
      // console.log('newItemData: ', newItemData)
      const mergedItemData = newItemData.reduce((acc, cur) => {
        const found = acc.find((item) => item.id === cur.id);
        if (found) {
          found.amount += Number(cur.amount);
        } else {
          acc.push({...cur});
        }
        return acc;
      }, []);
      // console.log('mergedItemData: ', mergedItemData)
      const newTotalPrice = mergedItemData.reduce((acc, cur) => {
        return acc + (cur.amount * cur.price);
      }, 0);
      // console.log('newTotalPrice: ', newTotalPrice)
      return {
        items: mergedItemData,
        totalPrice: newTotalPrice
      }
    }

    case 'added': {
      console.log('added')
      const updatedArr = state.items.map((cur) => {
        console.log(cur)
        if (cur.id === action.id) {
          cur.amount++;
        }
        return cur;
      });
  
      const newTotalPrice = updatedArr.reduce((acc, cur) => acc + (cur.amount * cur.price), 0);
      
      return {
        items: updatedArr,
        totalPrice: newTotalPrice
      }
    }

    case 'removed': {
      const updatedArr = state.items.map((cur) => {
        if (cur.amount > 0 && cur.id === action.id) {
          cur.amount--;
        } else if (cur.amount === 0 && cur.id === action.id) { 
          cur.amount
        }
        return cur;
      });
  
      const removedArr = updatedArr.filter((cur) => { 
        return cur.amount > 0
      })

      const newTotalPrice = updatedArr.reduce((acc, cur) => {
        return acc + (cur.amount * cur.price);
      }, 0);
      
      return {
        items: removedArr,
        totalPrice: newTotalPrice
      }
    }

    default:
      return state;
  }
}

function App() {
  const [backendData, setBackendData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState('ca1');
  const [cartIsShown, setCartIsShown] = useState(false);
  const [cartState, dispatch] = useReducer(
    cartReducer,
    initialCartState
  );

  // const [cartItems, setCartItems] = useState([]);
  // const [totalPrice, setTotalPrice] = useState(0);

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

  const handleSaveItem = (selectedItemData) => {
    dispatch({
      type: 'saved',
      id: selectedItemData.id,
      selectedItemData: selectedItemData,
    })
  }

  const handleAddItem = (id) => {
    dispatch({
      type: 'added',
      id: id,
    })
  }

  const handleRemoveItem = (id) => {  
    dispatch({
      type: 'removed',
      id: id
    })
  }

  // const onAdd = (id) => {
  //   const updatedArr = cartItems.map((cur) => {
  //     if (cur.id === id) {
  //       cur.amount++;
  //     }
  //     return cur;
  //   });

  //   const newTotalPrice = updatedArr.reduce((acc, cur) => acc + (cur.amount * cur.price), 0);

  //   setTotalPrice(newTotalPrice)
  //   setCartItems(updatedArr);
    
  // }

  // const onRemove = (id) => {
  //   const updatedArr = cartItems.map((cur) => {
  //     if (cur.amount > 0 && cur.id === id) {
  //       cur.amount--;
  //     } else if (cur.amount === 0 && cur.id === id) { 
  //       cur.amount
  //     }
  //     return cur;
  //   });

  //   const newTotalPrice = updatedArr.reduce((acc, cur) => {
  //     return acc + (cur.amount * cur.price);
  //   }, 0);
    
  //   setTotalPrice(newTotalPrice)

  //   const removedArr = updatedArr.filter((cur) => { 
  //     return cur.amount > 0
  //   })

  //   setCartItems(removedArr);

  // }

  const onSaveItem = selectedItemData => {
    const newItemData = cartState.items.concat(selectedItemData);

    const mergedItemData = newItemData.reduce((acc, cur) => {
      const found = acc.find((item) => item.id === cur.id);
      if (found) {
        found.amount += Number(cur.amount);
      } else {
        acc.push({...cur});
      }
      return acc;
    }, []);

    mergedItemData.forEach((item) => {
      handleAddItem(item.id);
    });

    handleAddItem(mergedItemData, newTotalPrice)

    setCartItems(mergedItemData);

    const newTotalPrice = mergedItemData.reduce((acc, cur) => {
      return acc + (cur.amount * cur.price);
    }, 0);

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
            onAdd={handleAddItem}
            onRemove={handleRemoveItem}
            cartItems={cartState.items} 
            totalPrice={cartState.totalPrice} 
        />}
        <Header showCartHandler={showCartHandler} cartItems={cartState.items} />
        <main>
          <Toppings 
            onSaveItem={handleSaveItem} 
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