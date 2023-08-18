import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link, useLocation } from 'react-router-dom';

const NavbarComponent = () => {
  const location = useLocation();

  return (
    <Navbar expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand as={Link} to="/" className="navbar-brand">
          My Portfolio
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/" className={`nav-link ${location.pathname === '/' ? 'active' : ''}`}>
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/work" className={`nav-link ${location.pathname === '/work' ? 'active' : ''}`}>
              Work
            </Nav.Link>
            <Nav.Link as={Link} to="/education" className={`nav-link ${location.pathname === '/education' ? 'active' : ''}`}>
              Education
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarComponent;
