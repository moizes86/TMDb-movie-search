import styled, { keyframes } from 'styled-components';

const rollIn = keyframes`
from {
    transform: translateY(-50%);
    // opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
`;
const slideOut = keyframes`
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
  color: #616161;
  font-family: 'Roboto Thin';
  position: absolute;
  top: 15%;
  left: 25%;
  right: 25%;
  bottom: 15%;
  border: 1px solid #ccc;
  background-color: #fff;
  overflow: auto;
  -webkit-overflow-scrolling: touch;
  border-radius: 4px;
  outline: none;
  padding: 20px;

  @media (max-width: 640px) {
    padding: 10px;
    top: 15%;
  left: 5%;
  right: 5%;
  bottom: 15%;
  }

  &.content-about--open {
    animation-name: ${rollIn};
    animation-duration: 0.5s;
  }

  &.content-about--close {
    animation-name: ${slideOut};
    animation-duration: 0.5s;
  }
`;

export const Header = styled.div`
  position: relative;
  color: white;
  margin: -20px;
  background-color: #00c851;
  text-align: center;
  padding: 15px 20px;
  font-size: 1.5rem;

  @media (max-width: 640px) {
    padding-top: 20px;
    font-size: 1.2rem;
  }
`;

export const Close = styled.div`
  float: right;
  font-weight: 800;
  transition: 0.5s;

  &:hover {
    cursor: pointer;
    transform: rotate(180deg);
    text-shadow: -2px -2px 2px rgba(0, 0, 0, 0.452);
  }
`;

export const Title = styled.p`
  margin-top: 50px;
  font-size: 1.5rem;
  text-align: center;

  @media (max-width: 640px) {
    font-size: 1rem;
  }
`;

export const OL = styled.ol`
  padding-left: 20px;
  font-size: 0.9rem;
  &>li{
    padding: 10px 0;

    &>a {
    color: blue;
    font-weight: bold;
  }
  }


`;