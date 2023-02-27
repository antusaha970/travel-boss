import React from 'react';
import { GoogleMap, LoadScript } from '@react-google-maps/api';
import { apiKey } from '../../mapApi';
const MapContainer = ({place}) => {
  
  const mapStyles = {        
    height: "100%",
    width: "100%"};
  
  const defaultCenter = {
    lat: place.lat, lng: place.long
  }
  console.log(place.lat,place.long);
  return (
     <LoadScript
       googleMapsApiKey={apiKey}>
        <GoogleMap
          mapContainerStyle={mapStyles}
          zoom={13}
          center={defaultCenter}
        />
     </LoadScript>
  )
}
export default MapContainer;