import React, {useState} from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { deleteAnuncio } from '../../../Actions/anuncios.actions.js';
// import axios from 'axios';

import { Button, Card, CardMedia, Typography, CardContent, CardActions, Divider, Grid, Tooltip, Avatar, IconButton, Menu, MenuItem, Dialog, DialogContentText, DialogContent, DialogTitle, DialogActions } from '@material-ui/core';
import useStyles from './styles.js';
//icons
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import HotelIcon from '@material-ui/icons/Hotel';
import BathtubIcon from '@material-ui/icons/Bathtub';
import HomeIcon from '@material-ui/icons/Home';
import DriveEtaIcon from '@material-ui/icons/DriveEta';
import HomeWorkIcon from '@material-ui/icons/HomeWork';
import SquareFootIcon from '@material-ui/icons/SquareFoot';
import SwapVertIcon from '@material-ui/icons/SwapVert';
import WcIcon from '@material-ui/icons/Wc';
import OpenInBrowserIcon from '@material-ui/icons/OpenInBrowser';
import MoreVertIcon from '@material-ui/icons/MoreVert';


const Anuncio = ({ anuncio, setCurrentId, currentId })=>{

    const classes = useStyles();
    const dispatch = useDispatch();
    const history = useHistory();
    const user = JSON.parse(localStorage.getItem('profile'));
    const admin = ['omarins.222@gmail.com', 'cinexvq.33@gmail.com'];

    //menu
    const [anchorEl, setAnchorEl] = useState(null);
    const handleMenu = (event) => {
      setAnchorEl(event.currentTarget);
    };
    const menuClose = () => {
      setAnchorEl(null);
    };

    //alert Delete
    const [open, setOpen] = useState(false);
    const openAlertDelete = (e) => {
      e.preventDefault();
      setOpen(true);
    };
    const closeAlertDelete = (e) => {
      e.preventDefault();
      setOpen(false);
    };
    const handleDelete = async(e) => {
      e.preventDefault();
      // await axios.delete(`http://localhost:5000/anuncios/fotos/${anuncio.fotos[0]._id}`);
      await dispatch(deleteAnuncio(anuncio._id));
      history.push('/anuncios');
    };



    return (
    <Card className={classes.card}>
        <CardMedia 
            className={classes.media} 
            image={anuncio.portrait || 'https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png'} 
            title={anuncio.title} />

        <Grid container className={classes.overlay}>
          <Grid item container xs={9} md={9}>
            <Typography variant="subtitle2">{anuncio.title}</Typography>
          </Grid>
          
          {(user?.result?.email === admin[0] || user?.result?.email === admin[0]) && (
              <Grid item container xs={3} md={3} justify='center'>
              <IconButton aria-controls="simple-menu" aria-haspopup="true" onClick={handleMenu}>
                <MoreVertIcon style={{color: 'white'}}/>
              </IconButton>
              <Menu
                id="simple-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={menuClose}
              >
                <MenuItem component={Link} to='/crear-anuncio' onClick={()=>setCurrentId(anuncio._id)}>Modificar</MenuItem>
                <MenuItem component={Link} to={`/ficha/${anuncio._id}`}>Ficha Técnica</MenuItem>
                <MenuItem component={Link} to='/auth' onClick={openAlertDelete}>Eliminar</MenuItem>
              </Menu>
              <Dialog
                open={open}
                onClose={closeAlertDelete}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
              >
                <DialogTitle id="alert-dialog-title">{`Eliminar de Casa Ideal`}</DialogTitle>
                <DialogContent>
                  <DialogContentText id="alert-dialog-description">
                    {`¿Desa eliminar el anuncio: ${anuncio.title}?`}
                  </DialogContentText>
                </DialogContent>
                <DialogActions>
                  <Button onClick={closeAlertDelete} color="primary">
                    no
                  </Button>
                  <Button onClick={handleDelete} color="secondary" autoFocus>
                    si, eliminar.
                  </Button>
                </DialogActions>
              </Dialog>
              </Grid>
          )}
          </Grid>

        {/* ICONS */}
        <Grid container className={classes.iconSection}>
            <Grid item container alignItems="center" justify='center' className={classes.root} xs={6} md={6}>
              <SquareFootIcon fontSize='small'/><Typography variant="caption">{anuncio.ground}</Typography>

              <Divider orientation="vertical" flexItem color="inherit"/>
              <HomeIcon fontSize='small'/><Typography variant="caption">{anuncio.construction}</Typography>

              <Divider orientation="vertical" flexItem />
              <HotelIcon fontSize='small'/><Typography variant="caption">{anuncio.bedrooms}</Typography>

              <Divider orientation="vertical" flexItem />
              <BathtubIcon fontSize='small'/><Typography variant="caption">{anuncio.bathrooms}</Typography>

              <Divider orientation="vertical" flexItem />
              <DriveEtaIcon fontSize='small'/><Typography variant="caption">{anuncio.parking}</Typography>
            </Grid>

            <Grid item container xs={6} md={6}>
                <Grid item container xs={9} md={9}>
                  <CardContent>
                    <Grid item container xs={12} md={12}>
                      <Typography color="textSecondary" variant='caption'>{anuncio.type}</Typography>
                    </Grid>  
                    <Grid item container xs={12} md={12}>
                      <Typography color="textSecondary" className={classes.tooltipText}>Renta: {anuncio.rentPrice}</Typography>
                    </Grid>
                    <Grid item container xs={12} md={12}>
                      <Typography color="textSecondary" className={classes.tooltipText}>Venta: {anuncio.salePrice}</Typography>
                    </Grid>
                  </CardContent>
                </Grid>

                <Grid item container xs={3} md={3}>
                  <CardActions className={classes.cardActions}>
                  <Tooltip title="Abrir" aria-label="add" component={Link} to={`/anuncio/${anuncio._id}`}>
                    <Avatar color="primary" className={classes.avatar}>
                      <OpenInBrowserIcon fontSize='small'/>
                    </Avatar>
                  </Tooltip>
                  </CardActions>
                </Grid>
            </Grid>

        </Grid>
    </Card>
        )
}

export default Anuncio;