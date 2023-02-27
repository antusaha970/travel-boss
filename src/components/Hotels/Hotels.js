import React, { useContext, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import { PlaceContext } from '../../App';
import NavArea from '../NavArea/NavArea';
import { hotelData } from './HotelData';
import './Hotels.css';
import { useState } from 'react';

import SingleHotel from '../SingleHotel/SingleHotel';
import MapContainer from './MapContainer';

const Hotels = () => {
    const [currentPlace, setCurrentPlace] = useContext(PlaceContext);

    const [hotels, setHotels] = useState([]);
    useEffect(()=>{
        setHotels(hotelData);
    },[])



    return (
        <div className='bg-container-login'>
            <NavArea></NavArea>
            <Container>
                <div className="row">
                    <div className="col-md-6 text-white">
                        <h2>Stay in {currentPlace.name}</h2>
                        {
                            hotels.map((hotel, index) => <SingleHotel hotel={hotel} key={index}></SingleHotel>)
    
                        }
                    </div>
                    <div className="col-md-6">
                        <MapContainer place={currentPlace}></MapContainer>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default Hotels;