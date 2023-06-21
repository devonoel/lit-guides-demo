import React from 'react';

const GuideCard = (props) => {
  return (
    <div id={`guide-card-${props.id}`}>
      <h2>{props.name}</h2>
      <h3>{props.author}</h3>
    </div>
  );
}

export default GuideCard;
