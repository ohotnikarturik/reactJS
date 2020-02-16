import React from "react";
import '../../App.css'
import s from './Profile.module.css'
import Textarea from "./MyPost/Textarea";
import Post from "./MyPost/Post/Post";
import ProfileInfo from "./MyPost/ProfileInfo/ProfileInfo";

const Profile= () => {
  return (
      <div>
        <ProfileInfo/>
        <Textarea/>
        <ul className={s.list}>
          <Post message={'Hello! It is nice'}/>
          <Post message={'Yes,true'} age={'30'}/>
          <Post hay={'Like'}/>
          <Post hay={'Wow'}/>
        </ul>

      </div>
  )
};

export default  Profile;


