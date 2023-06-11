import React from 'react';
import Modal from '../UI/Modal';
import Toppings from '../Toppings/Toppings';
import HeaderCartButton from '../Layout/HeaderCartButton';

const YogurtModal = ({ showCartHandler, selectedYogurt, backendData, setBackendData, selectedCategory, setSelectedCategory, hideToppingModalHandler }) => {
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
      <Modal selectedYogurt={selectedYogurt} hideCartHandler={hideToppingModalHandler}>
        <h1>토핑 내마음대로 담기!</h1>
        <HeaderCartButton onClick={showCartHandler}/>
        <Toppings 
          backendData={backendData} 
          setBackendData={setBackendData} 
          selectedCategory={selectedCategory}  
          setSelectedCategory={setSelectedCategory} 
          onSaveCategories={onSaveCategories}
          onSelect={onSelect}
        />
        <button onClick={hideToppingModalHandler}>닫기</button>
      </Modal>
    </div>
  );
};

export default YogurtModal;