import React from 'react';
import { Grid, TextField } from '@material-ui/core';

import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import HotelIcon from '@material-ui/icons/Hotel';
import BathtubIcon from '@material-ui/icons/Bathtub';
import AspectRatioIcon from '@material-ui/icons/AspectRatio';
import HomeIcon from '@material-ui/icons/Home';
import DriveEtaIcon from '@material-ui/icons/DriveEta';
import HomeWorkIcon from '@material-ui/icons/HomeWork';
import SquareFootIcon from '@material-ui/icons/SquareFoot';
import SwapVertIcon from '@material-ui/icons/SwapVert';
import WcIcon from '@material-ui/icons/Wc';
import LocationOnIcon from '@material-ui/icons/LocationOn';

const IconInput = ({label, variant, name, type, value, onChange, autoFocus, justify, fullWidth})=> {

    const renderSwitch = (param)=> {
        switch(param) {
            case 'asesor':
                return <AccountCircleIcon />;
            case 'type':
                return <HomeWorkIcon />;
            case 'floors':
                return <SwapVertIcon />;
            case 'rooms':
                return <HotelIcon />;
            case 'ground':
                return <SquareFootIcon />;
            case 'construction':
                return <HomeIcon />;
            case 'bathrooms':
                return <BathtubIcon />;
            case 'halfbathrooms':
                return <WcIcon />;
            case 'parking':
                return <DriveEtaIcon />;
            case 'address':
                return <LocationOnIcon />;
            default:
                return <AccountCircleIcon />;
        }
    }


    return (
          <Grid container spacing={1} alignItems="center" justify={justify} >
            <Grid item xs={1} md={1}>
              {renderSwitch(name)} 
            </Grid>
            <Grid item xs={11} md={11}>
              <TextField 
                fullWidth={fullWidth}
                size='small' 
                label={label} 
                variant={variant}
                name={name}
                type={type}
                value={value}
                onChange={onChange}
                required
                autoFocus={autoFocus}
                />
            </Grid>
          </Grid>
    )
}

export default IconInput;