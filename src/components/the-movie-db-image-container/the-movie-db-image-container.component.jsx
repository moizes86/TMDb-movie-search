import React from 'react';
import { ReactComponent as TheMovieDBImage } from '../../assets/tmdb.svg';

import './the-movie-db-image-container.styles.scss';

const TheMovieDBImageContainer = () => (
    <div className='the-movie-db-image-container'>
        <TheMovieDBImage className='logo'/>
    </div>
);

export default TheMovieDBImageContainer;