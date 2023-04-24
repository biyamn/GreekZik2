import React, { useState, useEffect } from 'react';
import ToppingsSummary from './ToppingsSummary';
import AvailableToppings from './AvailableToppings';
import ToppingsCategory from './ToppingsCategory';
import Card from './../UI/Card';
import classes from './Toppings.module.css';

const Toppings = () => {
  const [backendData, setBackendData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState('c1');

  useEffect(() => {
    fetch('http://localhost:5000/api').then(
      response => {
        return response.json()
      }
    ).then(
      data => {
      setIsLoading(false);
      return setBackendData(data);
    })
  }, [])

  

  const onSelect = (id) => {
    setSelectedCategory(id);

  }

  if (isLoading) {
    return <div>Loading...</div>
  } else {
      return (
        <div className={classes.toppings}>
          <ToppingsSummary />
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
                backendData={backendData}
                selectedCategory={selectedCategory} 
              />
            </div>
          </Card>
        </div>
      );
  }
}

export default Toppings;