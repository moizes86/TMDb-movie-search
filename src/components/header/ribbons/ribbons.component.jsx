import React from 'react';

import { connect } from 'react-redux';
import { onToggleModal } from '../../../redux/modal/modal.actions';

import { RibbonsContainer, Ribbon, Text } from './ribbons.styles';

const Ribbons = ({ onToggleModal }) => {
  return (
    <RibbonsContainer>
      <Ribbon className='ribbonA' onClick={onToggleModal}>
        <Text className='ribbonA'>ABOUT </Text>
      </Ribbon>
      <Ribbon className='ribbonB'>
        <Text className='ribbonB'>
          <a
            href='https://github.com/moizes86/TMDb-movie-search'
            rel='noopener noreferrer'
            target='_blank'
          >
            VIEW CODE
          </a>
        </Text>
      </Ribbon>
      <Ribbon className='ribbonC'>
        <Text className='ribbonC'>
          <a
            href='https://skempin.github.io/reactjs-tmdb-app/'
            rel='noopener noreferrer'
            target='_blank'
          >
            BASED ON THIS
          </a>
        </Text>
      </Ribbon>
    </RibbonsContainer>
  );
};

// const mapStateToProps = state=>{
// }

const mapDispatchToProps = (dispatch) => ({
  onToggleModal: () => dispatch(onToggleModal('content-about')),
});

export default connect(null, mapDispatchToProps)(Ribbons);

