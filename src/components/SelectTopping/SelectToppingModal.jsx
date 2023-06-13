import React from 'react';
import Modal from '../UI/Modal';
import Toppings from '../Toppings/Toppings';
import SubHeaderCartButton from '../Layout/SubHeaderCartButton';

const SelectToppingModal = ({ showSubCartHandler, selectedYogurt, backendData, setBackendData, selectedCategory, setSelectedCategory, hideSelectModalHandler, hideCartHandler }) => {
  const onSelect = (id) => {
    setSelectedCategory(id);
  }

  const onSaveCategories = itemState => {
    const newData = backendData[1].toppingData.map(category => {
      const newToppings = category.DUMMY_TOPPINGS.map(topping => {
        if (topping.id === itemState.id) {
          return {...topping, amount: itemState.amount};
        }
        return topping;
      });
      return {...category, DUMMY_TOPPINGS: newToppings}
    }
    )
    console.log('onSaveCategories newData: ', newData)
    const newBackendData = {...backendData, toppingData: newData}
    console.log('newBackendData: ', newBackendData)
    setBackendData(newBackendData)
  }  
  
  return (
    <div>
      <Modal selectedYogurt={selectedYogurt} hideHandler={hideSelectModalHandler}>
        <h1>토핑 내마음대로 담기!</h1>
        <SubHeaderCartButton onClick={showSubCartHandler}/>
        <Toppings 
          backendData={backendData} 
          setBackendData={setBackendData} 
          selectedCategory={selectedCategory}  
          setSelectedCategory={setSelectedCategory} 
          onSaveCategories={onSaveCategories}
          onSelect={onSelect}
        />
        <button onClick={hideSelectModalHandler}>닫기</button>
      </Modal>
    </div>
  );
};

export default SelectToppingModal;