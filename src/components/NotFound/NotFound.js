import React from 'react';
import { useNavigate } from 'react-router-dom';

const NotFound = () => {
    const navigate = useNavigate();
    setTimeout(()=>{
        navigate('/');
    },1500 )
    return (
        <div className='text-center'>
            <h1>Not Found 404</h1>
        </div>
    );
};

export default NotFound;