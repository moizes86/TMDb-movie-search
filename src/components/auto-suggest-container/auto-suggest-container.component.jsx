import React from 'react';
import Autosuggest from 'react-autosuggest';
import { connect } from 'react-redux';

import {
  updateInputValue,
  loadSuggestionsAsync,
  onClearSuggestions,
  onGetSuggestionValue,
} from '../../redux/auto-suggest/auto-suggest.actions';

import { onFetchMovieAsync } from '../../redux/main-page/main-page.actions';

import './auto-suggest-container.styles.scss';

const AutoSuggestContainer = ({
  value,
  suggestions,
  onChange,
  onSuggestionsFetchRequested,
  onClearSuggestions,
  onSelected,
  isLoading,
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

     let markup= []

      parts.forEach((part, idx)=> part.highlight? markup.push(<span className='matchedStr' key={idx}>{part.text}</span>) : markup.push(<span key={idx}>{part.text}</span>))

     return markup;
  };

  return (
    <div className='auto-suggest-container'>
      <Autosuggest
        suggestions={suggestions}
        onSuggestionsFetchRequested={onSuggestionsFetchRequested}
        onSuggestionsClearRequested={onClearSuggestions}
        getSuggestionValue={onGetSuggestionValue}
        renderSuggestion={renderSuggestion}
        inputProps={inputProps}
        onSuggestionSelected={onSelected}
      />
    </div>
  );
};

const mapStateToProps = (state) => {
  const { value, suggestions, isLoading, suggestion } = state.autoSuggest;
  return { value, suggestions, isLoading, suggestion };
};

const mapDispatchToProps = (dispatch) => ({
  onChange: (event, { newValue }) => dispatch(updateInputValue(newValue)),
  onSuggestionsFetchRequested: ({ value }) => {
    dispatch(loadSuggestionsAsync(value));
  },
  onClearSuggestions: () => dispatch(onClearSuggestions()),
  onGetSuggestionValue: (suggestion) =>
    dispatch(onGetSuggestionValue(suggestion)),
  onSelected: (event, { suggestion, method }) => {
    event.preventDefault();
    dispatch(onFetchMovieAsync(suggestion.id, method));
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AutoSuggestContainer);
