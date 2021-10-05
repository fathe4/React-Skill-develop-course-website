import React from 'react';

const PopularCourse = (props) => {
    const { name, icon, description } = props.popularCourse;
    return (
        <div className='col'>
            <div className='d-flex justify-content-around bg-white rounded py-3 px-2 shadow'>
                <div>
                    <i className={icon}></i>
                </div>
                <div>
                    <h5>{name}</h5>
                    <p>{description}</p>
                </div>
            </div>
        </div>
    );
};

export default PopularCourse;