import React from "react";
import s from './formPost.module.css'
import Button from "../../Button/Button";
import Subtitle from "../../Subtitle/Subtitle";

const FormPost = () => {
  return (
      <form>
        <Subtitle subtitle={'My Post'}/>
        <textarea className={s.textarea}> </textarea>
        <div className={s.buttonBlock}>
          <Button buttonName={'Add post'}/>
          <Button buttonName={'Remove post'}/>
        </div>

      </form>
  )
};

export default FormPost;