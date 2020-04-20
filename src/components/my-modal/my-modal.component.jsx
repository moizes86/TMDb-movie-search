import React from 'react';

import { connect } from 'react-redux';
import { onToggleModal } from '../../redux/modal/modal.actions';

import Modal from 'react-modal';

import './my-modal.transitions.css';

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
      closeTimeoutMS={300}
    >
      <h1>I AM A MODAL </h1>
    </Modal>
  );
};

const matpStateToProps = (state) => {
  const { isOpen, contentClass, overlayClass,  } = state.modal;
  return { isOpen, contentClass, overlayClass, };
};

const mapDispatchToProps = (dispatch) => ({
  onToggleModal: () => dispatch(onToggleModal()),
});

export default connect(matpStateToProps, mapDispatchToProps)(MyModal);
