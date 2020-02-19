import React from "react";
import s from './MessagesText.module.css';

const MessagesText = (props) => {
  return (
      <span className={s.text}>{props.message}</span>
  )
};

export default MessagesText;