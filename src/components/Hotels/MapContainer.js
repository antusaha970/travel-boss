import React from 'react';
import { GoogleMap, LoadScript } from '@react-google-maps/api';
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
       googleMapsApiKey='AIzaSyCh1SpO1F6GKpjZpJ_sWW_lVWFFVlGsLNM'>
        <GoogleMap
          mapContainerStyle={mapStyles}
          zoom={13}
          center={defaultCenter}
        />
     </LoadScript>
  )
}
export default MapContainer;