import React, { useContext } from 'react';
import './SinglePlaceDetails.css';
import NavArea from '../NavArea/NavArea';
import { Container } from 'react-bootstrap';
import { PlaceContext } from '../../App';
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router-dom';

const SinglePlaceDetails = () => {
    const [currentPlace, setCurrentPlace] = useContext(PlaceContext);
    const navigate = useNavigate();

    const handleSubmit = (e)=>{
        e.preventDefault();
        navigate('/login');
    }

    return (
        <div className='bg-container'>
            <NavArea></NavArea>
            <Container>
                <div className="row mt-5">
                    <div className="col-md-6">
                        <h2 className='placeTitle'>{currentPlace.name}</h2>
                        <p className='placeDescription'>{currentPlace.description}</p>
                    </div>
                    <div className="col-md-6">
                        <div className="form-container">
                            <form onSubmit={handleSubmit}>
                                <div className="from-group">
                                    <label htmlFor="origin">Origin</label>
                                    <input className='bookingInp' type="text" id='origin' defaultValue='Dhaka' />
                                </div>
                                <div className="from-group">
                                    <label htmlFor="destination">Destination</label>
                                    <input className='bookingInp' type="text" id='destination' value={currentPlace.name} />
                                </div>
                                <div className="from-group">
                                    <div className="date-pick">
                                        <label htmlFor="from">From</label>
                                        <input className='bookingInp d-pick' type="date" id='from' />
                                        <label htmlFor="to">To</label>
                                        <input className='bookingInp d-pick' type="date" id='to' />
                                    </div>
                                </div>
                                <input type="submit" value='Start Booking' className='login-btn w-100' />
                            </form>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default SinglePlaceDetails;