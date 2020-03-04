import React from 'react';
import s from './Dialogues.module.css';
import MainTitle from "./../MainTitle/MainTitle";
import DialogItem from "./DIalogItem/DialogItem";
import MessageItem from "./MessageItem/MessageItem";
import Subtitle from "../Subtitle/Subtitle";
import Button from "../Button/Button";

const Dialogues = (props) => {

  let dialogElements = props.dialogues.map(d => <DialogItem name={d.name} id={d.id}/>);
  let messageElement = props.messages.map(m => <MessageItem message={m.message}/>);
  
  let newMessageElement = React.createRef();
  
  let addMessage = (e) => {
    e.preventDefault();
    props.addMassage();
  };

  let onChangeMessage = (e) => {
    e.preventDefault();
    let text = newMessageElement.current.value;
    props.updateNewMessageText(text)
  };

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
            <form>
              <textarea onChange={ onChangeMessage } ref={newMessageElement} className={s.textarea} value={props.newMessageText}/>
              <Button onClick={ addMessage } buttonName={'Add message'}/>
            </form>
            <div className={s.messagesBlock}>
              <ul className={s.messagesList}>
                {messageElement}
              </ul>
            </div>
          </div>
        </div>
      </div>

  )
};

export default Dialogues;