import React from "react";
import s from './Button.module.css'

const Button = (props) => {
  return (
      <button className={s.button}>{props.buttonName}</button>
  )
};

export default Button