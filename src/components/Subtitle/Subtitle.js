import React from "react";
import  s from './Subtitle.module.css';

const Subtitle = (props) => {
  return (
      <h3 className={s.subtitle}>{props.subtitle}</h3>
  )
};

export default Subtitle;