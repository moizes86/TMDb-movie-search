import React from 'react';

import { AboutContainer } from './about.styles';

const About = ({ classname }) => (
  <AboutContainer className={classname}>
    <h1>This Project Was Created Because:</h1>
    <ol>
      <li>I took an online React course and wanted to get my hands on.</li>
      <li>
        Saw
        <a
          href='https://skempin.github.io/reactjs-tmdb-app/'
          target='_blank'
          rel='noopener noreferrer'
        >
          {` `}this{` `}
        </a>
        project and wanted to create the same one on my own.
      </li>
      <li>
        {' '}
        Unlike the original, I used Redux (for hands-on purposes) and react
        auto-suggest.{' '}
      </li>
    </ol>
  </AboutContainer>
);

export default About;
