import React, { useState } from 'react';
import Toppings from '../Toppings/Toppings';
import YogurtModal from './YogurtModal';
import ToppingsSummary from '../Toppings/ToppingsSummary';
import CartContext from '../../store/cartContext';
import { useContext } from 'react';

const Yogurt = ({ showCartHandler, toppingModalIsShown, showToppingModalHandler, backendData, setBackendData, selectedCategory, setSelectedCategory, hideToppingModalHandler }) => {
  // console.log('왜')
  const { onSave } = useContext(CartContext);

  const handleClickYogurt = selectedItemData => {
    onSave(selectedItemData);
    showToppingModalHandler();
  }

  return (
    <>
    <ToppingsSummary />
    <ul>
      {backendData[0].yogurtData[0].DUMMY_TOPPINGS.map((yogurt) => {
        return (
          <li key={yogurt.id}>
            <p>{yogurt.name}</p>
            <p>{yogurt.price}원</p>
            <button onClick={() => handleClickYogurt(yogurt)}>한그릇 만들기 시작!</button>
          </li>
        )})
      }
    </ul>
    {toppingModalIsShown && <YogurtModal 
      showCartHandler={showCartHandler}
      hideToppingModalHandler={hideToppingModalHandler}
      backendData={backendData} 
      setBackendData={setBackendData} 
      selectedCategory={selectedCategory}  
      setSelectedCategory={setSelectedCategory} 
    />}
    </>
    
  );
};

export default Yogurt;