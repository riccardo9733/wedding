import MenuIcon from '@mui/icons-material/Menu';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import MenuItem from '@mui/material/MenuItem';
import { useTheme } from '@mui/material/styles';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import useMediaQuery from '@mui/material/useMediaQuery';
import React, { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';

const Header: React.FC = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen);
  };

  const menuItems = [
    { text: 'Home', path: '/' },
    { text: 'Programma', path: '/programma' },
    { text: 'Partecipazione', path: '/partecipazione' },
  ];

  const desktopMenu = (
    <Box sx={{ display: 'flex', alignItems: 'center' }}>
      {menuItems.map((item) => (
        <Button
          key={item.text}
          color="inherit"
          component={RouterLink}
          to={item.path}
          sx={{ ml: 2 }}
        >
          {item.text}
        </Button>
      ))}
    </Box>
  );

  const mobileMenu = (
    <>
      <IconButton
        color="inherit"
        aria-label="open drawer"
        edge="start"
        onClick={handleDrawerToggle}
      >
        <MenuIcon />
      </IconButton>
      <Drawer
        anchor="right"
        
        open={drawerOpen}
        onClose={handleDrawerToggle}
      >
        <Box
          sx={{ width: '80vw', height:'100%', backgroundColor: '#FFF5E4' }}
          role="presentation"
          onClick={handleDrawerToggle}
          onKeyDown={handleDrawerToggle}
        >
          {menuItems.map((item) => (
            <MenuItem
              sx={{fontWeight:'bold'}}
              key={item.text}
              component={RouterLink}
              to={item.path}
            >
              {item.text}
            </MenuItem>
          ))}
        </Box>
      </Drawer>
    </>
  );

  return (
    <AppBar position="static" sx={{backgroundColor: 'rgba(193, 216, 195, 0.5)', }}>
      <Toolbar sx={{ justifyContent: 'space-between' }}>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          <RouterLink to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
            Beatrice e Enrico
          </RouterLink>
        </Typography>
        {isMobile ? mobileMenu : desktopMenu}
      </Toolbar>
    </AppBar>
  );
};

export default Header;
