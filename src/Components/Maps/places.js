import React, {useState} from 'react'
import scriptLoader from 'react-async-script-loader'
import PlacesAutocomplete, { geocodeByAddress, getLatLng } from 'react-places-autocomplete'

import { Container } from '@material-ui/core'

import IconInput from '../CrearAnuncio/inconInput.js';

const Places = ({address, setAddress, coords, setCoords, isScriptLoaded, isScriptLoadSucceed})=> {

    const handleSelect = async(value) => {
        const results = await geocodeByAddress(value)
        const latlng = await getLatLng(results[0])

        setAddress(value)
        setCoords(latlng)

        console.log(coords)
    }

    if(isScriptLoaded && isScriptLoadSucceed){
        return(
            <PlacesAutocomplete value={address} onChange={setAddress}  onSelect={handleSelect} >
                {({ getInputProps, suggestions, getSuggestionItemProps, loading })=>(
                        <Container style={{width: '100%'}}>
                            <IconInput name="address" variant="outlined" label="Dirección" autoFocus fullWidth {...getInputProps({placeholder: address})} />
                            <div>
                                {loading ? <h6>Loading</h6> : null}
    
                                {suggestions.map((suggestion)=>{
                                    const style = {
                                        backgroundColor: suggestion.active ? '#413655' : 'white',
                                        color: suggestion.active ? 'white' : '#413655'
                                    }
    
                                    return ( 
                                        <div {...getSuggestionItemProps( suggestion, {style})} key={suggestion.placeId}>
                                            {suggestion.description}
                                        </div>
                                    )
                                })}
                            </div>
                        </Container>
                    )}
            </PlacesAutocomplete>
        )
    }else { return <></>}

    
}

export default scriptLoader([`https://maps.googleapis.com/maps/api/js?key=${process.env.REACT_APP_GOOGLE_MAPS_KEY}&libraries=places`])(Places) 