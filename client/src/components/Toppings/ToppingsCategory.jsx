import React from 'react';
import classes from './ToppingsCategory.module.css';

const ToppingsCategory = ({onSelect, backendData}) => {

  const selectHandler = (id) => {
    onSelect(id);
  }

  return (
    backendData.map(category => 
      <li
        key={category.id}
        onClick={() => selectHandler(category.id)}
        className={classes.category}
      >
        {category.name}
      </li>
    )
  );
};

export default ToppingsCategory;