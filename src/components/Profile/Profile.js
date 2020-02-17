import React from "react";
import '../../App.css'
// import s from './Profile.module.css'
import FormPost from "./formPost/formPost";
import Post from "./Post/Post";
import ProfileInfo from "./ProfileInfo/ProfileInfo";


const Profile= () => {

  return (
      <div>
        <ProfileInfo/>
        <FormPost/>
        <Post/>
      </div>
  )
};

export default  Profile;