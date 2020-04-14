import MainPageTypes from './main-page.types';
import { formatData } from './main-page.utils';

import API_KEY from '../../api_key';



export const onFetchMovieAsync = (movieID) => {
  return dispatch => {
    const url = `https://api.themoviedb.org/3/movie/${movieID}?&api_key=${API_KEY}`;
    dispatch(onFetchMovieStart());

    fetch(url).then(res =>
      res.json().then(res => dispatch(onFetchMovieSuccess(res)))
    );
  };
};

export const onFetchMovieStart = () => ({
  type: MainPageTypes.ON_FETCH_MOVIE_START
});

export const onFetchMovieSuccess = data => ({
  type: MainPageTypes.ON_FETCH_MOVIE_SUCCESS,
  payload: formatData(data)
});

export const onFetchMovieFailure = res => ({
  type: MainPageTypes.ON_FETCH_MOVIE_FAILURE,
  payload: res.status_message
});

