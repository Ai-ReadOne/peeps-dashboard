import { CssBaseline, Grid } from "@mui/material";
import { Outlet } from "react-router-dom";
import styled from "styled-components";

import {NotificationButton} from "../components";
import GlobalStyle from "../components/GlobalStyle";
import SidebarNavigation from "../components/sidebar";

const Root = styled.div`
  display: flex;
  min-height: 100vh;
`;

const AppContent = styled.div`
  position: relative;
  flex: 1;
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: left;
  justify-content: center;
  padding: 0;
  margin: 0;
  margin-top: 2rem;
  left: 0;
`;

const Dashboard = ({ children }) => {

  return (
    <Root>
      <CssBaseline />
      <GlobalStyle />

      <Grid container spacing={2}>
        <Grid item xs={2} md={1}>
          <SidebarNavigation />
        </Grid>
      
        <Grid item xs={10} md={11} lg={10} >
          <AppContent>
              <NotificationButton />
              {children}
              <Outlet />
          </AppContent>
        </Grid>
      </Grid>
    </Root>
  );
};

export default Dashboard;
