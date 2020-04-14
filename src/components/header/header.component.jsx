import React from 'react';
import AutoSuggestContainer from './auto-suggest-container/auto-suggest-container.component';
import LogoContainer from './logo-container/logo-container.component';

import { HeaderContainer } from './header.styles';

const Header = () => (
  <HeaderContainer>
      <LogoContainer />
      <AutoSuggestContainer />
  </HeaderContainer>
);

export default Header;
