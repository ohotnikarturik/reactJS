import React from 'react';
import s from './MessageItem.module.css';
import UserPicture from "../../UserPicture /UserPicture";
import MessagesText from "./MessagesText/MessagesText";

const MessageItem = (props) => {
  return (
      <div className={s.messagesBlock}>
        <li className={s.itemLeft}>
          <UserPicture/>
          <MessagesText message={props.message}/>
        </li>
        <li className={s.itemRight}>
          <MessagesText message={props.message}/>
          <UserPicture/>
        </li>
      </div>
  )
};


export default MessageItem;