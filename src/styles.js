import styled, { createGlobalStyle } from "styled-components";
import { Settings2Outline } from "@styled-icons/evaicons-outline/Settings2Outline";
import { DarkTheme } from "@styled-icons/fluentui-system-filled/DarkTheme";

export const GlobalStyle = createGlobalStyle`
  h1 {
    text-align: center;
    color: ${(props) => props.theme.altColor};
  }

  div {
    text-align: center;
  }

  button {
    margin: auto;
    display: block;
    margin: 1rem auto;
    border-radius: 40px;
    border: 2px solid ${(props) => props.theme.mainColor};
    background-color: ${(props) => props.theme.mainColor};
    color: #ffffff;
  }

  body {
    color: ${(props) => props.theme.mainColor};
    background-color: ${(props) => props.theme.backgroundColor}
  }
`;

export const GuessBox = styled.input`
  text-align: center;
  display: block;
  margin: 0 auto;
  border-radius: 40px;
  border: 2px solid ${(props) => props.theme.mainColor};
`;

export const ThemeButton = styled(DarkTheme)`
  position: fixed; /* or absolute; */
  top: 1%;
  left: 1%;
`;

export const SettingsIcon = styled(Settings2Outline)`
  position: fixed; /* or absolute; */
  top: 1%;
  right: 1%;
`;

//This doesnt work as expected
export const SettingsStyled = styled.div`
  position: "fixed";
  top: "50%";
  left: "50%";
  transform: "translate(-50%, -50%)";
  background-color: #bebfa3;
`;
export const OverlayStyled = styled.div`
  position: "fixed";
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: #000000;
  opacity: 0.7;
`;
