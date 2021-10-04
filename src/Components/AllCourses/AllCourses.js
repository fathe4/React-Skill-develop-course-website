
import React from 'react';
import { Row } from 'react-bootstrap';
import CallCoursesApi from '../../Utilites/CallCoursesApi';
import Courses from '../Courses/Courses';
import './Allcourses.css'

const AllCourses = () => {
    const courses = CallCoursesApi()

    // All courses page section
    return (
        <div className='Courses'>
            <div className='container'>
                <h2 className='text-center'>All Courses</h2>
                <Row xs={1} md={3} className="g-4">

                    {
                        courses.map(course => <Courses key={course.key} course={course}></Courses>)
                    }

                </Row>

            </div>
        </div>
    );
};

export default AllCourses;