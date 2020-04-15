import React from 'react';
import GlobalFonts from './assets/fonts/fonts';

import MovieContainer from './components/movie-container/movie-container.component';
import Footer from './components/footer/footer.component';
import { connect } from 'react-redux';
import { onFetchMovieAsync } from './redux/main-page/main-page.actions';
import Header from './components/header/header.component';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import Loader from 'react-loader-spinner';

import { CSSTransition } from 'react-transition-group';
import './transitions.css';

import {
  AppBackgroundImage,
  FixedBackgroundGradient,
  AppPadding,
} from './App.styles';

class App extends React.Component {
  componentDidMount() {
    const { onFetchMovieAsync, data } = this.props;
    onFetchMovieAsync(data.movieID);
  }

  render() {
    const { backdrop_path } = this.props.data;
    const { mounted, isLoading } = this.props;

    const background =
      backdrop_path !== (undefined || '---')
        ? {
            backgroundImage: `url(https://image.tmdb.org/t/p/w500${backdrop_path})`,
          }
        : {
            backgroundColor: 'black',
          };

    return isLoading ? (
      <Loader className='loader' type='TailSpin' color='#00BFFF' />
    ) : (
      <CSSTransition in={mounted} appear={true} timeout={500} classNames='fade'>
        <AppBackgroundImage style={background}>
          <FixedBackgroundGradient>
          <GlobalFonts />
          <AppPadding>
              <Header />
              <MovieContainer />
              <Footer />
              </AppPadding>
          </FixedBackgroundGradient>
        </AppBackgroundImage>
      </CSSTransition>
    );
  }
}

const mapStateToProps = (state) => {
  const { movieID, data, mounted, isLoading } = state.mainPage;
  return { movieID, data, mounted, isLoading };
};

const mapDispatchToProps = (dispatch) => ({
  onFetchMovieAsync: (movieID) => dispatch(onFetchMovieAsync(movieID)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
