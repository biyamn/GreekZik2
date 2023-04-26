import React from 'react';
import ReactDOM from "react-dom";
import classes from './Modal.module.css';

const Backdrop = props => {
  return <div className={classes.backdrop} onClick={props.onClick} />
}

const Overlay = props => {
  return (
    <div className={classes.modal}>
      <div className={classes.content}>{props.children}</div>
    </div>
  );
}

const Modal = props => {
  return (
    <>
      {ReactDOM.createPortal(<Backdrop onClick={props.hideCartHandler} />, document.getElementById("backdrop-root"))}
      {ReactDOM.createPortal(<Overlay>{props.children}</Overlay>, document.getElementById("overlay-root"))}
    </>
  );
};

export default Modal;