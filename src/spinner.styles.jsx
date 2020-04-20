import styled from 'styled-components';

export const LoaderContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;

  &.spinner-app {
    height: 100vh;
  }

  &.spinner-auto_suggest {
    @media (max-width: 640px) {
      margin-top: 10px;
    }
  }
`;
