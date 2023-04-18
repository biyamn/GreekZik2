import React, { forwardRef }  from 'react';

const Input = forwardRef((props, ref) => {
  return (
    <div>
      <label htmlFor={props.input.id} >{props.label}</label>
      {/* props.input이 가지는 모든 속성 키,값 쌍을 가져옴 */}
      <input ref={ref} {...props.input} />
    </div>
  );
});

export default Input;