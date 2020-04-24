import React from 'react';

import { connect } from 'react-redux';
import { onToggleModal } from '../../redux/modal/modal.actions';

import Modal from 'react-modal';

import './my-modal.styles.css';
import About from '../about/about.component';

Modal.setAppElement('#root');
Modal.defaultStyles.overlay.backgroundColor = 'none';

const MyModal = ({ isOpen, contentClass, overlayClass, onToggleModal }) => {
  return (
    <Modal
      overlayClassName={overlayClass}
      className={contentClass}
      isOpen={isOpen}
      contentLabel={'About'}
      onRequestClose={onToggleModal}
      closeTimeoutMS={500}
    >
      {
        {
          'content-about content-about--open': <About classname={contentClass}/>,
          'content-about content-about--close' : <About classname={contentClass}/>,
        }[contentClass]
      }
    </Modal>
  );
};

const matpStateToProps = (state) => {
  const { isOpen, contentClass, overlayClass } = state.modal;
  return { isOpen, contentClass, overlayClass };
};

const mapDispatchToProps = (dispatch) => ({
  onToggleModal: () => dispatch(onToggleModal()),
});

export default connect(matpStateToProps, mapDispatchToProps)(MyModal);

// {(() => {
//   switch(contentClass) {
//     case contentClass.includes('content-about'):
//         return <About/>;
//       default: contentClass= null;
//   }
// })}
