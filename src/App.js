import React, { useState } from "react";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./global";
import { theme } from "./theme";
import { Burger, Menu } from "./components";

function App() {
  //false일 때 메뉴가 숨겨진다.
  const [open, setOpen] = useState(false);
  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyles />
        <div>
          <h1>Hello. This is burger menu tutorial</h1>
          <img
            src="https://image.flaticon.com/icons/svg/2016/2016012.svg"
            alt="burger icon"
          />
          <small>
            Icon made by <a href="https://www.freepik.com/home">Freepik</a> from{" "}
            <a href="https://www.flaticon.com">www.flaticon.com</a>
          </small>
        </div>
        <div>
          <Burger open={open} setOpen={setOpen} />
          <Menu open={open} setOpen={setOpen} />
        </div>
      </>
    </ThemeProvider>
  );
}

export default App;
