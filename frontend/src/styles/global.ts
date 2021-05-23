import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0 ;
    box-sizing: border-box;
  }

  html, body{
    min-height: 100vh;
  }

  body{
    background-color: #000
    color: #fff;
    -webkit-font-smoothing: antialiased;

    display: flex;
    flex-direction: column;
  }

  body, input, button {
    font-size: 16px;
  }

  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 500;
  }

  button {
    cursor: pointer;
  }
`;
