import { createTheme, Theme } from "@mui/material";
import typography from "./typography";

const primaryColor = "#8C313A";
const secondaryColor = "#b71c1c";
const textColor = "#333333";

const theme: Theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: primaryColor,
    },
    secondary: {
      main: secondaryColor,
    },
    background: {
      default: "#FFFFFF",
    },
    text: {
      primary: textColor,
      secondary: "rgba(0, 0, 0, 0.6)",
    },
  },
  typography: typography,
});

export default theme;
