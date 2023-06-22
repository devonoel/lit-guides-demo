import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import style from './GuideExpanded.module.css';

const GuideExpanded = (props) => {
  const guide = useLocation().state || props.guide;

  return (
    <React.Fragment>
      <h2 className={style.title}>{guide.name}</h2>
      <h3>by {guide.author}</h3>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque fringilla nunc vel mauris iaculis, in lobortis eros pulvinar. Donec blandit ac ex tristique cursus. Vestibulum et mauris bibendum, efficitur leo quis, suscipit ligula. Ut rhoncus imperdiet hendrerit. Nullam sit amet quam a sem euismod ornare. Nam posuere massa eget elit posuere lobortis. Sed eleifend feugiat arcu sit amet pretium. In hac habitasse platea dictumst. Nullam eu pharetra tellus. Suspendisse ullamcorper sagittis hendrerit. Sed nibh sapien, laoreet sed quam a, cursus vulputate ex. Praesent ut nisl at ipsum luctus luctus.
      </p>
      <Link to='/' className={style.back}>Back</Link>
    </React.Fragment>
  );
}

export default GuideExpanded;
