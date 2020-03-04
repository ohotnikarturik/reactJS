import React from "react";
import s from './Users.module.css';
import UserPicture from "../UserPicture /UserPicture";


const Users = (props) => {
  return (
      <li className={s.item}>
        <UserPicture/>
        <p>{props.name}</p>
      </li>
  )
};

export default Users;