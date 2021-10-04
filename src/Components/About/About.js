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
                            <p className='mt-4 lh-lg'>Whether you want to learn or to share what you know, you’ve come to the right place. As a global destination for online learning, we connect people through knowledge.We help organizations of all types and sizes prepare for the path ahead — wherever it leads. Our curated collection of business and technical courses help companies, governments, and nonprofits go further by placing learning at the center of their strategies.Our global community and our course catalog get bigger every day. Skill develop was founded by Daphne Koller and Andrew Ng in 2012 with a vision of providing life-transforming learning experiences to learners around the world. Today, Skill develop  is a global online learning platform that offers anyone, anywhere, access to online courses and degrees from leading universities and companies. Skill develop  received B Corp certification in February 2021, which means that we have a legal duty not only to our shareholders, but to also make a positive impact on society more broadly, as we continue our efforts to reduce barriers to world-class education for all.

                            </p>
                        </Col>
                        <Col>
                            <img width='750' src={aboutImg} alt="" />
                        </Col>
                    </Row>
                </Container>

            </div>


        </div>
    );
};

export default About;