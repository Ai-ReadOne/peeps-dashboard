import { ThemeProvider as MuiThemeProvider } from "@mui/material/styles";
import { ThemeProvider} from "styled-components"
import { useRoutes } from "react-router-dom";


import createTheme from "./theme";
import {useTheme} from "./theme/context";
import Dashboard from "./layouts/dashboard";
import routes from "./routes"

function App() {
  const pages = useRoutes(routes)
  const { theme } = useTheme();

  return (
    <MuiThemeProvider theme={createTheme(theme)}>
      <ThemeProvider theme={createTheme(theme)}>
        <Dashboard>
          {pages}
        </Dashboard>
      </ThemeProvider>
    </MuiThemeProvider> 
  );
}

export default App;
