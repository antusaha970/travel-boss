import React from 'react';
import './SingleHotel.css';

const SingleHotel = ({hotel}) => {
    return (
        <div className='room-container'>
            <div className="img-area">
                <img src={hotel?.image} alt="hotel img" className='room-img' />
            </div>
            <div className="text-area">
                <h5>{hotel?.roomName}</h5>
                <p>2bed room, 2baths,4guests</p>
                <p className='text-muted'>{hotel?.description}</p>
                <p>$<b>{hotel?.price}</b></p>
            </div>
        </div>
    );
};

export default SingleHotel;