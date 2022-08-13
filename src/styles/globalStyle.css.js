import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  :root{
    --white: #fff;
    --black: #000;
    --blue: #58C1FC;
    --gray: #616161;
    --whitesmoke: #F2F2F2;
  }
  html {
    box-sizing: border-box;
  }
  *, *:before, *:after {
    box-sizing: inherit;
  }
  h1, h2, h3, h4{
    font-weight: 700;
    margin: 0;
  }
  h1 {
    font-size: 48px
  }
  h2 {
    font-size: 36px
  }
  h3 {
    font-size: 30px
  }
  h4 {
    font-size: 24px
  }
  body {
    display: flex;
    justify-content: center;
    margin: 0;
    padding: 0;
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
    Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-size: 16px;
    color: var(--black);
  }`;
