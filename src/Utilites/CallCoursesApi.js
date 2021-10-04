
import { useEffect } from 'react';
import { useState } from 'react';

const CallCoursesApi = () => {
    const [courses, setCourses] = useState([])

    useEffect(() => {
        fetch('./coursesApi.json')
            .then(res => res.json())
            .then(data => setCourses(data))
    }, []);
    return courses
};

export default CallCoursesApi;