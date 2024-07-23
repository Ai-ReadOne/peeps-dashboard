import { grey } from "@mui/material/colors";
import { THEMES } from "./constants";

const defaultVariant = {
  name: THEMES.LIGHT,
  palette: {
    mode: "light",
    primary: {
      main: grey[100],
      contrastText: grey[500],
    },
    secondary: {
      main: grey[200],
      contrastText: grey[600],
    },
    background: {
      default: grey[50],
      paper: grey[50],
    },
  },
  sidebar: {
    color: grey[300],
    background: grey[200],
    header: {
      color: grey[300],
      background: grey[250],
      brand: {
        color: grey[800],
      },
    },
  },
};

const darkVariant = {
  name: THEMES.DARK,
  palette: {
    mode: "dark",
    primary: {
      main: grey[700],
      contrastText: grey[100],
    },
    secondary: {
      main: grey[700],
      contrastText: grey[100],
    },
    background: {
      default: grey[900],
      paper: grey[800],
    },
    text: {
      primary: "rgba(255, 255, 255, 0.95)",
      secondary: "rgba(255, 255, 255, 0.5)",
    },
  },
  sidebar: {
    color: grey[150],
    background: grey[700],
    header: {
      color: grey[200],
      background: grey[900],
      brand: {
        color: grey[100],
      },
    },
  },
};

const variants = [
  defaultVariant,
  darkVariant,
];

export default variants;
