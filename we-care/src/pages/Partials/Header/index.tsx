import React from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

import { useStyles } from './styles';

const Header = () => {
    const classes = useStyles()
    return (
        <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" className={classes.appBar}>
          <Toolbar className={classes.toolbar} >
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{mr:2, display: { xs: 'block', sm: 'none' } }}
            >
              <MenuIcon />
            </IconButton>
            <div className={classes.circle}>
            <Typography variant="h6" className={classes.logo} >
              W
            </Typography>
            </div>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              WE CARE
            </Typography>
            <Button color="inherit">Login</Button>
          </Toolbar>
        </AppBar>
      </Box>
    )
}

export default Header
