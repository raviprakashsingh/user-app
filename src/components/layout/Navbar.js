import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

export const Navbar = () => {
  return (
    <AppBar position='static'>
      <Toolbar variant='dense'>
        <Typography variant='h6' color='inherit'>
          User App
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
