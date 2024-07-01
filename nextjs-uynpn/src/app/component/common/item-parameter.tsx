'use client';
import React from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import ButtonBase from '@mui/material/ButtonBase';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const Img = styled('img')({
  margin: 'auto',
  display: 'block',
  maxWidth: '100%',
  maxHeight: '100%',
});

const ItemParameter = () => (
  <Grid
    container
    sx={{
      height: 60,
      width: 455.33,
      backgroundColor: '#fff',
      paddingLeft: 2,
      paddingRight: 2,
      alignItems: 'center',
      justifyContent: 'center',
      border: '1px solid #ccc',
      borderRadius: '8px',
    }}
  >
    <Grid item>
      <ButtonBase sx={{ width: 46, height: 44 }}>
        <AccountCircleIcon sx={{ fontSize: 44, color: '#281BA4' }} />
      </ButtonBase>
    </Grid>
    <Grid item xs container direction="column" spacing={1}>
      <Grid item>
        <Typography variant="subtitle1" component="div">
          Nội dung
        </Typography>
      </Grid>
      <Grid item>
        <Typography variant="body2" color="text.secondary">
          Các chữ số
        </Typography>
      </Grid>
    </Grid>
  </Grid>
);

export default ItemParameter;
