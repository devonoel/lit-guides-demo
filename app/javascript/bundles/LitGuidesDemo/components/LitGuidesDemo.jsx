// import PropTypes from 'prop-types';
import React, { useState } from 'react';
import style from './LitGuidesDemo.module.css';
import SortButton from './SortButton.jsx';

const LitGuidesDemo = (props) => {
  const [selectedSort, setSelectedSort] = useState('title');

  const sortGuides = (g1, g2) => {
    let attr = selectedSort == 'title' ? 'name' : 'created_at';
    return g1[attr] < g2[attr] ? -1 : g1[attr] > g2[attr] ? 1 : 0
  }

  return (
    <React.Fragment>
      <h1>Lit Guides Demo</h1>

      <div>
        <SortButton name="title"
          displayText="Title A-Z"
          active={selectedSort == 'title'}
          setSelectedSort={setSelectedSort} />
        <SortButton name="recent"
          displayText="Recently Added"
          active={selectedSort == 'recent'}
          setSelectedSort={setSelectedSort} />
      </div>

      <p>Selected: { selectedSort }</p>

      <ul>
        { props.guides.sort(sortGuides)
          .map(g => (<li key={g.id}>{g.name}</li>)) }
      </ul>
    </React.Fragment>
  );
}

export default LitGuidesDemo;
