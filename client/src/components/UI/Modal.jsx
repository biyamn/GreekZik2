import React from 'react';
import ReactDOM from "react-dom";
import classes from './Modal.module.css';

const Backdrop = ({ onClick }) => {
  return <div className={classes.backdrop} onClick={onClick} />
}

const Overlay = ({ children }) => {
  return (
    <div className={classes.modal}>
      <div className={classes.content}>{children}</div>
    </div>
  );
}

const Modal = ({ children, hideCartHandler }) => {
  return (
    <>
      {ReactDOM.createPortal(<Backdrop onClick={hideCartHandler} />, document.getElementById("backdrop-root"))}
      {ReactDOM.createPortal(<Overlay>{children}</Overlay>, document.getElementById("overlay-root"))}
    </>
  );
};

export default Modal;