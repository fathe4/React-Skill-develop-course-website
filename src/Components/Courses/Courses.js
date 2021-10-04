import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import img from '../../images/header.jpg'
import './Courses.css'

const Courses = () => {
    return (
        <div className='container pt-4'>
            <Row xs={1} md={3} className="g-4">
                {Array.from({ length: 6 }).map((_, idx) => (
                    <Col className=''>
                        <Card>
                            <Card.Img width='100' height='250' variant="top" src={img} />
                            <Card.Body>
                                <div className='d-flex justify-content-between'>
                                    <p><i class="fas fa-book"></i> 43 Videos</p>
                                    <p><i class="fas fa-star"></i> 4.5(44)</p>
                                </div>
                                <Card.Title className='py-3'>Become a product Manager learn the skills & job.</Card.Title>
                                <div className='d-flex align-items-center mx-auto'>
                                    <img className='rounded-circle shadow' width='40' height='40' src={img} alt="" />
                                    <p className='pt-3 ps-3'>Jhankar Mahboob</p>
                                </div>
                            </Card.Body>
                            <Card.Footer className='d-flex justify-content-between bg-white'>
                                <div><h5>$500</h5></div>
                                <div><a className='text-decoration-none' href="/">Know More Details <i class="ps-2 fas fa-arrow-right"></i></a></div>
                            </Card.Footer>
                        </Card>
                    </Col>
                ))}
            </Row>
        </div>
    );
};

export default Courses;