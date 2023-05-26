import React from 'react';
import classes from './ItemCard.module.css';

const ItemCard = ({ className, children }) => {
  return (
    <div className={`${classes['item-card']} ${className}`}>
      {children}
    </div>
  );
}

export default ItemCard;