import React from "react";
import '../../App.css'
// import s from './Profile.module.css'
import FormPost from "./formPost/formPost";
import Post from "./Post/Post";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile= (props) => {
  return (
      <div>
        <ProfileInfo/>
        <FormPost addPost={props.addPost}
                  newPostText={props.newPostText}
                  updateNewPostText={props.updateNewPostText}
                  updateNewMessageText={props.updateNewMessageText}/>
        <Post posts={props.posts}/>
      </div>
  )
};

export default  Profile;