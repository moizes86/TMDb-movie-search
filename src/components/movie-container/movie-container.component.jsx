import React from 'react';

import { connect } from 'react-redux';

import './movie-container.styles.scss';

const imageNotAvailable =
  'https://www.josco.com.au/wp-content/uploads/2016/05/Image-Unavailable.jpg';

const MovieContainer = ({
  title,
  tagline,
  poster_path,
  overview,
  genres,
  production_companies,
  release_date,
  runtime,
  revenue,
  vote_average,
}) => {
  return (
    <div className='movie-container'>
      <div className='movie-image'>
        <img
          src={
            poster_path !== '---'
              ? `https://image.tmdb.org/t/p/w500${poster_path}`
              : imageNotAvailable
          }
          alt=''
        />
      </div>
      <div className='movie-info'>
        <h1>{title}</h1>
        <span className='tagline'> {tagline} </span>
        <p>{overview}</p>
        <div className='additional-details'>
          <div className='production-and-genres'>
            <span className='genre-list'> {genres} </span>
            <br />
            <span className='production-list'>{production_companies}</span>
          </div>

          <div className='release-details '>
            <div className='relese-details-box'>
              {' '}
              Original Release: <br />
              <span className='meta-data'> {release_date} </span>
            </div>

            <div className='relese-details-box'>
              Running Time:
              <br />
              <span className='meta-data'> {runtime} mins</span>
            </div>

            <div className='relese-details-box'>
              {' '}
              Box Office: <br /> <span className='meta-data'>{revenue}</span>
            </div>

            <div className='relese-details-box'>
              {' '}
              Vote Average: <br />{' '}
              <span className='meta-data'> {vote_average} / 10</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  const details = state.mainPage.data;
  return details;
};

export default connect(mapStateToProps, null)(MovieContainer);
