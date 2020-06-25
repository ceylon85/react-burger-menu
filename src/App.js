import React from "react";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./gloabal";
import { theme } from "./theme";
import { Burger, Menu } from './components';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <div>
        <Burger/>
        <Menu/>
      </div>
      <div>
        <h1> Hello, This is Burger-menu tutorial!</h1>
        <img
          src="https://image.flaticon.com/icons/svg/2016/2016012.svg"
          alt="burger icon"
        />
        <small>Icon made by Freepik from www.flaticon.com</small>
      </div>
    </ThemeProvider>
  );
}

export default App;
