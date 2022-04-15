import React from 'react';
import logo from '../../images/logo.png'

import './Header.css'
import { Container, Nav, Navbar } from 'react-bootstrap';
const Header = () => {
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
        <Navbar.Brand href="#home"><img height= {30} src={logo} alt="" /></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#services">Services</Nav.Link>
            
          </Nav>
          <Nav>
            <Nav.Link href="#about">About</Nav.Link>
            <Nav.Link href="#login">Login</Nav.Link>
            
          </Nav>
        </Navbar.Collapse>
        </Container>
      </Navbar>
        

         /* <nav className='d-flex align-items-center'>
                <div>
                    <img src={logo} alt="" />
                </div>
                <div className='nav-bar'>
                <Link to='/home'>Home</Link>
                <Link to='/services'>Services</Link>
                </div>
            </nav> */
    );
};

export default Header;