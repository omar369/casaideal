import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Grid, CircularProgress, Grow } from '@material-ui/core';
//actions
import { getAnuncios } from '../../Actions/anuncios.actions.js';
//components
import Anuncio from './Anuncio/anuncio.js';

import useStyles from './styles.js';

const Anuncios = ({ setCurrentId, currentId })=>{

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAnuncios());
    }, [dispatch]);

    const anuncios = useSelector((state) => state.anuncios);

    const classes = useStyles();

    return (
        !anuncios.length ? <CircularProgress /> : (
          <Grid className={classes.mainContainer} container alignItems="stretch" spacing={3}>
            {anuncios.map((anuncio) => (
              <Grid key={anuncio._id} item xs={12} sm={6} md={4}>
                <Grow in timeout={2000}>
                  <Anuncio anuncio={anuncio} setCurrentId={setCurrentId} currentId={currentId}/>
                </Grow>
              </Grid>
            ))}
          </Grid>
        ))
};

export default Anuncios;