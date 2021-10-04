import React from 'react';
import './contact.css'
import { Breadcrumb, Col, Container, FloatingLabel, Form, Row, Button } from 'react-bootstrap';

const Contact = () => {
    return (
        <div>
            {/* Breadcrumb */}
            <div className='contact-container'>
                <div class="container">
                    <h1>Contact Us</h1>
                    <Breadcrumb >
                        <Breadcrumb.Item className='text-white' href="/home">Home</Breadcrumb.Item>
                        <Breadcrumb.Item active>Contact Us</Breadcrumb.Item>
                    </Breadcrumb>
                </div>
            </div>

            {/* Contact form */}
            <Container >
                <div className='contact'>
                    <h2>Get In Touch</h2>
                    <p>Have a question or just want to say hi? We'd love to hear from you.</p>
                </div>

                <Row xs={1} md={2} className="g-4">

                    <Col>
                        <Form>
                            <FloatingLabel
                                controlId="floatingInput"
                                label="Name"
                                className="mb-3"
                            >
                                <Form.Control className='my-3' type="text" placeholder="Name" />
                            </FloatingLabel>
                            <FloatingLabel label="Email">
                                <Form.Control className='my-3' type="email" placeholder="Email" />
                            </FloatingLabel>
                            <FloatingLabel label="Subject">
                                <Form.Control className='my-3' type="text" placeholder="Subject" />
                            </FloatingLabel>
                            <FloatingLabel controlId="floatingTextarea2" label="Your Massage">
                                <Form.Control
                                    as="textarea"
                                    placeholder="Your Massage"
                                    className='my-3'
                                    style={{ height: '250px' }}
                                />
                            </FloatingLabel>
                            <Button variant="primary" className='custom-btn py-2' type="submit">
                                Send your massage
                            </Button>
                        </Form>
                    </Col>
                    {/* Address and information */}
                    <Col>
                        <div className='d-flex p-4 shadow rounded mb-4'>
                            <div><i class="fas fa-search-location pe-4 fs-4 primary-color"></i></div>
                            <div>
                                <h5>New York Office</h5>
                                <p>Maypole Crescent 70-80 Upper St Norwich NR2 1LT</p>
                            </div>
                        </div>
                        <div className='d-flex p-4 shadow rounded mb-4'>
                            <div><i class="far fa-envelope primary-color pe-4 fs-4"></i></div>
                            <div>
                                <h5>Email us directly</h5>
                                <p>support@educal.com
                                    <br />
                                    info @educal.com</p>
                            </div>
                        </div>
                        <div className='d-flex p-4 shadow rounded mb-4'>
                            <div><i class="fas fa-phone-alt primary-color pe-4 fs-4"></i></div>
                            <div>
                                <h5>Phone</h5>
                                <p>+(426) 742 26 44 <br />

                                    +(224) 762 442 32</p>
                            </div>
                        </div>
                    </Col>

                </Row>
            </Container>
        </div>
    );
};

export default Contact;