import React from 'react';
import { Button, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import CallCoursesApi from '../../Utilites/CallCoursesApi';
import Courses from '../Courses/Courses';
import HomeHeroArea from '../HomeHeroArea/HomeHeroArea';


const Home = () => {
    const courses = CallCoursesApi()
    const courseLength = courses.slice(0, 6)

    return (
        <div>
            {/* Hero area section */}
            <HomeHeroArea></HomeHeroArea>

            {/* Course section */}
            <div className='container'>
                <h2 className='fw-bold py-4 text-center'>Find The Right Online Course For You</h2>
                <p className='text-center'>You don't have to struggle alone, you've got our assistance and help.</p>
                <Row xs={1} md={3} className="g-4">
                    {
                        courseLength.map(course => <Courses key={course.id} course={course}></Courses>)
                    }
                </Row>
                <Link to='/all-courses' className='text-decoration-none'>
                    <Button className='custom-btn my-4 py-2 d-block mx-auto'>View All</Button>
                </Link>

            </div>

        </div>
    );
};

export default Home;