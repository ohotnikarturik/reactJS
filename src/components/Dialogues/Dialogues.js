import React from 'react';
import s from './Dialogues.module.css';
import MainTitle from "./../MainTitle/MainTitle";
import DialogItem from "./DIalogItem/DialogItem";
import MessageItem from "./MessageItem/MessageItem";
import Subtitle from "../Subtitle/Subtitle";

const Dialogues = (props) => {

  console.log(props);
  let dialogElements = props.dialogues.map(d => <DialogItem name={d.name} id={d.id}/>);
  let messageElement = props.messages.map(m => <MessageItem message={m.message}/>);

  return (
      <div>
        <MainTitle title={'Dialogues'}/>
        <div className={s.dialoguesBlocks}>
          <div>
            <Subtitle subtitle={'Users'}/>
            <ul className={s.dialoguesList}>
              {dialogElements}
            </ul>
          </div>
          <div>
            <Subtitle subtitle={'Dialogues'}/>
            <ul className={s.messagesList}>
              {messageElement}
            </ul>
          </div>
        </div>
      </div>

  )
};

export default Dialogues;