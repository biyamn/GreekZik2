import React, { useState } from 'react';
import Toppings from '../Toppings/Toppings';
import YogurtModal from './YogurtModal';
import ToppingsSummary from '../Toppings/ToppingsSummary';
const Yogurt = ({ backendData, setBackendData, selectedCategory, setSelectedCategory }) => {
  // console.log('왜')
  const [selectedYogurt, setSelectedYogurt] = useState(null);
  const handleYogurtClick = () => {
    setSelectedYogurt(true);
  }
  return (
    <>
    <ToppingsSummary />
    <ul>
      {backendData[0].yogurtData[0].DUMMY_TOPPINGS.map((yogurt) => {
        return (
          <li key={yogurt.id} onClick={() => handleYogurtClick(yogurt)}>
            {yogurt.name}
          </li>
        )})
      }
    </ul>
    {selectedYogurt && <YogurtModal 
      backendData={backendData} 
      setBackendData={setBackendData} 
      selectedCategory={selectedCategory}  
      setSelectedCategory={setSelectedCategory} 
      selectedYogurt={selectedYogurt} 
    />}
    </>
    
  );
};

export default Yogurt;