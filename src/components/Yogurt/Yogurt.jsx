import React from 'react';
import Toppings from '../Toppings/Toppings';

const Yogurt = ({ backendData, setBackendData, selectedCategory, setSelectedCategory }) => {
  // console.log('왜')
  console.log('backendData[0].yogurtData[0].DUMMY_TOPPINGS: ', backendData[0].yogurtData[0].DUMMY_TOPPINGS)
  const yogurts = backendData[0].yogurtData[0].DUMMY_TOPPINGS.map(yogurt =>
    <p>{yogurt.name}</p>
  )

  return (
    <>
    {yogurts}
    {/* <Toppings 
      backendData={backendData} 
      setBackendData={setBackendData} 
      selectedCategory={selectedCategory}  
      setSelectedCategory={setSelectedCategory} 
    /> */}
    </>
    
  );
};

export default Yogurt;