import React from 'react';
import { Link } from 'react-router-dom';

import {Button, Menu, MenuItem, Typography } from '@material-ui/core';



export default function SimpleMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
        <Typography component="p" color="inherit">|||</Typography>
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem component={Link} to={'/'} onClick={handleClose}>Home</MenuItem>
        <MenuItem component={Link} to={'/auth'} onClick={handleClose}>Sign in</MenuItem>
        <MenuItem component={Link} to={'/anuncios'} onClick={handleClose}>Ver anuncios</MenuItem>
        <MenuItem component={Link} to={'/crear-anuncio'} onClick={handleClose}>Crea un anuncio</MenuItem>
      </Menu>
    </div>
  );
}