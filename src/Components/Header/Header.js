import React from 'react';
import '../../App.css'
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import './Header.css'

const Header = () => {

    return (
        <div>
            <Navbar bg="light" fixed="top" expand="lg" id='nav'>

                <Container>
                    <NavLink to="/home" className='text-decoration-none text-dark'><b className='primary-color fs-3 fst-italic'>Skill</b> Develop</NavLink>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="ms-auto my-2 my-lg-0 custom-nav"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                            <NavLink to="/home">Home</NavLink>
                            <NavLink to="/all-courses">All Courses</NavLink>
                            <NavLink to="/about">About</NavLink>
                            <NavLink to="/contact">Contact Us</NavLink>


                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

        </div>
    );
};

export default Header;