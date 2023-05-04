import React, { useState, useEffect } from 'react';
import ToppingsSummary from './ToppingsSummary';
import AvailableToppings from './AvailableToppings';
import ToppingsCategory from './ToppingsCategory';
import Card from './../UI/Card';
import classes from './Toppings.module.css';

const Toppings = props => {
  const [backendData, setBackendData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState('ca1');

  console.log('back: ', backendData);
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

  const onSaveItem = itemState => {
    console.log(itemState)
    props.onSaveItem(itemState);
    // props.onSaveAmount(selectedItemData.amount)
  }

  // filteredCategory: 하나의 카테고리에 있는 배열. 하나의 객체를 포함하며 그 안에는 8개의 재료들이 있다. 
  
  

//   const filteredCategory = backendData.filter(categories => {
//     return categories.map(category => {
//       return category.id === selectedCategory;
//   })
// })

  // filteredCategory는 하나의 변수이고 selectedCategory가 바뀔 때마다 바뀌므로 여기에 의존하면 안됨
  // const onSaveCategories = itemState => {
  //   const newCategories = filteredCategory.map(categories => {
  //     return categories.DUMMY_TOPPINGS.map(category => {
        
  //       if (category.id === itemState.id) {
  //       //   console.log('category.id', category.id);
  //       // console.log('itemState.id', itemState.id);
  //         return {...category, amount: itemState.amount};
  //       }
  //       return category;
  //     })
  //   }
  //   )
  //   setCategories(newCategories)
  // }

  const onSaveCategories = itemState => {
    const newData = backendData.map(category => {
      const newToppings = category.DUMMY_TOPPINGS.map(topping => {
        console.log('topping: ', topping)
        console.log('category.id: ', category.id)
        console.log('itemState.id: ',itemState.id)
        if (topping.id === itemState.id) {
          return {...topping, amount: itemState.amount};
        }
        return topping;
      });
      console.log('newToppings: ', newToppings);
      return {...category, DUMMY_TOPPINGS: newToppings}
    }
    )
    console.log('newData: ', newData)
    setBackendData(newData)
  }

  // const onSaveCategories = itemState => {
  //   // newData가 잘못됨. 더미데이터만 남아있음 id(ca1, ca2) 어디감?
  //   const newData = backendData.map(categories => {
  //     categories.DUMMY_TOPPINGS.map(category => {
  //       if (category.id === itemState.id) {
  //         console.log('category.id', category.id);
  //         console.log('itemState.id', itemState.id);
  //         return {...category, amount: itemState.amount};
  //       }
  //       return category;
  //     })
  //   }
  //   )
  //   console.log('newData: ', newData)
  //   setBackendData(newData)
  // }
  

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
                selectedCategory={selectedCategory} 
                onSaveItem={onSaveItem}
                onSaveCategories={onSaveCategories}
                backendData={backendData}
              />
            </div>
          </Card>
        </div>
      );
  }
}

export default Toppings;