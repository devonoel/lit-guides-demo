// import PropTypes from 'prop-types';
import React, { useState, useEffect } from 'react';
import style from './GuidesList.module.css';
import SortButton from './SortButton.jsx';
import GuideCard from './GuideCard.jsx';

const GuidesList = (props) => {
  const [selectedSort, setSelectedSort] = useState('title');
  const [guides, setGuides] = useState(props.guides || []);

  const sortGuides = (g1, g2) => {
    let attr = selectedSort == 'title' ? 'name' : 'created_at';
    return g1[attr] < g2[attr] ? -1 : g1[attr] > g2[attr] ? 1 : 0
  }

  useEffect(() => {
    if (guides.length == 0) {
      console.log('OOPS');
    }
  }, []);

  return (
    <React.Fragment>
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

      <div>
        { guides.sort(sortGuides)
          .map(g => { return (<GuideCard key={g.id} id={g.id} name={g.name} author={g.author} />)}) }
      </div>
    </React.Fragment>
  );
}

export default GuidesList;
