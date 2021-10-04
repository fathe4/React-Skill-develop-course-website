import React from 'react';
import { Button, Col, FormControl, InputGroup, Row } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import './Footer.css'

const Footer = () => {
    return (
        <div className='footer bg-light'>
            <div className='container'>
                <Row xs={1} md={4} className="g-4">
                    <Col>
                        <NavLink to="/home" className='text-decoration-none text-dark'><b className='primary-color fs-3 fst-italic'>Skill</b> Develop</NavLink>
                        <p className='py-3'>Great lesson ideas and lesson plans for ESL teachers! Educators can customize lesson plans to best.</p>

                    </Col>
                    <Col>
                        <h5 className='fw-bold'>Pages</h5>
                        <ul className="navbar-nav ps-3 ms-auto mb-2 mb-lg-0">

                            <li className="nav-item">
                                <NavLink className="nav-link" to="/Home">Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/services">Services</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/about">About</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/about">Contact Us</NavLink>
                            </li>

                        </ul>
                    </Col>
                    <Col>
                        <h5 className='fw-bold pb-3'>Newsletter</h5>
                        <p>Subscribe us for daily offers and updates.</p>
                        <InputGroup className="mb-3">
                            <FormControl
                                placeholder="Enter your email"
                                type='email'

                            />
                            <Button className='custom-btn py-2 px-3' id="button-addon2">
                                Subscribe
                            </Button>
                        </InputGroup>


                    </Col>
                    <Col className='ps-4'>
                        <h5 className='fw-bold pb-3'>Follow in Social Media</h5>
                        <div className='icons'>
                            <i className="fab fa-facebook-square"></i>
                            <i className="fab fa-instagram"></i>
                            <i className="fab fa-pinterest-p"></i>
                        </div>

                    </Col>
                </Row>
            </div>
        </div>
    );
};

export default Footer;