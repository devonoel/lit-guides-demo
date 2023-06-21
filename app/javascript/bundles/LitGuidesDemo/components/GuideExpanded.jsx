import React from 'react';
import { useLocation } from 'react-router-dom';

const GuideExpanded = (props) => {
  console.log(props);
  const guide = useLocation().state || props.guide;

  return (
    <React.Fragment>
      <h2>{guide.name}</h2>
      <h3>{guide.author}</h3>
    </React.Fragment>
  );
}

export default GuideExpanded;
