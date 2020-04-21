import styled, {keyframes} from 'styled-components';

const rollIn = keyframes`
from {
    transform: translateY(-50%);
    // opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
`
const slideOut= keyframes`
        from {
          transform: translateY(0);
          opacity: 1;
        }
        to {
          transform: translateY(-100%);
        //   opacity: 0;
        }
`;


export const AboutContainer = styled.div`

  position: absolute;
  top: 40px;
  left: 40px;
  right: 40px;
  bottom: 40px;
  border: 1px solid #ccc;
  background-color: #fff;
  overflow: auto;
  -webkit-overflow-scrolling: touch;
  border-radius: 4px;
  outline: none;
  padding: 20px;

&.content-about--open {
  animation-name: ${rollIn};
  animation-duration: .5s;
}

&.content-about--close {
  animation-name: ${slideOut};
  animation-duration: 0.5s;
}


`;

