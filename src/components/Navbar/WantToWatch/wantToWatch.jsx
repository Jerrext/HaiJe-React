import React from 'react';
import s from './wantToWatch.module.css';

const WantToWatch = (props) => {
  const wantToWatchData = [
    {id: 1, name: "Фильм 1"},
    {id: 2, name: "Фильм 2"},
    {id: 3, name: "Фильм 3"},
    {id: 4, name: "Фильм 4"},
    {id: 5, name: "Фильм 5"}
  ]

  let wantToWatchElements = wantToWatchData.map(film => <li className={s.listItem}>{film.name}</li>)

  return (
    <div className={s.wrapper}>
      <ul className={s.list}>
        { wantToWatchElements }
      </ul>
    </div>
  );
}

export default WantToWatch;