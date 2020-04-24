import React from 'react';

import {connect} from 'react-redux';
import { onToggleModal } from '../../redux/modal/modal.actions';

import { AboutContainer, Header, Title, Close, OL } from './about.styles';

const About = ({ classname, onToggleModal }) => (
  <AboutContainer className={classname}>
    <Header>
    About This Project
      <Close onClick={onToggleModal}>X</Close>
    </Header>
    <Title>Motivation:</Title>
    <OL>
      <li>Took an online React course and wanted to get my hands on.</li>
      <li>
        Saw
        <a
          href='https://skempin.github.io/reactjs-tmdb-app/'
          target='_blank'
          rel='noopener noreferrer'
        >
          {` `}this{` `}
        </a>
        project and wanted to imitate it.
      </li>
      <li>
        {' '}
        Unlike the original, I used Redux (for hands-on purposes) and react
        auto-suggest.{' '}
      </li>
    </OL>
  </AboutContainer>
);

const dispatchToProps = dispatch =>({
  onToggleModal: ()=> dispatch(onToggleModal())
})

export default connect(null, dispatchToProps)(About);
