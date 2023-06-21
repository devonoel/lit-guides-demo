import React from 'react';
import { Link } from 'react-router-dom';

const GuideCard = (props) => {
  return (
    <Link to={`/guides/${props.id}`} state={
      { name: props.name, author: props.author } }>
      <div id={`guide-card-${props.id}`}>
        <h2>{props.name}</h2>
        <h3>{props.author}</h3>
      </div>
    </Link>
  );
}

export default GuideCard;
