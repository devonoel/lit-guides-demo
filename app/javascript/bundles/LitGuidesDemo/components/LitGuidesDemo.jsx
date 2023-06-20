// import PropTypes from 'prop-types';
import React, { useState } from 'react';
import style from './LitGuidesDemo.module.css';

const LitGuidesDemo = (props) => {
  return (
    <React.Fragment>
      <h1>Lit Guides Demo</h1>

      <ul>
        { props.guides.map(g => (<li key={g.id}>{g.name}</li>)) }
      </ul>
    </React.Fragment>
  );
}

export default LitGuidesDemo;

