import React from 'react';
import { useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { Grid, GridList, GridListTile, Typography, Container, CardMedia, Avatar  } from '@material-ui/core';
import { useWindowSize } from 'react-window-size-hooks';
import { GoogleMap, useLoadScript, Marker, InfoWindow } from '@react-google-maps/api'
import useStyles from './styles.js';

// iconos
import HotelIcon from '@material-ui/icons/Hotel';
import SquareFootIcon from '@material-ui/icons/SquareFoot';
import HouseIcon from '@material-ui/icons/House';
import HomeWorkIcon from '@material-ui/icons/HomeWork';
import BathtubIcon from '@material-ui/icons/Bathtub';
import DriveEtaIcon from '@material-ui/icons/DriveEta';
import SwapVertIcon from '@material-ui/icons/SwapVert';
import LocationOnIcon from '@material-ui/icons/LocationOn';

import stylesMap from './stylesMap'


const AnuncioFull = ()=>{
    const { id } = useParams();
    const anuncio = useSelector((state) => id ? state.anuncios.find((a) => a._id === id) : null );
    let fotos = []
    anuncio && (fotos = anuncio.fotos)

    //maps
    const mapContainerStyle = {width: '75vw', height: '45vh'}
    const center = { lat: 20.695595, lng: -100.445277}
    const options = {styles: stylesMap, disableDefaultUI: false}

    const classes = useStyles();
    const { width, height } = useWindowSize();

    return (

        !anuncio ? (<Container><Typography variant='h6'>El anuncio ha expirado. <Link to={`/anuncios`}> Regresar </Link></Typography></Container>)
        : ( <Container className={classes.mainContainer}>
                    <Grid container className={ width<450 ?  classes.gridMainContainerXs : classes.gridMainContainer}>     

{/* HEADER --> */}
                        <Grid item container xs={12} md={12} className={classes.head}>
                            <Grid item container xs={5} md={5}>
                                {/* FOTO PORTADA--> */}
                                <Grid item xs={12} md={12}>
                                    <CardMedia  className={classes.media} image={anuncio.portrait || 'https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png'}></CardMedia>
                                </Grid>
                            </Grid>

                            <Grid item container xs={7} md={7}>
                                {/* TITULO DE INMUEBLE--> */}
                                <Grid item xs={12} md={12}>
                                    <Typography className={ width<450 ? classes.titleXs : classes.title } style={{marginLeft: '1em'}}>{anuncio.title}</Typography>
                                </Grid>
                                {/* PRECIOS PORTADA--> */}
                                <Grid item container xs={12} md={12}>
                                    <Typography className={ width<450 ? classes.titleXs : classes.title } style={{marginLeft: '1em'}}>{anuncio.rentPrice}</Typography>
                                    <Typography className={ width<450 ? classes.titleXs : classes.title } style={{marginLeft: '1em'}}>{anuncio.salePrice}</Typography>
                                </Grid>
                            </Grid>

                        </Grid>

{/* LISTA COMPLETA DE FEATURES--> */}
                        <Grid item container xs={12} md={12} className={classes.featuresContainer}>
                            {/* TIPO DE INMUEBLE--> */}
                            <Grid item container xs={12} md={12} className={classes.featureItem} justify='center'>
                                <Grid item xs={1} md={1} container justify='flex-end'>
                                    <Avatar className={classes.smAvatar}><HomeWorkIcon fontSize="small"/></Avatar>
                                </Grid>
                                <Grid item xs={11} md={11} style={{paddingLeft: '1em'}}>
                                    <Typography className={classes.featureItemText}>Tipo de Inmueble</Typography>
                                    <Typography className={ width<450 ? classes.subtitleXs : classes.subtitle }>{anuncio.type}</Typography>
                                </Grid>
                            </Grid>

                            {/* UBICACIÓN DE INMUEBLE--> */}
                            <Grid item container xs={12} md={12} className={classes.featureItem}>
                                <Grid item xs={1} md={1} container justify='flex-end'>
                                    <Avatar className={classes.smAvatar}><LocationOnIcon fontSize="small"/></Avatar>
                                </Grid>
                                <Grid item xs={11} md={11} style={{paddingLeft: '1em'}}>
                                    <Typography className={classes.featureItemText}>Ubicación</Typography>
                                    <Typography variant="body2" className={ width<450 ? classes.subtitleXs : classes.subtitle }>{anuncio.address}</Typography>
                                </Grid>
                            </Grid>

{/* COLUMN #1 LISTA FEATURES--> */}
                            <Grid item container xs={6} md={6} className={classes.featureCol}>
                                {/* TERRENO--> */}
                                <Grid item xs={6} md={6} className={classes.featureItem}>
                                    <Grid item xs={4} md={4} container justify='flex-end'>
                                        <Avatar className={classes.smAvatar}><SquareFootIcon fontSize="small"/></Avatar>
                                    </Grid>
                                    <Grid item container xs={8} md={8} className={classes.featureGrid}>
                                        <Grid item container xs={12} md={12}>
                                            <Typography variant="body2">{anuncio.ground}</Typography>
                                            <Typography className={classes.featureItemText}> m2 </Typography>
                                        </Grid>
                                        <Grid item xs={12} md={12}>
                                            <Typography className={classes.featureItemText}>Terreno</Typography>
                                        </Grid>
                                    </Grid>
                                </Grid>
                                {/* CONSTRUCCION--> */}
                                <Grid item xs={6} md={6} className={classes.featureItem}>
                                    <Grid item xs={4} md={4} container justify='flex-end'>
                                        <Avatar className={classes.smAvatar}><HouseIcon fontSize="small"/></Avatar>
                                    </Grid>
                                    <Grid item container xs={8} md={8} className={classes.featureGrid}>
                                        <Grid item container xs={12} md={12}>
                                            <Typography variant="body2">{anuncio.construction}</Typography>
                                            <Typography className={classes.featureItemText}> m2 </Typography>
                                        </Grid>
                                        <Grid item xs={12} md={12}>
                                            <Typography className={classes.featureItemText}>Construccion</Typography>
                                        </Grid>
                                    </Grid>
                                </Grid>
                                {/* PISOS--> */}
                                <Grid item xs={6} md={6} className={classes.featureItem}>
                                    <Grid item xs={4} md={4} container justify='flex-end'>
                                        <Avatar className={classes.smAvatar}><SwapVertIcon fontSize="small"/></Avatar>
                                    </Grid>
                                    <Grid item container xs={8} md={8} className={classes.featureGrid}>
                                        <Grid item container xs={12} md={12}>
                                            <Typography variant="body2">{anuncio.floors}</Typography>
                                        </Grid>
                                        <Grid item xs={12} md={12}>
                                            <Typography className={classes.featureItemText}>Pisos</Typography>
                                        </Grid>
                                    </Grid>
                                </Grid>

                            </Grid>

{/* COLUMN #2 LISTA FEATURES--> */}
                            <Grid item xs={6} md={6} className={classes.featureCol}>
                                {/* CUARTOS--> */}
                                <Grid item xs={6} md={6} className={classes.featureItem}>
                                    <Grid item xs={4} md={4} container justify='flex-end'>
                                        <Avatar className={classes.smAvatar}><HotelIcon fontSize="small"/></Avatar>
                                    </Grid>
                                    <Grid item container xs={8} md={8} className={classes.featureGrid}>
                                        <Grid item container xs={12} md={12}>
                                            <Typography variant="body2">{anuncio.bedrooms}</Typography>
                                        </Grid>
                                        <Grid item xs={12} md={12}>
                                            <Typography className={classes.featureItemText}>Recamaras</Typography>
                                        </Grid>
                                    </Grid>
                                </Grid>
                                {/* BAÑOS--> */}
                                <Grid item xs={6} md={6} className={classes.featureItem}>
                                    <Grid item xs={4} md={4} container justify='flex-end'>
                                        <Avatar className={classes.smAvatar}><BathtubIcon fontSize="small"/></Avatar>
                                    </Grid>
                                    <Grid item container xs={8} md={8} className={classes.featureGrid}>
                                        <Grid item container xs={12} md={12}>
                                            <Typography variant="body2">{anuncio.bathrooms}</Typography>
                                        </Grid>
                                        <Grid item xs={12} md={12}>
                                            <Typography className={classes.featureItemText}>Baños</Typography>
                                        </Grid>
                                    </Grid>
                                </Grid>
                                {/* BAÑOS--> */}
                                <Grid item xs={6} md={6} className={classes.featureItem}>
                                    <Grid item xs={4} md={4} container justify='flex-end'>
                                        <Avatar className={classes.smAvatar}><DriveEtaIcon fontSize="small"/></Avatar>
                                    </Grid>
                                    <Grid item container xs={8} md={8} className={classes.featureGrid}>
                                        <Grid item container xs={12} md={12}>
                                            <Typography variant="body2">{anuncio.parking}</Typography>
                                        </Grid>
                                        <Grid item xs={12} md={12}>
                                            <Typography className={classes.featureItemText}>Garaje</Typography>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>

                        <Grid item container xs={12} md={12} className={classes.descripContainer}>
                                <Typography 
                                    variant='body2' 
                                    className={width < 450 ? `${classes.description} ${classes.smText}` : `${classes.description}`}>
                                        {anuncio.description}
                                </Typography>
                        </Grid>

                        <Container style={{padding: '3%'}}>
                            <GoogleMap 
                                mapContainerStyle={mapContainerStyle}
                                zoom={10} 
                                center={anuncio.latlng}
                                options={options}>

                                    <Marker position={{ lat: anuncio.latlng.lat, lng: anuncio.latlng.lng }} />

                            </GoogleMap>
                        </Container>

                        <Grid item container xs={12} md={12}>
                        <div className={classes.gallery}>
                            <GridList cellHeight={160} className={width > 450 ? classes.gridList : classes.gridListXs} cols={2}>
                                {fotos.map((foto) => (
                                <GridListTile key={foto.filename} cols={1}>
                                    <img src={`https://casa-ideal.herokuapp.com/anuncios/fotos/${foto.filename}`} alt={foto.filename} />
                                </GridListTile>
                                ))}
                            </GridList>
                            </div>
                        </Grid>
                    </Grid>

            </Container>)
    )
}

export default AnuncioFull;