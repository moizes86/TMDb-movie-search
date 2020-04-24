import React from 'react';
import { connect } from 'react-redux';
import { onClearInput } from '../../redux/auto-suggest/auto-suggest.actions';
import { ClearInputButtonStyled } from './clear-input-button.styles';

const ClearInputButton = ({ clearInput }) => (
  <ClearInputButtonStyled onClick={clearInput}>X</ClearInputButtonStyled>
);

const mapDispatchToProps = (dispatch) => ({
  clearInput: () => {
    dispatch(onClearInput());
  },
});
export default connect(null, mapDispatchToProps)(ClearInputButton);
