import React from 'react';
import style from './SortButton.module.css';

const SortButton = (props) => {
  return (
    <React.Fragment>
      <button onClick={ e=> props.setSelectedSort(props.name) }
        className={ props.active ? style.active : '' }>
        {props.displayText}</button>
    </React.Fragment>
  );
}

export default SortButton;
