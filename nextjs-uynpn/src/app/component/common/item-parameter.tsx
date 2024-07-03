'use client';
import React from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import ButtonBase from '@mui/material/ButtonBase';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

// Define the props type
interface ItemParameterProps {
  imgSrc?: string;
  title: string;
  content: string;
  unit: string;
}

const Img = styled('img')({
  margin: 'auto',
  display: 'block',
  maxWidth: '100%',
  maxHeight: '100%',
});

const ItemParameter: React.FC<ItemParameterProps> = ({ imgSrc, title, content, unit }) => (
  <Grid
    container
    sx={{ 
      height: "60",
      width: "100%",
      backgroundColor: '#fff',
      paddingLeft: 2,
      paddingRight: 2,
      alignItems: 'center',
      justifyContent: 'center',
      border: '1px solid #ccc'
    }}
  >
    <Grid item>
      <ButtonBase sx={{ width: 46, height: 44, mr: 1 }}>
        {imgSrc ? <Img alt={title} src={imgSrc} /> : <AccountCircleIcon sx={{ fontSize: 44, color: '#281BA4' }} />}
      </ButtonBase>
    </Grid>
    <Grid item xs container direction="column">
      <Grid item>
        <Typography variant="subtitle1" component="div" sx={{ color: 'black', fontSize: 16, fontWeight: 'bold' }}>
          {title} 
        </Typography>
      </Grid>
      <Grid item>
        <Typography variant="body2" color="text.secondary" sx={{ color: 'black', fontSize: 28, fontWeight: 'medium' }}>
          {content} <Typography component="span" sx={{ fontSize: 13, fontWeight: 'medium', fontStyle: 'italic' }}>{unit}</Typography>
        </Typography>
      </Grid>
    </Grid>
  </Grid>
);

export default ItemParameter;
