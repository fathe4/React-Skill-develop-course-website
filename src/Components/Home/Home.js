import React from 'react';
import { Button } from 'react-bootstrap';
import Courses from '../Courses/Courses';
import HomeHeroArea from '../HomeHeroArea/HomeHeroArea';


const Home = () => {
    return (
        <div>
            <HomeHeroArea></HomeHeroArea>

            <div className='text-center'>
                <h2 className='fw-bold py-4'>Find The Right
                    Online Course For You</h2>
                <p>You don't have to struggle alone, you've got our assistance and help.</p>
                <Courses></Courses>
                <Button className='custom-btn my-4 py-2'>View All</Button>

            </div>

        </div>
    );
};

export default Home;