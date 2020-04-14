import styled from 'styled-components';

export const MovieContainerStyled = styled.div`
  margin-top: 20px;
  display: flex;
  background-image: linear-gradient(rgba(0, 0, 0, 0.664), rgba(0, 0, 0, 0.822));

  @media (max-width: 640px) {
    flex-direction: column-reverse;
    
  }
`;

export const MovieImageContainer = styled.div`
  width: 50%;
  img {
    max-width: 100%;
    min-height: 80%;
  }

  @media (max-width: 640px) {
    margin: auto;
    width: auto;
    padding: 15px 0;
  }
`;

export const MovieInfoContainer = styled.div`
  width: 50%;
  padding: 30px;
  color: ${(props) => props.theme.defaultFontColor};

  @media (max-width: 640px) {
    margin: auto;
    width: auto;
    padding: 10px 15px;
    text-align:center;
  }
`;

export const Title = styled.h1`
  color: white;
  text-align: center;
`;

export const Overview = styled.p`
  line-height: ${(props) => props.theme.lineHeight1};
  font-size: ${(props) => props.theme.fontSizeSmaller};
  opacity: 0.8;
  z-index:0;
`;

export const AdditionalDetails = styled.div`
`;

export const ProductionAndGenres = styled.div`
  margin: 20px 0;
`;

export const FancyContent = styled.span`
  color: ${(props) => props.theme.fancyFontColor};
  font-size: ${(props) => props.theme.fancyFontSize};
`;

export const ProductionList = styled.span`
  line-height: ${(props) => props.theme.lineHeight1};
  font-size: ${(props) => props.theme.fontSizeSmaller};

`;

export const ReleaseDetails = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const ReleaseDetailsBox = styled.div`
  font-family: ${(props) => props.theme.fancyFont};
  width: 50%;
  padding: 10px 0;
`;
