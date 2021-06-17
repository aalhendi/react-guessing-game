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

//This doesnt work as expected

export const SettingsStyled = styled.div`
  position: "fixed";
  top: "50%";
  left: "50%";
  transform: "translate(-50%, -50%)";
  background-color: "#bebfa3";
`;
export const OverlayStyled = styled.div`
  position: "fixed";
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: "#000000";
  opacity: 0.7;
`;
