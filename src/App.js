import "./App.css";
import { GlobalStyle } from "./styles";
import { useState } from "react";
import { ThemeContext, ThemeProvider } from "styled-components";

import Home from "./components/Home";
import Game from "./components/Game";

const theme = {
  light: {
    mainColor: "#3F4031",
    backgroundColor: "#bebfa3",
    altColor: "#8C281F",
  },
  dark: {
    mainColor: "#A9C6D9",
    backgroundColor: "#01070D",
    altColor: "#b9d832",
  },
};

function App() {
  const [currentTheme, setCurrentTheme] = useState("light");

  const toggleTheme = () => {
    setCurrentTheme(currentTheme === "light" ? "dark" : "light");
  };

  return (
    <ThemeProvider theme={theme[currentTheme]}>
      <GlobalStyle></GlobalStyle>
      <Home />
      <Game />
    </ThemeProvider>
  );
}

export default App;
