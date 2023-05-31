import React, { useState } from 'react';
import Toppings from '../Toppings/Toppings';
import YogurtModal from './YogurtModal';
import ToppingsSummary from '../Toppings/ToppingsSummary';
const Yogurt = ({ toppingModalIsShown, showToppingModalHandler, backendData, setBackendData, selectedCategory, setSelectedCategory, hideToppingModalHandler }) => {
  // console.log('왜')
  return (
    <>
    <ToppingsSummary />
    <ul>
      {backendData[0].yogurtData[0].DUMMY_TOPPINGS.map((yogurt) => {
        return (
          <li key={yogurt.id} onClick={showToppingModalHandler}>
            {yogurt.name}
          </li>
        )})
      }
    </ul>
    {toppingModalIsShown && <YogurtModal 
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