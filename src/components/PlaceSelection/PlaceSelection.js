import React, { useContext, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import './PlaceSelection.css';
import { useState } from 'react';
import placesData from '../../PlacesData';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowAltCircleLeft, faArrowAltCircleRight } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import { PlaceContext } from '../../App';

const PlaceSelection = () => {
    const [places, setPlaces] = useState(placesData);
    const [currentPlace, setCurrentPlace] = useContext(PlaceContext);

    useEffect(()=>{
        setCurrentPlace(places[0]);
    },[])


    const navigate = useNavigate();
    const handlePlaceSelect = (ind)=>{
        setCurrentPlace(places[ind]);
    }

    const handleBookClick = (id) =>{
        navigate(`/booking/${id}`);
    }

    return (
        <Container fluid>
            <div className="row mt-5">
                <div className="col-md-4 places-info-box">
                    <h1 className='placeTitle'>{currentPlace.name}</h1>
                    <p className='placeDescription'>{currentPlace.description}</p>
                    <button className='login-btn' onClick={()=>handleBookClick(currentPlace.id)}>Book <FontAwesomeIcon icon={ faArrowAltCircleRight} /></button>
                </div>
                <div className="col-md-8">
                    <div className="row g-0 text-center">
                        <div className="col-md-4 ">
                            <div className="img-container" onClick={()=>handlePlaceSelect(0)}> 
                                <img src={places[0].image} alt="Places" className='placeImg' />
                                <h4 className='placeTag'>COX'S BAZAR</h4>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="img-container" onClick={()=>handlePlaceSelect(1)}>
                                <img src={places[1].image} alt="places" className='placeImg' />
                                <h4 className='placeTag'>Sreemangal</h4>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="img-container" onClick={()=>handlePlaceSelect(2)}>
                                <img src={places[2].image} alt="places" className='placeImg' />
                                <h4 className='placeTag'>Sundarbans</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    );
};

export default PlaceSelection;