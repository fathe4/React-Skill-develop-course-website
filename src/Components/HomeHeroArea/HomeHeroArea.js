import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import headerImg from '../../images/header.jpg'
import PopularCourse from '../PopularCourse/PopularCourse';
import './HeroArea.css'

const HomeHeroArea = () => {
    const [popularCourses, setPopularCourse] = useState([])
    useEffect(() => {
        fetch('./PopularCourse.json')
            .then(res => res.json())
            .then(data => setPopularCourse(data))
    }, [])
    return (
        // Hero Area
        <div className='hero-area vh-100'>
            <div className=' container'>
                <div className="row hero-texts align-items-center  gx-4">
                    <div className='col-md-6'>
                        <h1 className='mb-4'>Find the right <br /> online tutor for you</h1>
                        <p className='mb-4'>Build skills with courses, certificates, and degrees online from world-class universities and companies.</p>

                        <Link to='/all-courses' className='text-decoration-none'>
                            <Button className='custom-btn'>Ready to get started?</Button>
                        </Link>
                    </div>
                    <div className='col-md-6'>
                        <img className='shadow-lg rounded-lg' src={headerImg} alt="" />

                    </div>

                </div>
                {/* Popular courses */}
                <div className="row-cols-md-4 d-flex justify-content-around gap-4">
                    {
                        popularCourses.map((popularCourse, idx) => <PopularCourse key={idx} popularCourse={popularCourse} ></PopularCourse>)
                    }

                </div>


            </div>
        </div>



    );
};

export default HomeHeroArea;