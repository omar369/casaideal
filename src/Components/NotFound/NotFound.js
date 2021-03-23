import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Typography, Grow, Grid, Paper, Button, } from '@material-ui/core';
// import useStyles from './styles';


const NotFound = ({location})=>{
    // const classes = useStyles();


    return(
        <Container>
            <Grow in timeout={2000}>
                <Paper elevation={3} >
                <Grid container>
                    <Grid item xs={12} md={12}>
                    <Typography variant="body1">
                        {`Lo sentimos. No se pudo encontrar el link que buscaba.`}
                    </Typography>
                    </Grid>
                    <Grid item container xs={12} md={12} justify="flex-end">
                        <Button component={Link} to="/" variant="outlined">
                        Regresar a Inicio
                        </Button>
                    </Grid>
                </Grid>
                </Paper>
            </Grow>
        </Container>
    )
}

export default NotFound;