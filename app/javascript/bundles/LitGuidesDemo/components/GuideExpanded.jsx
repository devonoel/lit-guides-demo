import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const GuideExpanded = (props) => {
  const guide = useLocation().state || props.guide;

  return (
    <React.Fragment>
      <h2>{guide.name}</h2>
      <h3>{guide.author}</h3>
      <Link to='/'>Back</Link>
    </React.Fragment>
  );
}

export default GuideExpanded;
