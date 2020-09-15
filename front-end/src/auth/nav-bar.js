import React from "react";
import { NavLink as RouterNavLink } from "react-router-dom";
import { Container, Nav, Navbar } from "react-bootstrap";
import {useAuth0} from "@auth0/auth0-react";
import LogoutButton from "./logout-button"
import LoginButton from "./login-button"

import "./nav-bar.css";

const MainNav = () => (
<div className="top">

  <form className="navbar">

    <Nav.Link
      as={RouterNavLink}
      to="/"
      exact
      activeClassName="router-link-exact-active"
    className="home"
    >
      Home
    </Nav.Link>

    <Nav.Link
      as={RouterNavLink}
      to="/profile"
      exact
      activeClassName="router-link-exact-active"
      className="profile"
    >
      Profile
    </Nav.Link>

    {/* <Nav.Link
      as={RouterNavLink}
      to="/external-api"
      exact
      activeClassName="router-link-exact-active"
    >
      External API
    </Nav.Link> */}

    <Nav.Link
      as={RouterNavLink}
      to="/welcomepage"
      exact
      activeClassName="router-link-exact-active"
      className="welcome"
    >
      Welcome Page
    </Nav.Link>
    
  </form>

  </div>
);

const AuthNav = () => {
    const { isAuthenticated } = useAuth0();
  
    return (
      <div>
        {isAuthenticated ? <LogoutButton /> : <LoginButton />}
      </div>
    );
  };

const NavBar = () => {
  return (
    <div className="topbar">
      <Container className="loginout">
        {/* <Navbar.Brand as={RouterNavLink} className="logo" to="/" /> */}
        <MainNav />

        <AuthNav  />

      </Container>
    </div>
  );
};

export default NavBar;
