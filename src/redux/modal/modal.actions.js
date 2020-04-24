import ModalTypes from './modal.types';
// import {getClassname} from './trmodal.utils';

export const onToggleModal = ( customClass_content ) => ({
  type: ModalTypes.ON_TOGGLE_MODAL,
  payload: customClass_content
});
