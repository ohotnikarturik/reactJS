import React from "react";
import s from './Button.module.css'

const Button = (props) => {

  // let addPost = (e) => {
  //   e.preventDefault();
  //
  //   alert('hi')
  // };

  return (
      <button onClick={ props.onClick } className={s.button}>{props.buttonName}</button>
  )
};

export default Button