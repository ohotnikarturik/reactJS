import React from "react";
import s from './MyPost.module.css'
import UserPicture from "../../../UserPicture /UserPicture";
import MessagesText from "../../../Dialogues/MessageItem/MessagesText/MessagesText";

const MyPost = (props) => {
  return (
      <li className={s.item}>
        <UserPicture/>
        <MessagesText message ={props.message} id={props.age}/>
        <span className={s.like}>{props.likesCount}</span>
      </li>
  )
};

export default MyPost;