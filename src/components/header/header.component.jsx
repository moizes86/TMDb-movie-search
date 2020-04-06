import React from 'react';
import AutoSuggestContainer from '../auto-suggest-container/auto-suggest-container.component';
import TheMovieDBImageContainer from '../the-movie-db-image-container/the-movie-db-image-container.component';

import './header.styles.scss';

const Header = () => (
  <div className='header'>
      <TheMovieDBImageContainer />
      <AutoSuggestContainer />
  </div>
);

export default Header;
