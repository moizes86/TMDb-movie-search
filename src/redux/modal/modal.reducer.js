import ModalTypes from './modal.types';

const INITIAL_STATE = {
  isOpen: false,
  overlayClass: 'overlay-default',
  contentClass: null,
};

const modalReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ModalTypes.ON_TOGGLE_MODAL:
      return {
        ...state,
        contentClass: !state.isOpen
          ? `${action.payload} ${action.payload}--open`
          : `${state.contentClass}`.replace(`${state.contentClass}`.substr(`${state.contentClass}`.indexOf('--')+2), 'close'),
        isOpen: !state.isOpen,
      };

    default:
      return state;
  }
};

export default modalReducer;
