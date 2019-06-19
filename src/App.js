import React from 'react';
import Styled, { ThemeProvider } from "styled-components";
import './App.css';

const theme1 = {
  backgroundColor: "red",
  color: "white"
}

const theme2 = {
  backgroundColor: "blue",
  color: "black"
}

const theme3 = {
  backgroundColor: "green"
}

const Button = Styled("div")`
  padding: 10px;
  margin: 10px;
  display: inline-block;

  background-color: ${({ theme: { backgroundColor } }) => backgroundColor};
  color: ${({ theme: { color } }) => color};
`

function App() {
  return (
    <div className="App">
      <div>
      <ThemeProvider theme={theme1}>
        <div>
          <Button>Theme 1</Button>

          <ThemeProvider theme={theme2}>
            <Button>Theme 2</Button>
          </ThemeProvider>

          <ThemeProvider theme={theme3}>
            <Button>Theme 3</Button>
          </ThemeProvider>
        </div>
        </ThemeProvider>
      </div>
    </div>
  );
}

export default App;
