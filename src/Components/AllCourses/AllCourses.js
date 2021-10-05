
import React from 'react';
import { Row } from 'react-bootstrap';
import CallCoursesApi from '../../Utilites/CallCoursesApi';
import CustomBreadcrumb from '../Breadcrumb/Breadcrumb';
import Courses from '../Courses/Courses';
import './Allcourses.css'

const AllCourses = () => {
    const courses = CallCoursesApi()

    // All courses page section
    return (

        <div className=''>
            <CustomBreadcrumb text="Our Courses" img="https://www.tianet.org/wp-content/uploads/2019/02/banner-online-education-course-1920x495.jpg"></CustomBreadcrumb>
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
        </div>
    );
};

export default AllCourses;