import React from 'react';
import { ReactComponent as TheMovieDBImage } from '../../../assets/tmdb.svg';

import { LogoContainerStyled } from './logo-container.styles';

const LogoContainer = () => {
  // const logoStyles = {
  //   width: '100%',
  //   maxWidth: '140px',
  //   margin: '0 auto',
  //   marginBottom: '25px',
  //   display: 'block',
  //   height: '55px',
  // };
  return (
    <LogoContainerStyled>
      {/**<TheMovieDBImage style={logoStyles} /> */}
      <TheMovieDBImage />
    </LogoContainerStyled>
  );
};
export default LogoContainer;
