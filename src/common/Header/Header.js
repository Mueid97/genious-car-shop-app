import React from 'react';
import logo from '../../images/logo.png'
import { Link } from 'react-router-dom';
import './Header.css'
import { Container, Form, Nav, Navbar } from 'react-bootstrap';
const Header = () => {
    return (
            <Navbar bg="dark" expand="lg">
                <Container >
                    <Link to="/"> <img width='150px' src={logo} alt="" /> </Link>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse className='d-flex justify-content-between'>
                        <Nav>
                            <div className='nav-bar'>
                                <Link to='/home'>Home</Link>
                                <Link to='/services'>Services</Link>
                            </div>

                        </Nav>
                        <Form className="d-flex mr-3 justify-content-between">
                            <input type="text" placeholder='search' className='search' />
                            
                        </Form>
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