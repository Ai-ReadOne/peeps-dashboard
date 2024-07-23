import styled from "styled-components";
import { NavLink } from "react-router-dom";
import {MessageHeader} from "../index"
import { NavItem } from "./containers";
import sidebarItems from "./sidebarItems";



const Container = styled.section`
  position: fixed;
  padding: 0;
  margin: 0;
  padding-top: 6rem;
  bottom: 0;
  left: 0;
  height: 100%;
  min-width: 140px;
  width: 12%;
  background: ${(props) => props.theme.sidebar.background};
  color: #000;
  transition: all 0.2s ease;

  overflow-x: hidden;
  display: flex;
  flex-direction: column;
  align-items: left;
`;

const HomeLink = styled(NavLink)`
  position: fixed;
  top: 1rem;
  margin: 0;
  padding: 0;
  margin-bottom: 15px;
  margin-left: 10px;
  display: flex;
  align-items: center;
  text-decoration: none;
`;

const Profile = styled(NavLink)`
  position: fixed;
  bottom: 2rem;
  display: flex;
  flex-direction: row;
  gap: 10px;
  align-items: left;
  margin: 1rem 10px 0 10px;
  padding: 0;
  text-decoration: none;


  .logo {
    color: #fff;
    background-color: #111;
    padding-left: 4px;
    padding-top: 3px;
    border-radius: 50%;
    width: 25px;
    height: 25px;
    align-items: center;
    justify-content: center;
    align-text:center;
  }
  
  .name{
    color: ${(props) => props.theme.sidebar.color};
  }
`;

const SidebarNavigation = () => {
  return (
    <Container>
      <HomeLink to="/">
        <MessageHeader>Peepalytics</MessageHeader>
      </HomeLink>
      {sidebarItems.map((item, index) => {
        const { title, href, icon } = item;
        return <NavItem key={index} to={href} label={title} icon={icon} />;
      })}
      <Profile to="/profile">
        <span className="logo">JD</span>
        <span className="name">John Doe</span>
      </Profile>
    </Container>
  );
};

export default SidebarNavigation;
