import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import style from './LitGuidesDemo.module.css';
import GuidesList from './GuidesList.jsx';
import GuideExpanded from './GuideExpanded.jsx';

const LitGuidesDemo = (props) => {
  return (
    <React.Fragment>
      <h1>Lit Guides Demo</h1>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<GuidesList guides={props.guides} />} exact />
          <Route path="/foo" element={<GuideExpanded />} exact />
        </Routes>
      </BrowserRouter>
    </React.Fragment>
  );
}

export default LitGuidesDemo;
