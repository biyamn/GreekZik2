import React from 'react';
import AvailableToppings from './AvailableToppings';
import ToppingsCategory from './ToppingsCategory';
import Card from './../UI/Card';
import classes from './Toppings.module.css';

const Toppings = ({ backendData, setBackendData, setSelectedCategory, selectedCategory }) => {
  console.log('backendData: ', backendData)
  const onSelect = (id) => {
    setSelectedCategory(id);
  }

  const onSaveCategories = itemState => {
    
    const newData = backendData.map(category => {
      const newToppings = category.DUMMY_TOPPINGS.map(topping => {
        if (topping.id === itemState.id) {
          return {...topping, amount: itemState.amount};
        }
        return topping;
      });
      return {...category, DUMMY_TOPPINGS: newToppings}
    }
    )
    setBackendData(newData)
  }  

  return (
    <div className={classes.toppings}>
      <Card>
        <div className={classes.container}>
          <div className={classes.ulContainer}>
            <ul className={classes.liContainer}>
              <ToppingsCategory
                backendData={backendData}
                onSelect={onSelect}
              />
            </ul>
          </div>
          <AvailableToppings
            selectedCategory={selectedCategory} 
            onSaveCategories={onSaveCategories}
            backendData={backendData}
          />
        </div>
      </Card>
    </div>
    );
  }

export default Toppings;