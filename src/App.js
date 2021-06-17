import "./App.css";
import { GlobalStyle } from "./styles";
import { ThemeButton } from "./styles";
import { useState } from "react";
import { ThemeProvider } from "styled-components"; //Theme context imported never used

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
      <GlobalStyle />
      <ThemeButton size="3em" onClick={toggleTheme} />
      <Home />
      <Game />
    </ThemeProvider>
  );
}

export default App;
