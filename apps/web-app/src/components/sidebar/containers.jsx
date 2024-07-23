import React, { createRef } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { Typography } from "@mui/material";

export const NavItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: left;
  margin: 1rem 10px 0 10px;
  padding: 0;
  min-width:13%;

  a {
    display: flex;
    flex-wrap: nowrap;
    align-items: left;
    justify-content: left;
    color: var(--on-primary-accent, #fff);
    text-decoration: none;
    transition: background var(--transition-settings-1, 0.2s ease);
    cursor: pointer;
    width: 100%;

    svg {
      fill: #464c5e;
    }
  }

  section {
    display: flex;
    flex-direction: row;
    gap: 5px;
    align-items: left;
    justify-content: left;
    cursor: pointer;
    p {
      text-align: left;
    }
  }

  a.active {
    background: #96b4e3;
    color: var(--on-primary-accent, #fff);
    border-radius: 5px;

    svg {
      fill: #464c5e;
    }
  }
`;

export function NavItem({ to, label, icon: Icon }) {
  const item = createRef();

  return (
    <NavItemContainer>
      <NavLink to={to} ref={item}>
        <section>
          {Icon && <Icon />}
          <Typography variant="body2" color="text.secondary">
            {label}
          </Typography>
        </section>
      </NavLink>
    </NavItemContainer>
  );
}
