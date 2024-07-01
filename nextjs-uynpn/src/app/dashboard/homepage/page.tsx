'use client';
import React from 'react';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box'; // Import Box component
import ItemParameter from '@/app/component/common/item-parameter';

const HomePage = () => {
  return (
    <Box sx={{ backgroundColor: '#F7FBFE', display: 'flex', alignItems: 'center', mt: 2}}>
      <Container sx={{ marginTop: 2, mb: 2 }} maxWidth="xl">
        <Grid container spacing={5} justifyContent="space-between" alignItems="center">
          <Grid item xs={12} sm={6} md={4}>
            <ItemParameter />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <ItemParameter />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <ItemParameter />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default HomePage;
