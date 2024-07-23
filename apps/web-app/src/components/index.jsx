import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { NotificationAdd } from "@mui/icons-material";
import { Badge, Grid, Typography } from "@mui/material";


const NotificationLink = styled(NavLink)`
    position: fixed;
    top: 20px;
    right: 19%;
    align-items: center;
    text-decoration: none;

    svg {
        width: 24px;
        height: 24px;
        opacity: 0.8;
        fill: #656370;
    }
`;

export const NotificationButton = () => {
    return(
        <NotificationLink>
            <NotificationAdd />
        </NotificationLink>
    )
}

export const MessageHeader = styled.h1`
`;

export const CardHeaderWithValue = ({headerTitle="Default Title", headerValue="75%"}) => {
    return (
        <Grid container spacing={2}>
          <Grid item xs={11}>
            <Typography variant="h5" component="div">
              {headerTitle}
            </Typography>
          </Grid>
          <Grid item xs={1}>
          <Typography variant="h5" component="div">
            {headerValue}
          </Typography>
          </Grid>
        </Grid>
    )
}

export const CardValueWithBadge = ({value="Default value", badgeIndicator="High"}) => {
    let badgeColor = "error";
    if (badgeIndicator === "Medium") {
        badgeColor = "warning";
    } else if (badgeIndicator === "Low") {
        badgeColor = "success";
    }

    return (
        <Grid container spacing={2}>
          <Grid item xs={11}>
            <Typography variant="body2" color="text.secondary">
                {value}
            </Typography>
          </Grid>
          <Grid item xs={1}>
            <Badge badgeContent={badgeIndicator} color={badgeColor} />
          </Grid>
        </Grid>
    )
}