import React from 'react';
import './Breadcrumb.css'
const Breadcrumb = (text, img) => {
    console.log(text, img);
    return (
        <div>
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
        </div>
    );
};

export default Breadcrumb;