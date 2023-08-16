import React from 'react';
import { AppBar, Toolbar, Typography, InputBase } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

const Header = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          eBay Clone
        </Typography>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <SearchIcon />
          <InputBase
            placeholder="Search products..."
            inputProps={{ 'aria-label': 'search' }}
          />
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Header;

