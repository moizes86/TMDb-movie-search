import AutoSuggestTypes from './auto-suggest.types';

const INITIAL_STATE = {
  value: '',
  suggestions: [],
  isFetching: false,
  suggestion: null,
  errorMessage: null
};
const autoSuggestReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case AutoSuggestTypes.CLEAR_SUGGESTIONS:
      return {
        ...state,
        suggestions: []
      };

    case AutoSuggestTypes.UPDATE_INPUT_VALUE:
      return {
        ...state,
        value: action.payload
      };

    case AutoSuggestTypes.ON_CLEAR_SUGGESTIONS:
      return {
        ...state,
        suggestions: action.payload
      };

    case AutoSuggestTypes.LOAD_SUGGESTIONS_START:
      return {
        ...state,
        isFetching: true
      };

    case AutoSuggestTypes.LOAD_SUGGESTIONS_FETCH:
      return {
        ...state,
        suggestions: action.suggestions,
        isFetching: false
      };

    case AutoSuggestTypes.ON_GET_SUGGESTION_VALUE:
      return {
        ...state,
        value: action.payload
      };

    case AutoSuggestTypes.ON_RENDER_SUGGESTION:
      return {
        ...state
      };

     case AutoSuggestTypes.ON_CLEAR_INPUT:
       return {
         ...state,
         value: action.payload
       };
       
    default:
      return state;
  }
};

export default autoSuggestReducer;
