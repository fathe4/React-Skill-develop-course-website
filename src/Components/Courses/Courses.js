import React from 'react';
import { Card, Col } from 'react-bootstrap';

import './Courses.css'

const Courses = (props) => {
    const { title, thumbnail, mentor, price, videos, rating, totalRating, mentorAvatar } = props.course

    return (
        <div className='pt-4'>

            <Col className='shadow'>
                <Card>
                    <Card.Img width='100' height='250' variant="top" src={thumbnail} />
                    <Card.Body>
                        <div className='d-flex justify-content-between'>
                            <p><i className="fas fa-book"></i> {videos} Videos</p>
                            <p><i className="fas fa-star"></i> {rating}({totalRating})</p>
                        </div>
                        <Card.Title className='py-3'>{title}</Card.Title>
                        <div className='d-flex align-items-center mx-auto'>
                            <img className='rounded-circle shadow' width='40' height='40' src={mentorAvatar} alt="" />
                            <p className='pt-3 ps-3'>{mentor}</p>
                        </div>
                    </Card.Body>
                    <Card.Footer className='d-flex justify-content-between bg-white'>
                        <div><h5>${price}</h5></div>
                        <div><a className='text-decoration-none' href="/">Know More Details <i className="ps-2 fas fa-arrow-right"></i></a></div>
                    </Card.Footer>
                </Card>
            </Col>

        </div>
    );
};

export default Courses;