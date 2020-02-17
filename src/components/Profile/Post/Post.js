import React from "react";
import s from './Post.module.css'
import MyPost from "./MyPost/MyPost";


const Post = () => {

  let postsData = [
    {id: 1, message: 'Hello! My name is Artur', likesCount: 5},
    {id: 1, message: 'it is my first post' , likesCount: 10}
  ];

  let postsElement = postsData.map(p => <MyPost message={p.message} likesCount={p.likesCount}/>);

  return (
      <ul className={s.list}>
        {postsElement}
      </ul>
  )
};

export default Post;