import React from "react";
import s from './ProfileInfo.module.css'
import Subtitle from "../../Subtitle/Subtitle";

const ProfileInfo = (props) => {
  return (
      <div className={s.profileInfo}>
        <div>
          <h2 className={s.profileInfoSubtitle}>Well come to my Social Network!</h2>
        </div>
        <div className={s.profileInfoBlock}>
          <img className={s.img}
               src="https://i0.wp.com/blog.roompact.com/wp-content/uploads/2019/07/4d8dd-students-in-community.001.png?fit=1920%2C1080&ssl=1"
               alt="img"/>
        </div>
      </div>
  )
};

export default ProfileInfo;