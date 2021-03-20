import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Typography, Grow, Grid, Paper, Button, } from '@material-ui/core';
import useStyles from './styles';


const Home = ()=>{
    const classes = useStyles();


    return(
        <Container className={classes.root}>
            <Grow in timeout={2000}>
                <Paper elevation={3} className={classes.welcomePaper}>
                <Grid container>
                    <Grid item xs={12} md={12}>
                    <Typography variant="h5">Bienvenido al portal de Casa Ideal</Typography>
                    </Grid>
                    <Grid item xs={12} md={12}>
                    <Typography variant="body1">Haz click para buscar propiedades disponibles:</Typography>
                    </Grid>
                    <Grid item container xs={12} md={12} justify="flex-end">
                        <Button component={Link} to="/anuncios" variant="outlined" className={classes.anunciosBtn}>
                        Ver anuncios
                        </Button>
                    </Grid>
                </Grid>
                </Paper>
            </Grow>
        </Container>
    )
}

export default Home;