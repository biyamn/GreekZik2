import React  from 'react';
import classes from './Input.module.css';

const Input = ({ input, onChange, label, input })=> {
  return (
    <div className={classes.input} >
      <label htmlFor={input.id} >{label}</label>
      <input onChange={onChange} {...input} /> 
    </div>
  );
};

export default Input;