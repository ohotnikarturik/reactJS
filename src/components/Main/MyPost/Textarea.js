import React from "react";
import s from './Textarea.module.css'

const Textarea = () => {
  return (
      <form>
        <textarea className={s.textarea}> </textarea>
        <button className={s.button}>Add post</button>
        <button className={s.button}>Remove post</button>
      </form>
  )
};

export default Textarea;