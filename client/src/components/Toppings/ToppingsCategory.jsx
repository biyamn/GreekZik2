import React from 'react';
import classes from './ToppingsCategory.module.css';

const ToppingsCategory = (props) => {

  const selectHandler = (id) => {
    props.onSelect(id);
  }

  return (
    props.backendData.map(category => 
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