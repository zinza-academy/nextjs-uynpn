'use client';
import React from 'react';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import ItemParameter from '@/app/component/common/item-parameter';

const HomePage: React.FC = () => {
  return (
    <Box sx={{ backgroundColor: '#F7FBFE', minHeight: '60', display: 'flex', alignItems: 'center', my: 2 }}>
      <Container sx={{ marginTop: 2, mb: 2 }} maxWidth="xl">
        <Grid container spacing={5} justifyContent="space-between" alignItems="center">
          <Grid item xs={12} sm={6} md={4}>
            <ItemParameter imgSrc="/img/ic_register_people 1.png" title="Đối tượng đăng kí tiêm" content="11,203,873" unit="(lượt)" />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <ItemParameter imgSrc="/img/ic_injection.png" title="Số mũi tiêm hôm qua" content="1,762,119" unit="(mũi)" />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <ItemParameter imgSrc="/img/ic_injected_people.png" title="Số mũi đã tiêm toàn quốc" content="69,523,654" unit="(mũi)" />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default HomePage;
