import React, {useContext} from "react";

import { THEMES } from "./constants";

const ThemeContext = React.createContext(
  {
    theme: THEMES.DARK,
    setTheme: (theme) => {},
  }
);

const useTheme = () => useContext(ThemeContext);

function ThemeProvider({ children }) {
  const initialState = () => {
    const storedTheme = localStorage.getItem("theme");

    return storedTheme ? JSON.parse(storedTheme) : THEMES.DARK;
  };

  const [theme, changeTheme] = React.useState(initialState());

  const setTheme = (theme) => {
    localStorage.setItem("theme", JSON.stringify(theme));
    changeTheme(theme);
  };

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export { ThemeProvider, ThemeContext, useTheme };
