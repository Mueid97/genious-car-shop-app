import React from 'react';
import logo from '../../images/logo.png'
import { Link } from 'react-router-dom';
import './Header.css'
import { Container, Nav, Navbar } from 'react-bootstrap';
const Header = () => {
    return (
        <Navbar collapseOnSelect expand="lg" sticky='top' bg="dark" variant="dark">
        <Container>
        <Navbar.Brand as={Link} to="/"><img height= {30} src={logo} alt="" /></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="home#services">Services</Nav.Link>
            <Nav.Link as={Link} to="home#experts">Exparts</Nav.Link>
            
          </Nav>
          <Nav>
            <Nav.Link as={Link} to="/about">About</Nav.Link>
            <Nav.Link as={Link} to="/login">Login</Nav.Link>
            
          </Nav>
        </Navbar.Collapse>
        </Container>
      </Navbar>

    );
};

export default Header;