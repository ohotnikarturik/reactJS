import React from "react";
import s from './Nav.module.css';
import {NavLink} from "react-router-dom";

const Nav = () => {
  return (
      <nav className={s.nav}>
        <ul className={s.list}>
          <li className={s.item}><NavLink to="/profile" className={s.link} activeClassName={s.active}>Profile</NavLink></li>
          <li className={s.item}><NavLink to="/dialogues" className={s.link} activeClassName={s.active}>Messages</NavLink></li>
          <li className={s.item}><NavLink to="/news" className={s.link} activeClassName={s.active}>News</NavLink></li>
          <li className={s.item}><NavLink to="/music" className={s.link} activeClassName={s.active}>Music</NavLink></li>
          <li className={s.item}><NavLink to="settings" className={s.link} activeClassName={s.active}>Settings</NavLink></li>
        </ul>
      </nav>
  )
};

export default Nav;