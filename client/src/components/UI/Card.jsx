import React from 'react';

import classes from './Card.module.css';

const Card = (props) => {
  // 예) const classes = 'card ' + props.className;
  return (
    <div className={`${classes.card} ${props.className}`}>
      {props.children}
    </div>
  );
};

export default Card;