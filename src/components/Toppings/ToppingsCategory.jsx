import React from 'react';
import classes from './ToppingsCategory';

const ToppingsCategory = (props) => {
  const selectHandler = (id) => {
    props.onSelect(id);
  }

  return (
    props.DUMMY_CATEGORIES.map(category => 
        <li key={category.id} onClick={() => selectHandler(category.id)}>{category.name}</li>
    )
  );
};

export default ToppingsCategory;