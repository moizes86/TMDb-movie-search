import React from 'react';

import { connect } from 'react-redux';

import {
  MovieContainerStyled,
  MovieImageContainer,
  MovieInfoContainer,
  Title,
  Overview,
  AdditionalDetails,
  ProductionAndGenres,
  ProductionList,
  ReleaseDetails,
  ReleaseDetailsBox,
  FancyContent
} from './movie-container.styles';

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
    <MovieContainerStyled>
      <MovieImageContainer>
        {poster_path ? (
          <img src={`https://image.tmdb.org/t/p/w500${poster_path}`} alt='' />
        ) : null}
      </MovieImageContainer>

      <MovieInfoContainer>
        <Title>{title}</Title>
        <FancyContent> {tagline} </FancyContent>
        <Overview>{overview}</Overview>

        <AdditionalDetails>
          <ProductionAndGenres>
            <FancyContent> {genres} </FancyContent>
            <br />
            <ProductionList>{production_companies}</ProductionList>
          </ProductionAndGenres>

          <ReleaseDetails>
            <ReleaseDetailsBox>
              Original Release: <br />
              <FancyContent> {release_date} </FancyContent>
            </ReleaseDetailsBox>

            <ReleaseDetailsBox>
              Running Time:
              <br />
              <FancyContent> {runtime} mins</FancyContent>
            </ReleaseDetailsBox>

            <ReleaseDetailsBox>
              Box Office: <br /> <FancyContent>{revenue}</FancyContent>
            </ReleaseDetailsBox>

            <ReleaseDetailsBox>
              Vote Average: <br />
              <FancyContent> {vote_average} / 10</FancyContent>
            </ReleaseDetailsBox>
          </ReleaseDetails>
        </AdditionalDetails>
      </MovieInfoContainer>
    </MovieContainerStyled>
  );
};

const mapStateToProps = (state) => {
  const details = state.mainPage.data;
  return details;
};

export default connect(mapStateToProps, null)(MovieContainer);
