import styled from 'styled-components';

export const AutoSuggestContainerStyled = styled.div`
  padding: 15px 15px 0 0;
  width: 53%;
  display: flex;
  font-family: ${(props) => props.theme.basicFont};

  @media (max-width: 640px) {
    width: 90%;
  }

  .react-autosuggest__container {
    position: relative;
    padding: 0;
    margin: 0;
    padding: 0 15px;
    width: 100%;
  }

  /* /*  .react-autosuggest__container--open { */
  /* } */

  .react-autosuggest__input {
    width: 100%;
    background-color: transparent;
    border: none;
    border-bottom: ${(props) => props.theme.autosuggestBorderBottom};
    padding: 8px 5px 5px 18px;
    font-size: 1.2rem;
    color: whitesmoke;
    transition: 0.5s;
    font-family: ${(props) => props.theme.basicFont};

    @media (max-width: 640px) {
      font-size: 1.1rem;
    }
  }

  .react-autosuggest__input::placeholder {
    color: whitesmoke;
    transition: 0.15s ease-in-out;
  }
  /* .react-autosuggest__input--open { */
  /* } */

  .react-autosuggest__input--focused {
    outline: none;
  }

  .react-autosuggest__input--focused::placeholder {
    font-size: 10px;
    opacity: 0;
  }

  .react-autosuggest__suggestions-container {
    background-color: rgba(245, 245, 245, 0.95);
    position: absolute;
    color: black;
    width: 95%;
<<<<<<< HEAD
    margin-left: 10px;
=======
    margin-left:10px;
>>>>>>> e62714c127ed329f01a0ebbf509935779c8951a3
    opacity: 0;
    transition: 0.6s ease-in-out;

    @media (max-width: 640px) {
<<<<<<< HEAD
      margin-left: 0;
      width: 100%;
=======
      margin-left:0;
      width:100%;
>>>>>>> e62714c127ed329f01a0ebbf509935779c8951a3
    }
  }

  .react-autosuggest__suggestions-container--open {
    margin-top: 10px;
    box-shadow: 2px 6px 13px 10px rgba(0, 0, 0, 0.5);
    opacity: 1;
    transition: 0.1s;
  }

  .react-autosuggest__suggestions-list {
    list-style: none;
    padding-left: 0;
  }
  .react-autosuggest__suggestion {
    padding: 5px 0px 5px 15px;
    font-weight: normal;
    transition: 0.2s;
  }

  .react-autosuggest__suggestion--first {
  }
  .matchedStr {
    color: rgba(0, 0, 0, 0.6);
    text-shadow: 3px 2px 3px rgba(255, 255, 255, 0.2);
  }

  .react-autosuggest__suggestion--highlighted {
    background-color: ${(props) => props.theme.fancyFontColor};
    opacity: 0, 8;
    font-weight: bolder;
    transition: 0.2s;
    cursor: pointer;
  }
  /* .react-autosuggest__section-container { */
  /* } */
  /* .react-autosuggest__section-container--first { */
  /* } */
  /* .react-autosuggest__section-titl { */
  /* } */
`;
