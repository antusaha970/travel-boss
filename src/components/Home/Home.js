import React from 'react';
import NavArea from '../NavArea/NavArea';
import './Home.css';

const Home = () => {
    return (
        <div className='bg-container'>
            <div className="overlay"></div>
            <div className="text-container">
                <NavArea></NavArea>
            </div>
        </div>
    );
};

export default Home;