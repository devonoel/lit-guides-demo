import React, { useState } from 'react';
import style from './LitGuidesDemo.module.css';
import GuidesList from './GuidesList.jsx';

const LitGuidesDemo = (props) => {
  return (
    <React.Fragment>
      <h1>Lit Guides Demo</h1>
      <GuidesList guides={props.guides}/>
    </React.Fragment>
  );
}

export default LitGuidesDemo;
