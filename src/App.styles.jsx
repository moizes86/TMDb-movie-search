import styled from 'styled-components';

export const OverflowHiddenX = styled.div`
  overflow-x: hidden;
  width: 100vw;
`;

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
  padding: 30px 0;
  width: 70%;
  margin-right: auto;
  margin-left: auto;
  font-family: ${(props) => props.theme.basicFont};
  .x {
    overflow: hidden;
  }
  @media (max-width: 640px) {
    padding: 10px 5px;
    width: 97%;
  }
`;