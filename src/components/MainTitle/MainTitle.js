import React from "react";
import s from './MainTitle.module.css'


const MainTitle = (props) => {
  return (
      <h2 className={s.title}>{props.title}</h2>
  )
};

export default MainTitle;

