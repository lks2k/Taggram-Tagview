import { createGlobalStyle } from 'styled-components';

export const THEME = {
  colors: {
    primary: '#0095F6',
    lightGrey: '#DBDBDB',
    darkGrey: '#262626',
    red: '#Ff0012'
  },
};


export const GlobalStyle = createGlobalStyle`
  * {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  body {
    font-family: Arial, Helvetica, sans-serif;
  }
`
