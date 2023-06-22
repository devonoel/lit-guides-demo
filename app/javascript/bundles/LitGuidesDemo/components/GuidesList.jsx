// import PropTypes from 'prop-types';
import React, { useState, useEffect } from 'react';
import SortButton from './SortButton.jsx';
import GuideCard from './GuideCard.jsx';
import style from './GuidesList.module.css';

const GuidesList = (props) => {
  const [selectedSort, setSelectedSort] = useState('title');
  const [guides, setGuides] = useState(props.guides || []);

  const sortGuides = (g1, g2) => {
    const isTitle = selectedSort == 'title'
    const attr = isTitle ? 'name' : 'created_at';

    if (isTitle) {
      return g1[attr] < g2[attr] ? -1 : g1[attr] > g2[attr] ? 1 : 0
    } else {
      return g1[attr] > g2[attr] ? -1 : g1[attr] < g2[attr] ? 1 : 0
    }
  }

  useEffect(() => {
    if (guides.length == 0) { fetchData() }

    async function fetchData() {
      const response = await fetch('/api/v1/guides');
      const jsonData = await response.json();
      setGuides(jsonData.guides);
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
