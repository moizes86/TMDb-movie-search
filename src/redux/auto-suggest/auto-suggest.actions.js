import AutoSuggestTypes from './auto-suggest.types';
import { getValue, renderSuggestion } from './auto-suggest.utils';
import API_KEY from '../../api_key';

export const updateInputValue = (event, value ) => {
  if (value.length !== undefined) {
    return {
      type: AutoSuggestTypes.UPDATE_INPUT_VALUE,
      payload: value,
    };
  } else {
    return value;
  }
};

export const loadSuggestionsAsync = (value) => {
  return (dispatch) => {
    let url = `https://api.themoviedb.org/3/search/movie?&api_key=${API_KEY}&query=${value}`;
    if (value.length > 2) {
      dispatch(loadSuggestionsStart());

      fetch(url).then((res) =>
        res
          .json()
          .then((res) => dispatch(loadSuggestionsFetch(res.results, value)))
          .catch((error) => dispatch(loadSuggestionsFailure(error.message)))
      );
    }
  };
};

export const loadSuggestionsStart = () => ({
  type: AutoSuggestTypes.LOAD_SUGGESTIONS_START,
});

export const loadSuggestionsFetch = (suggestions, value) => ({
  type: AutoSuggestTypes.LOAD_SUGGESTIONS_FETCH,
  suggestions,
  value,
});

export const loadSuggestionsFailure = (error) => ({
  type: AutoSuggestTypes.LOAD_SUGGESTIONS_FAILURE,
  payload: error,
});

export const onClearSuggestions = () => ({
  type: AutoSuggestTypes.ON_CLEAR_SUGGESTIONS,
  payload: [],
});

export const onGetSuggestionValue = (suggestion) => ({
  type: AutoSuggestTypes.ON_GET_SUGGESTION_VALUE,
  payload: getValue(suggestion),
});

export const onRenderSuggestion = (suggestion) => ({
  type: AutoSuggestTypes.ON_RENDER_SUGGESTION,
  payload: renderSuggestion(suggestion),
});

export const onClearInput = () => ({
  type: AutoSuggestTypes.ON_CLEAR_INPUT,
  payload: ''
});
