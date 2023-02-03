import React from 'react';
import s from './navbar.module.css';

const Navbar = () => {
  return (
    <nav className={s.navbar}>
      <ul className={s.list}>
        <li><a href="#" className={s.link}>Главная</a></li>
        <li><a href="#" className={s.link}>Категории</a></li>
        <li><a href="#" className={s.link}>Мой профиль</a></li>
        <li><a href="#" className={s.link}>Моя статистика</a></li>
        <li><a href="#" className={s.link}>Избранное</a></li>
        <li><a href="#" className={s.link}>Хочу посмотреть</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;