import React, { useState } from 'react';
import SelectToppingModal from './SelectToppingModal';
import ToppingsSummary from '../Toppings/ToppingsSummary';
import CartContext from '../../store/cartContext';
import { useContext } from 'react';

const Select = ({ showSelectModalHandler, hideSelectModalHandler, showSubCartHandler, backendData, setBackendData, selectedCategory, setSelectedCategory, selectModalIsShown }) => {
  // console.log('왜')
  const { onSave } = useContext(CartContext);

  const handleClickYogurt = selectedItemData => {
    onSave(selectedItemData);
    showSelectModalHandler();
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
      {selectModalIsShown && <SelectToppingModal 
        showSubCartHandler={showSubCartHandler}

        showSelectModalHandler={showSelectModalHandler}
        hideSelectModalHandler={hideSelectModalHandler}

        backendData={backendData} 
        setBackendData={setBackendData} 
        selectedCategory={selectedCategory}  
        setSelectedCategory={setSelectedCategory} 
      />}
    </>
    
  );
};

export default Select;