import React from "react";
import {AiFillCloseSquare} from "react-icons/ai";
import "./Modal.scss";

const Modal = (
  {
    header = "",
    onClose = () => {},
    ...props
  }
) => {
  return (
    <div className={'modal'}>
      <div className={'modal-options'}>
        <AiFillCloseSquare
          className={'button-icon size-2 goldenrod-hover'}
          onClick={onClose}
        />
      </div>
      <h1>{header}</h1>
      {props.children}
    </div>
  )
}

export default Modal;
