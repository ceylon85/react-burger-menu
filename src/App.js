import React, { useState, useRef } from "react";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./global";
import { theme } from "./theme";
import { Burger, Menu } from "./components";
import { useOnClickOutside } from './hooks';

function App() {
  const [open, setOpen] = useState(false);
  const node = useRef();
  useOnClickOutside(node, () => setOpen(false));

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
        <div ref={node}>
          <Burger open={open} setOpen={setOpen} />
          <Menu open={open} setOpen={setOpen} />
        </div>
      </>
    </ThemeProvider>
  );
}

export default App;
