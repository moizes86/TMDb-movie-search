import React from 'react';
import './App.scss';
import MovieContainer from './components/movie-container/movie-container.component';
import Footer from './components/footer/footer.component';
import { connect } from 'react-redux';
import { onFetchMovieAsync } from './redux/main-page/main-page.actions';
import Header from './components/header/header.component';

import { CSSTransition } from 'react-transition-group';
import  './transitions.css';

class App extends React.Component {
  componentDidMount() {
    const { onFetchMovieAsync, data } = this.props;
    onFetchMovieAsync(data.movieID);

  }

  render() {
    const { backdrop_path } = this.props.data;
    const { mounted } = this.props;
    const backgroundImage = backdrop_path !=='---'? {
      
      backgroundImage: `url(https://image.tmdb.org/t/p/w500${backdrop_path})`
    }:
    {
      
      backgroundImage: `url(https://www.josco.com.au/wp-content/uploads/2016/05/Image-Unavailable.jpg})`
    }

    return (
      <CSSTransition
      in={mounted}
      appear={true}
      timeout={500}
      classNames= 'fade' 
    >
      <div className='App' style={backgroundImage}>
        <div className='fixed-background-gradient'>
       
            <div className='app-padding'>
              <Header />
              <MovieContainer />
              <Footer />
            </div>
          
        </div>
      </div>
      </CSSTransition>
    );
  }
}

const mapStateToProps = state => {
  const { movieID, data, mounted } = state.mainPage;
  return { movieID, data, mounted };
};

const mapDispatchToProps = dispatch => ({
  onFetchMovieAsync: movieID => dispatch(onFetchMovieAsync(movieID))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
