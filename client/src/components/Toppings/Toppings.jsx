import React, { useState, useEffect } from 'react';
import ToppingsSummary from './ToppingsSummary';
import AvailableToppings from './AvailableToppings';
import ToppingsCategory from './ToppingsCategory';
import Card from './../UI/Card';
import classes from './Toppings.module.css';

const Toppings = props => {
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

// const add = (cb, a, b) => {
//   setTimeout(() => {
//     Math.random() > 0.7 ?
//     cb(false) :
//     cb(a+b)
//   },1000)
// }

// add((res) => {
//   res ? add(cb(res) => {
//     add(cb(res) => {
//       ad
//     },res, 7)
//   }, res, 5) : console.log('failed')
// }, 3, 5)

// const waitNAdd =(a,b) => {
//   return new Promise( (resolve ,reject) => {
//     add((res) => {
//       if(res) resolve(res)
//       if(!res) reject(new Error('random fail'))
//     },a,b)
//   })
//   }}

// waitNAdd.then(res => console.log(res)).then(res => waitNAdd(res, 3).then().catch()).catch

// const asyncAdd = async (a,b) => {
//   try {
//     const res = await waitNAdd(3,4)
//     const res2= await waitNAdd(res, 5)
//     const res3 = await waitNAdd(res2, 7)

//     wfw
//   } catch (e) {
//     console.log(e)
//   }

// }

  const onSelect = (id) => {
    setSelectedCategory(id);
  }

  const onSaveAmount = (enteredAmount) => {
    props.onSaveAmount(enteredAmount);
  }

  const onSaveItem = selectedItemData => {
    props.onSaveItem(selectedItemData);
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
                onSaveAmount={onSaveAmount}
                onSaveItem={onSaveItem}
              />
            </div>
          </Card>
        </div>
      );
  }
}

export default Toppings;