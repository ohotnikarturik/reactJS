import React from "react";
import s from './formPost.module.css'

const FormPost = () => {
  return (
      <form>
        <h3>My posts</h3>
        <textarea className={s.textarea}> </textarea>
        <button className={s.button}>Add post</button>
        <button className={s.button}>Remove post</button>
      </form>
  )
};

export default FormPost;