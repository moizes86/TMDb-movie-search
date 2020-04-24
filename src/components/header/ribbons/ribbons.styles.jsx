import styled from 'styled-components';

export const RibbonsContainer = styled.div`
  transform: rotate(45deg);
  position: absolute;
  top: 15px;
  right: -110px;
`;

export const Ribbon = styled.div`
  position: relative;
  margin: 1px auto;
  background-color: #00c851;

  &.ribbonA {
    width: ${(props) => props.theme.ribbonSideLength + 5}px;
  }

  &.ribbonB {
    width: ${(props) => props.theme.ribbonSideLength * 2}px;
    margin-top: 3px;
  }

  &.ribbonC {
    width: ${(props) => props.theme.ribbonSideLength * 3}px;
    margin-top: 3px;
  }

`;

export const Text = styled.span`
  display: block;
  padding: 3px;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);
  color: #fff;
  font: 0.6rem 'Lato', sans-serif;
  text-shadow: 0 1px 1px rgba(0, 0, 0, 0.2);
  text-transform: uppercase;
  text-align: center;
  transition: 0.2s ;

  &:hover{
    cursor:pointer;
    font-size: 0.65rem;
    text-shadow:2px 2px 2px ${props=> props.theme.fancyFontColor}
  }
`;
