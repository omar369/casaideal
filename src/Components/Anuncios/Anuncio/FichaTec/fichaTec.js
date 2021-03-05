import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Container, Typography } from '@material-ui/core';

import LayoutFicha from './layoutFicha.js';

const FichaTec = ()=>{
    
    const { id } = useParams();

    const anuncioInfo = useSelector((state) => id ? state.anuncios.find((a) => a._id === id) : null );

    return(
        anuncioInfo ? (<LayoutFicha anuncio={anuncioInfo}/>)
        :(<Container><Typography variant='h6'>El anuncio ha expirado. <Link to={`/anuncios`}> Regresar </Link></Typography></Container>)
    )
};

export default FichaTec;