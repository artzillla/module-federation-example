import React from 'react';
import MUIAppBar from '@mui/material/AppBar';

export const AppBar = (props) => (
  <MUIAppBar
    {...props}
    sx={{
      backgroundColor: 'rgba(0,0,0,0.8)',
      backdropFilter: 'saturate(180%) blur(20px)',
      padding: '5px',
      display: 'flex',
      alignItems: 'flex-end',
    }}
  />
);
