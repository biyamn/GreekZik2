import React from 'react';
import Input from '../../UI/Input';

const ToppingItemForm = () => {
  return (
    <form>
      <Input 
        label="수량" 
        input={{
          id: 1,
          type: 'number',
          min: '1',
          max: '10',
          step: '1',
          defaultValue: '1',
        }} 
      />
      <button>+ 담기</button>
    </form>
  );
};

export default ToppingItemForm;