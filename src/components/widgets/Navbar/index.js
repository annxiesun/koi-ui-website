import React from 'react';

import { Grid, IconButton, Button, CardMedia } from '@mui/material';
import { Github, Discord } from '../Icons';

function Navbar() {
  return (
    <Grid
      sx={() => ({
        backgroundColor: '#FFF',
        borderRadius: '24px',
        position: 'fixed',
        top: '0px',
        left: '50%',
        width: '100%',
        zIndex: 90,
        boxSizing: 'border-box',
        transform: 'translateX(-50%)',
        //boxShadow: theme.shadows[1]
      })}
      padding={2}
      container
      alignContent="center"
      alignItems="center"
      justifyContent="space-between"
    >
      <CardMedia
        component="img"
        sx={{ height: '50px', width: 'auto' }}
        src={'resources/images/logo.svg'}
      />
      <Grid>
        <IconButton
          sx={{ marginLeft: '8px' }}
          target="_blank"
          href="https://github.com/annxiesun/KoiUI"
        >
          <Github fill="grey" height="30px" width="30px" />
        </IconButton>
        <IconButton
          sx={{ marginLeft: '8px' }}
          target="_blank"
          href="https://discord.gg/EGqK4BfB"
        >
          <Discord fill="grey" height="30px" width="30px" />
        </IconButton>
        <Button
          sx={{ fontSize: '16px', marginLeft: '8px' }}
          variant="outlined"
          href="https://defiant-airbus-410.notion.site/Docs-a3cdea7bfb6648d2b5838462d4fb8d82"
          target="_blank"
        >
          {'Docs'}
        </Button>
      </Grid>
    </Grid>
  );
}

Navbar.propTypes = {};

export default Navbar;
