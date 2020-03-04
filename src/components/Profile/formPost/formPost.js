import React from "react";
import s from './formPost.module.css'
import Button from "../../Button/Button";
import Subtitle from "../../Subtitle/Subtitle";

const FormPost = (props) => {
  let newPostElement = React.createRef();

  let addPost = (e) => {
    e.preventDefault();
    props.addPost();
  };

  let onChangePost = () => {
    let text = newPostElement.current.value;
    props.updateNewPostText(text)
  };

  return (
      <form>
        <Subtitle subtitle={'My Post'}/>
        <textarea onChange={ onChangePost }
                  value={props.newPostText}
                  ref={newPostElement}
                  className={s.textarea}/>
        <div className={s.buttonBlock}>
          <Button onClick={ addPost } buttonName={'Add post'}/>
          <Button buttonName={'Remove post'}/>
        </div>

      </form>
  )
};

export default FormPost;