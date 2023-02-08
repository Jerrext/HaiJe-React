import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './navbar.module.css';

const NavItem = (props) => {
  return (
    <li><NavLink to={props.href} className={s.link}>{props.name}</NavLink></li>
  )
}

const Navbar = (props) => {
  return (
    <nav className={s.navbar}>
      <ul className={s.list}>
        <NavItem href='/home' name='Главная'/>
        <NavItem href='/category' name='Категории'/>
        <NavItem href='/profile' name='Мой профиль'/>
        <NavItem href='/statistic' name='Моя статистика'/>
        <NavItem href='/favorites' name='Избранное'/>
        <NavItem href='/wantToWatch' name='Хочу посмотреть'/>
      </ul>
    </nav>
  );
}

export default Navbar;