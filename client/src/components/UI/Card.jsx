import React from 'react';

import classes from './Card.module.css';

const Card = ({ className, children }) => {
  // 예) const classes = 'card ' + props.className;
  return (
    <div className={`${classes.card} ${className}`}>
      {children}
    </div>
  );
};

export default Card;