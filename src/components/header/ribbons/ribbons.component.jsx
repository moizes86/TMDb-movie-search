import React from 'react';
import {
  RibbonsContainer,
  Ribbon,
  Text,
} from './ribbons.styles.jsx';

const Ribbons = () => (
    <RibbonsContainer>
      <Ribbon className='ribbonA'>
        <Text className='ribbonA'>A</Text>
      </Ribbon>
      <Ribbon className='ribbonB'>
        <Text className='ribbonB'>B</Text>
      </Ribbon>
      <Ribbon className='ribbonC'>
        <Text className='ribbonC'>C</Text>
      </Ribbon>
    </RibbonsContainer>
);

export default Ribbons;

// <Text> HOW </Text>
