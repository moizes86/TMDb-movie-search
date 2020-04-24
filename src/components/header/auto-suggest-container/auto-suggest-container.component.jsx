import React from 'react';
import Autosuggest from 'react-autosuggest';
import { connect } from 'react-redux';
import { AutoSuggestContainerStyled } from './auto-suggest.styles';
import ClearInputButton from '../../clear-input-button/clear-input-button.component';
import Loader from 'react-loader-spinner';
import { LoaderContainer } from '../../../spinner.styles';

import {
  updateInputValue,
  loadSuggestionsAsync,
  onClearSuggestions,
  onGetSuggestionValue,
} from '../../../redux/auto-suggest/auto-suggest.actions';

import { onFetchMovieAsync } from '../../../redux/main-page/main-page.actions';

const AutoSuggestContainer = ({
  value,
  suggestions,
  onChange,
  onSuggestionsFetchRequested,
  onClearSuggestions,
  onSelected,
  isFetching,
}) => {
  const inputProps = {
    placeholder: 'Search a Movie...',
    value,
    onChange: onChange,
  };

  const renderSuggestion = (suggestion, { query }) => {
    var match = require('autosuggest-highlight/match');
    var parse = require('autosuggest-highlight/parse');
    var matches = match(suggestion.title, query);
    var parts = parse(suggestion.title, matches);

    let markup = [];

    parts.forEach((part, idx) =>
      part.highlight
        ? markup.push(
            <span className='matchedStr' key={idx}>
              {part.text}
            </span>
          )
        : markup.push(<span key={idx}>{part.text}</span>)
    );

    return markup;
  };

  return (
    <AutoSuggestContainerStyled>
      <Autosuggest
        suggestions={suggestions}
        onSuggestionsFetchRequested={onSuggestionsFetchRequested}
        onSuggestionsClearRequested={onClearSuggestions}
        getSuggestionValue={onGetSuggestionValue}
        renderSuggestion={renderSuggestion}
        inputProps={inputProps}
        onSuggestionSelected={onSelected}
      />
      {isFetching ? (
        <LoaderContainer className='spinner-auto_suggest'>
          <Loader type='TailSpin' color='#00BFFF' width={20} height={20} />
        </LoaderContainer>
      ) : null}
      {value ? <ClearInputButton /> : null}
    </AutoSuggestContainerStyled>
  );
};

const mapStateToProps = (state) => {
  const { value, suggestions, isFetching, suggestion } = state.autoSuggest;
  return { value, suggestions, isFetching, suggestion };
};

const mapDispatchToProps = (dispatch) => ({
  onChange: (event, { newValue }) => {
    dispatch(updateInputValue(event, newValue));
  },
  onSuggestionsFetchRequested: ({ value }) => {
    dispatch(loadSuggestionsAsync(value));
  },
  onClearSuggestions: () => dispatch(onClearSuggestions()),
  onGetSuggestionValue: (suggestion) =>
    dispatch(onGetSuggestionValue(suggestion)),
  onSelected: (event, { suggestion }) => {
    dispatch(onFetchMovieAsync(suggestion.id));
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AutoSuggestContainer);
