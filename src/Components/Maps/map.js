import React, {useState} from 'react'
import scriptLoader from 'react-async-script-loader'
import { GoogleMap, Marker } from '@react-google-maps/api'
import { Container } from '@material-ui/core'

import stylesMap from './stylesMap'

const mapContainerStyle = {width: '75vw', height: '45vh'}
const center = { lat: 20.695595, lng: -100.445277}
const options = {styles: stylesMap, disableDefaultUI: false}

const Map = ({marker, setMarker})=>{

   
    return(
        <Container style={{padding: '3%'}}>
            <GoogleMap 
                mapContainerStyle={mapContainerStyle}
                zoom={10} 
                center={center}
                options={options}
                onClick={(event)=> {
                    setMarker({lat: event.latLng.lat(), lng: event.latLng.lng()})
                }}>

                    <Marker position={{lat: marker.lat, lng: marker.lng}} />

            </GoogleMap>
        </Container>
    )
}

export default Map