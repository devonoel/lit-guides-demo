import React from 'react';
import { Link } from 'react-router-dom';
import style from './GuideCard.module.css';

const GuideCard = (props) => {
  return (
    <Link to={`/guides/${props.id}`} className={style.link} state={
      { name: props.name, author: props.author } }>
      <div id={`guide-card-${props.id}`} className={style.card}>
        <h2>{props.name}</h2>
        <h3>{props.author}</h3>
      </div>
    </Link>
  );
}

export default GuideCard;
