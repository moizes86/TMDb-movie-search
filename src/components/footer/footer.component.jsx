import React from 'react';

import { FooterContainer, FooterAnchor } from './footer.styles';

const Footer = () => (
  <FooterContainer>
    <FooterAnchor
      href='https://skempin.github.io/reactjs-tmdb-app/'
      target='_blank'
      rel='noopener noreferrer'
    >
      Based On This Project
    </FooterAnchor>

    <FooterAnchor
      href='https://github.com/moizes86/TMDb-movie-search'
      target='_blank'
      rel='noopener noreferrer'
    >
      View Code
    </FooterAnchor>
  </FooterContainer>
);

export default Footer;
