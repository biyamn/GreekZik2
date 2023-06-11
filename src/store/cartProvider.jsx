import React, { useReducer } from 'react';
import CartContext from './cartContext';

const initialCartState = {
  items: [],
  totalPrice: 0
}

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
      // console.log('added')
      // 아래 updatedArr 함수에서 뭔가 잘못됨.
      // console.log('state.items: ', state.items)
      const updatedArr = state.items.map((cur) => {
        // console.log('before cur: ', cur) // 맞음
        // console.log('cur.id: ', cur.id);
        // console.log('action.id: ', action.id)
        if (cur.id === action.id) {
          // console.log('id 일치')
          return {
            ...cur,
            amount: cur.amount + 1
          }
          // cur.amount++;
        }
        // console.log('after cur: ', cur) // 틀림
        return cur;
      });

      // console.log('updatedArr: ', updatedArr);
      const newTotalPrice = updatedArr.reduce((acc, cur) => acc + (cur.amount * cur.price), 0);
      
      return {
        items: updatedArr,
        totalPrice: newTotalPrice
      }
    }

    case 'removed': {
      const updatedArr = state.items.map((cur) => {
        if (cur.amount > 0 && cur.id === action.id) {
          return {
            ...cur,
            amount: cur.amount - 1
          }
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
      return initialCartState;
  }
}

const cartProvider = ({ children }) => {
  const [cartState, dispatch] = useReducer(
    cartReducer,
    initialCartState
  );

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

  const cartContext = {
    items: cartState.items,
    totalPrice: cartState.totalPrice,
    onSave: handleSaveItem,
    onAdd: handleAddItem,
    onRemove: handleRemoveItem,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {children}
    </CartContext.Provider>
  );
};

export default cartProvider;