import React from 'react';
import ToppingItemForm from './ToppingItemForm';

const ToppingItem = () => {
  return (
    <>
      <div>
        <h3>무화과</h3>
        <div>1,000원</div>
      </div>
      <div>
        <ToppingItemForm />
      </div>
    </>
  );
};

export default ToppingItem;