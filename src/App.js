import React from "react";
import MasterView from "./components/MasterView";
import { ThemeProvider } from "@mui/material";
import theme from "./styles/theme";
function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <MasterView />
      </ThemeProvider>
    </div>
  );
}

export default App;
