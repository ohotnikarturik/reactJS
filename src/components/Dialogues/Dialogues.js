import React from 'react';
import s from './Dialogues.module.css';
import MainTitle from "../MainTitle/MainTitle";
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
  let path = '/dialogues/1' + props.id;

  return (
      <li className={s.dialogItem + ' ' + s.active}><NavLink to={path}>{props.name}</NavLink></li>
  )
};

const MessageItem = (props) => {
  return (
      <li className={s.messageItem}>{props.message}</li>
  )
};

const Dialogues = (props) => {

  let dialogues = [
    {id: 1, name: 'Name-1'},
    {id: 2, name: 'Name-2'},
    {id: 3, name: 'Name-3'},
    {id: 4, name: 'Name-4'},
    {id: 5, name: 'Name-5'},
    {id: 6, name: 'Name-6'},
    {id: 7, name: 'Name-7'}
  ];
  let messages = [
    {id: 1, message: 'Hello-1 !!!'},
    {id: 2, message: 'Hello-2 !!!'},
    {id: 3, message: 'Hello-3 !!!'},
    {id: 4, message: 'Hello-4 !!!'},
    {id: 5, message: 'Hello-5 !!!'},
    {id: 6, message: 'Hello-6 !!!'},
    {id: 7, message: 'Hello-7 !!!'}
  ];

  let dialogElements = dialogues.map(d => <DialogItem name={d.name} id={d.id}/>);
  let messageElement = messages.map(m => <MessageItem message={m.message}/>);

  return (
      <div>
        <MainTitle title={'Dialogues'}/>
        <div className={s.dialoguesBlocks}>
          <ul className={s.dialoguesList}>
            {dialogElements}
          </ul>
          <ul className={s.messagesList}>
            {messageElement}
          </ul>
        </div>
      </div>

  )
};

export default Dialogues;