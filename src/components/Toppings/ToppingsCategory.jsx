import React from 'react';
import classes from './ToppingsCategory.module.css';

const ToppingsCategory = ({onSelect, backendData}) => {

  const selectHandler = (id) => {
    onSelect(id);
  }
  console.log('backendData[1].toppingData: ', backendData[1].toppingData)
  return (
    backendData[1].toppingData.map(category => 
      <li
        key={category.id}
        onClick={() => selectHandler(category.id)}
        className={classes.category}
      >
        {category.name}
      </li>
    )
    // [1, 2, 3].map(category => <p>{category}</p>)

    // backendData[1].toppingData.map(category => 
    //   <p>{category.name}</p>
    // )
  );
};

export default ToppingsCategory;