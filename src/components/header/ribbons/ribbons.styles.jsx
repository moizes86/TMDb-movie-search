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

  &.ribbonA {
    width: ${(props) => props.theme.ribbonSideLength}px;
  }

  &.ribbonB {
    width: ${(props) => props.theme.ribbonSideLength * 2}px;
  }

  &.ribbonC {
    width: ${(props) => props.theme.ribbonSideLength * 3}px;
  }
`;

export const Text = styled.span`
  display: block;
  padding: 3px;
  background-color: #3498db;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);
  color: #fff;
  font: 0.6rem 'Lato', sans-serif;
  text-shadow: 0 1px 1px rgba(0, 0, 0, 0.2);
  text-transform: uppercase;
  text-align: center;
overflow:hidden;

`;
