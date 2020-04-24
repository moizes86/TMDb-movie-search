import MainPageTypes from './main-page.types';

const INITIAL_STATE = {
  mounted: true,
  isLoading: true,
  data: {movieID: '9012'},
  errorMessage: ''
};

const mainPageReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case MainPageTypes.ON_FETCH_MOVIE_START:
      return {
        ...state,
        isLoading: true
      };

    case MainPageTypes.ON_FETCH_MOVIE_SUCCESS:
      return {
        ...state,
        data: action.payload,
        isLoading: false
      };

      case MainPageTypes.ON_FETCH_MOVIE_FAILURE:
        return {
          ...state,
          errorMessage: action.payload
        }



    default:
      return state;
  }
};

export default mainPageReducer;
