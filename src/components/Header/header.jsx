import React from 'react';
import s from './header.module.css';

const Header = () => {
  return (
    <header className={s.header}>
        <div className={s.logoWrapper}>
            <a href="#">
                <img src="https://i0.wp.com/www.tara.ua/wp-content/uploads/2020/03/cropped-%D0%BB%D0%BE%D0%B3%D0%BE-%D0%B1%D0%B5%D0%B7-%D1%84%D0%BE%D0%BD%D0%B0-1.png?ssl=1" alt="Logo" className={s.logo} />
            </a>
        </div>
        <div className={s.search}>
            <input type="text" />
        </div>
        <div className={s.controlsMenu}>
            <input type="button" value="Меню" />
        </div>
    </header>
  );
}

export default Header;