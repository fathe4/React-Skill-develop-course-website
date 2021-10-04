import React from 'react';
import { Breadcrumb, Container, Row, Col } from 'react-bootstrap';
import './about.css'
import aboutImg from '../../images/about.jpg'

const About = () => {
    return (
        <div >
            {/* Breadcrumb */}
            <div className='about-container'>
                <div class="container">
                    <h1>About Us</h1>
                    <Breadcrumb >
                        <Breadcrumb.Item className='text-white' href="/home">Home</Breadcrumb.Item>
                        <Breadcrumb.Item active>About</Breadcrumb.Item>
                    </Breadcrumb>
                </div>
            </div>

            {/* About section */}

            <div className='about'>
                <Container >
                    <Row xs={1} md={2} >
                        <Col>
                            <h2>About <i className='primary-color mb-4'>Skill</i> Develop</h2>
                            <p className='mt-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui voluptas cupiditate, cumque commodi voluptatibus dolorum quia velit odit mollitia alias facere tempore blanditiis architecto aperiam asperiores officiis laudantium voluptate sint et! Necessitatibus harum tempora fugit illum numquam suscipit obcaecati architecto quaerat. Reiciendis praesentium qui error, ipsam illum dignissimos, possimus itaque sit illo consequatur sint. Odio, iste rerum? Nihil labore fuga omnis sapiente quod sed quisquam est quis quam minus! Laudantium, sit itaque! Accusamus ex porro nesciunt nulla reiciendis eligendi voluptate aliquam corrupti. Repudiandae ipsum cupiditate mollitia minus suscipit corrupti est adipisci, ea omnis magnam dolores minima facilis et praesentium tempora nam nesciunt sequi. Dolor laborum neque saepe voluptatum ipsum fugiat iste dolorem officiis suscipit deserunt assumenda, maxime commodi? Error at recusandae, unde iure repellat soluta! Eligendi, consectetur id? Magni, consectetur? Dolore quasi quod non, optio molestiae commodi ipsa asperiores amet a accusantium eveniet omnis doloribus unde explicabo, minima expedita temporibus.</p>
                        </Col>
                        <Col>
                            <img width='700' src={aboutImg} alt="" />
                        </Col>
                    </Row>
                </Container>

            </div>


        </div>
    );
};

export default About;