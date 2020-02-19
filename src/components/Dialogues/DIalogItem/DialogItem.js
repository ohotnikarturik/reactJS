import React from 'react';
import s from './../Dialogues.module.css';
import {NavLink} from "react-router-dom";
import UserPicture from "../../UserPicture /UserPicture";

const DialogItem = (props) => {
  let path = '/dialogues/1' + props.id;

  return (
      <li className={s.dialogItem + ' ' + s.active}>
        <UserPicture/>
        <NavLink to={path}>{props.name}</NavLink>
      </li>
  )
};


export default DialogItem;