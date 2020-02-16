import React from 'react';
import s from './Dialogues.module.css';
import MainTitle from "../MainTitle/MainTitle";
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
  let path = '/dialogs/1' + props.id;

  return (
      <li className={s.dialogItem + ' ' + s.active}><NavLink to={path }>{props.name}></NavLink></li>
  )
};

const MessageItem = (props) => {
  return (
      <li className={s.messageItem}>{props.message}</li>
  )
};

const Dialogues = (props) => {
  return (
      <div>
        <MainTitle title={'Dialogues'}/>
        <div className={s.dialoguesBlocks}>
          <ul className={s.dialoguesList}>
            <DialogItem name='Name-1' id='1'/>
            <DialogItem name='Name-2' id='2'/>
            <DialogItem name='Name-3' id='3'/>
            <DialogItem name='Name-4' id='4'/>
            <DialogItem name='Name-5' id='5'/>
            <DialogItem name='Name-6' id='6'/>
            <DialogItem name='Name-7' id='7'/>
          </ul>
          <ul className={s.messagesList}>
            <MessageItem message='Hello-1 !!!'/>
            <MessageItem message='Hello-2 !!!'/>
            <MessageItem message='Hello-3 !!!'/>
            <MessageItem message='Hello-4 !!!'/>
            <MessageItem message='Hello-5 !!!'/>
          </ul>
        </div>
      </div>

  )
};

export default Dialogues;