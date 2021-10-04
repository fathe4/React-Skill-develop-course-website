import React from 'react';
import img404 from '../../images/404.png'
import './notFound.css'

const NotFound = () => {
    return (
        <div className='page404'>
            <img width='500px' className='d-block mx-auto py-4' src={img404} alt="" />
            <h2 className='text-center primary-color py- 4'>The page you are looking for is not available</h2>
        </div>
    );
};

export default NotFound;