import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import headerImg from '../../images/header.jpg'
import './HeroArea.css'

const HomeHeroArea = () => {
    return (
        // Hero Area
        <div className='hero-area'>
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

            </div>
        </div>



    );
};

export default HomeHeroArea;