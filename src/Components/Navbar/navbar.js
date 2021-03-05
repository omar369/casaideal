import React, { useEffect, useState } from 'react';
import { useHistory, Link, useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import decode from 'jwt-decode';
import { LOGOUT } from '../../constants/actionTypes.js';
import { Typography, AppBar, Toolbar, Button, Avatar } from '@material-ui/core';
import useStyles from './styles';

import SimpleMenu from './MenuIcon/menuIcon.js';

const Navbar = ()=>{
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
  const dispatch = useDispatch();
  const location = useLocation();
  const history = useHistory();
  const classes = useStyles();

  const logout = () => {
    dispatch({ type: LOGOUT });

    history.push('/auth');

    setUser(null);
  };

  useEffect(() => {
    const token = user?.token;

    if (token) {
      const decodedToken = decode(token);

      if (decodedToken.exp * 1000 < new Date().getTime()) logout();
  }

  setUser(JSON.parse(localStorage.getItem('profile')));
  }, [location]);

  return(
      <AppBar position="fixed">
      <Toolbar>
          <SimpleMenu />
        <Typography variant="subtitle1" className={classes.title}>
          Casa Ideal
        </Typography>
        {user?.result ? (
          <div className={classes.profile}>
            <Avatar className={classes.avatar} alt={user?.result.name} src={user?.result.imageUrl}>{user?.result.name.charAt(0)}</Avatar>
            <Typography className={classes.userName} >{user?.result.name}</Typography>
            <Button variant="contained" color="secondary" onClick={logout}>Logout</Button>
          </div>
        ) : (
          <Button component={Link} to="/auth" variant="contained" color="primary">Sign In</Button>
        )}
      </Toolbar>
    </AppBar>
  )
}
 export default Navbar;