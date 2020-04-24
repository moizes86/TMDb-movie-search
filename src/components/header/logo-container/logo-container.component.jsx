import React from 'react';
import { ReactComponent as TheMovieDBImage } from '../../../assets/tmdb.svg';

import { LogoContainerStyled } from './logo-container.styles';

const LogoContainer = () => {
  return (
    <LogoContainerStyled>
      <a
        href='https://www.themoviedb.org/'
        target='_blank'
        rel='noopener noreferrer'
      >
        <TheMovieDBImage />
      </a>
    </LogoContainerStyled>
  );
};
export default LogoContainer;
