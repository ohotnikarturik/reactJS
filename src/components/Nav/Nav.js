import React from "react";
import s from './Nav.module.css';
const Nav = () => {
  return (
      <nav className={s.nav}>
        <ul className={s.list}>
          <li className={s.item}><a href="" className={s.link}>HOME</a></li>
          <li className={s.item}><a href="" className={s.link}>ABOUT</a></li>
          <li className={s.item}><a href="" className={s.link}>BLOG</a></li>
          <li className={s.item}><a href="" className={s.link}>CONTACTS</a></li>
        </ul>
      </nav>
  )
};

export default Nav;