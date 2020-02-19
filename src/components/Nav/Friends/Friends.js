import React from "react";
import s from './Friends.module.css';
import UserPicture from "../../UserPicture /UserPicture";


const Friends = (props) => {
  console.log(props);
  return (
      <li className={s.item}>
        <UserPicture/>
        <p>{props.name}</p>
      </li>
  )
};

export default Friends;