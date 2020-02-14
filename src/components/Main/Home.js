import React from "react";
import s from './Home.module.css'
import Textarea from "./MyPost/Textarea";
import Post from "./MyPost/Post/Post";

const Home = () => {
  return (
      <main className={s.home}>
        <h2>HOME CONTENT</h2>
        <Textarea/>
        <Post message={'Hello! It is nice'}/>
        <Post message={'Yes,true'} age={'30'}/>
        <Post hay={'Like'}/>
        <Post hay={'Wow'}/>
        <Post/>
        <Post/>

      </main>
  )
};

export default  Home;


