import styled from 'styled-components';

export const AppBackgroundImage = styled.div`
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  background-attachment: fixed;
`;

export const FixedBackgroundGradient = styled.div`
  min-height: 100vh;
  background-image: linear-gradient(
    rgba(0, 0, 0, 0.767) 15%,
    rgba(0, 0, 0, 0.144) 40%,
    #000 90%
  );
  margin: 0;
  background-attachment: fixed;
`;

export const AppPadding = styled.div`
  padding: 30px 150px;
  font-family: ${(props) => props.theme.basicFont};

  @media (max-width: 640px) {
    padding: 10px 5px;
  }
`;
