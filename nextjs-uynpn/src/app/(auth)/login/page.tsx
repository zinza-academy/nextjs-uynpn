'use client';

import * as React from 'react';
import Image from 'next/image';
import { Box } from '@mui/material';
import LoginForm from '@/app/component/form-auth/LoginForm';

const LoginPage = () => {
  return (
    <Box
      sx={{
        display: 'flex', 
        height: '100vh', 
        overflow: 'hidden', 
      }}
    >
      <Box
        sx={{
          flex: '1 1 50%',  
          position: 'relative',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#f0f0f0',
          overflow: 'hidden',
        }}
      >
        <Image
          src="/img/banner-auth.png"
          alt="Login Image"
          layout="fill"
          objectFit="cover"
        />
      </Box>
      <Box
        sx={{
          flex: '1 1 50%', 
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: 2,
          overflowY: 'auto',
        }}
      >
        <LoginForm />
      </Box>
    </Box>
  );
}

export default LoginPage;
