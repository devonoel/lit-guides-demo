import React from 'react';
import { Route, Routes } from 'react-router-dom';
import GuidesList from './components/GuidesList.jsx';
import GuideExpanded from './components/GuideExpanded.jsx';

export default (
  <Routes>
    <Route path="/" element={<GuidesList />} exact />
    <Route path="/foo" element={<GuideExpanded />} exact />
  </Routes>
);