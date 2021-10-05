import React from 'react';
import { Breadcrumb } from 'react-bootstrap';
import './Breadcrumb.css'
const CustomBreadcrumb = (props) => {
    const { text, img } = props
    return (
        <div>
            {/* Breadcrumb */}

            <div class="my-container">
                <div className="container">
                    <h1>{text}</h1>
                    <Breadcrumb >
                        <Breadcrumb.Item className='text-white' href="/home">Home</Breadcrumb.Item>
                        <Breadcrumb.Item active>{text}</Breadcrumb.Item>
                    </Breadcrumb>
                </div>
                <img src={img} alt='' />
            </div>
        </div>

    );
};

export default CustomBreadcrumb;