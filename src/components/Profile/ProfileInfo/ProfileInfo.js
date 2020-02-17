import React from "react";
import s from './ProfileInfo.module.css'

const ProfileInfo = () => {
  return (
      <div>
        <div>
          <img className={s.img}
               src="https://i0.wp.com/blog.roompact.com/wp-content/uploads/2019/07/4d8dd-students-in-community.001.png?fit=1920%2C1080&ssl=1"
               alt="img"/>
        </div>
        <div>
          <h3 className={s.subTitle}>Well come!!!</h3>
        </div>
      </div>
  )
};

export default ProfileInfo;