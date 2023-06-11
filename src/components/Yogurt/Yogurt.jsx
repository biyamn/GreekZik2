import React, { useState } from 'react';
import Toppings from '../Toppings/Toppings';
import YogurtModal from './YogurtModal';
import ToppingsSummary from '../Toppings/ToppingsSummary';
import CartContext from '../../store/cartContext';
import { useContext } from 'react';

const Yogurt = ({ showModalHandler, cartIsShown, backendData, setBackendData, selectedCategory, setSelectedCategory, hideCartHandler }) => {
  // console.log('왜')
  const { onSave } = useContext(CartContext);

  const handleClickYogurt = selectedItemData => {
    onSave(selectedItemData);
    showModalHandler();
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
    {cartIsShown && <YogurtModal 
      showModalHandler={showModalHandler}
      hideModalHandler={hideModalHandler}
      backendData={backendData} 
      setBackendData={setBackendData} 
      selectedCategory={selectedCategory}  
      setSelectedCategory={setSelectedCategory} 
    />}
    </>
    
  );
};

export default Yogurt;