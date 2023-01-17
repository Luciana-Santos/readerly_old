import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  *, *::before, *::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  }

  html {
    scroll-behavior: smooth;
  }

  img {
    width: 100%;
    display: block;
  }

  h1, h2, h3, h4, h5 {
    line-height: 1;
    font-weight: 400;
  }

  a {
    text-decoration: underline;
    font-style: italic;
    font-weight: 700;
    text-decoration: none;
    transition: .3s ease;
    display: inline-block;
    color: #fff;
  }

  ul {
    list-style: none;
  }

  body {
    min-height: 100vh;
    line-height: 1.5;
    position: relative;
    background: #0D0D0F;
    color: #cecccf;
    font-family: 'Josefin Sans', sans-serif;
    display: grid;
    place-content: center;
  }
`;

export const Container = styled.div`
  width: min(100% - 2rem, 60rem);
  margin-inline: auto;
`;
