import React from 'react';
import Modal from '../UI/Modal';
import Toppings from '../Toppings/Toppings';

const YogurtModal = ({ selectedYogurt, backendData, setBackendData, selectedCategory, setSelectedCategory }) => {
  return (
    <div>
      <Modal selectedYogurt={selectedYogurt}>
        <Toppings 
          backendData={backendData} 
          setBackendData={setBackendData} 
          selectedCategory={selectedCategory}  
          setSelectedCategory={setSelectedCategory} 
        />
      </Modal>
    </div>
  );
};

export default YogurtModal;