import React from "react";
import { Button, Container, ThemeProvider } from "@mui/material";
import theme from "./utils/theme";
import Hero from "./contents/Hero";
const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <Hero />
    </ThemeProvider>
  );
};

export default App;
