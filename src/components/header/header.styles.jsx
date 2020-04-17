import styled from 'styled-components';

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  overflow: hidden;
  /* position: relative; */
  @media (max-width: 640px){
    flex-direction: column;
  }
`;
