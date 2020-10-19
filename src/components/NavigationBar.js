import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
const Styles = styled.div`
  .navbar { background-color: #222; }
  a, .navbar-nav, .navbar-light .nav-link {
    color: #9FFFCB;
    &:hover { color: white; }
  }
  .navbar-brand {
    font-size: 1.4em;
    color: #9FFFCB;
    &:hover { color: white; }
  }
`;
export const NavigationBar = () => (
  <Styles>
    <Navbar expand="lg">
      <Navbar.Brand href="/">Bryce Turner</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav"/>
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Item><Link to="/">Home</Link></Nav.Item>
          <Nav.Item><Link to="/bio">Bio</Link></Nav.Item>
{/*<Nav.Item><Nav.Link href="/repos">Repos</Nav.Link></Nav.Item>*/}
          <Nav.Item><Link to="/resume">Resume</Link></Nav.Item>
          </Nav>
      </Navbar.Collapse>
    </Navbar>
  </Styles>
)