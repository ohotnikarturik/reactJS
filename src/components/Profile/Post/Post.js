import React from "react";
import s from './Post.module.css'
import MyPost from "./MyPost/MyPost";


const Post = (props) => {

  let postsElement = props.posts.map(p => <MyPost  message={p.message} likesCount={p.likesCount}/>);

  return (
      <ul className={s.list}>
        {postsElement}
      </ul>
  )
};

export default Post;