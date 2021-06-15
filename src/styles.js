import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  h1 {
    text-align: center;
    color: ${(props) => props.theme.altColor};
  }

  body {
    color: ${(props) => props.theme.mainColor};
    background-color: ${(props) => props.theme.backgroundColor}
  }
`;
