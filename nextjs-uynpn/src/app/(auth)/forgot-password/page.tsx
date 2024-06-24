// src/app/forgot-password/page.tsx
import * as React from 'react';
import Image from 'next/image';
import ForgotPasswordForm from '@/app/component/ForgotPasswordForm';
import { Box } from '@mui/material';

export default function ForgotPasswordPage() {
  return (
    <Box
      sx={{
        display: 'flex',
        height: '100vh',
      }}
    >
      <Box
        sx={{
          flex: 1,
          position: 'relative',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#f0f0f0',
        }}
      >
        <Image
          src="/img/banner-auth.png" 
          alt="Forgot Password Image"
          layout="fill"
          objectFit="cover"
        />
      </Box>
      <Box
        sx={{
          flex: 1,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: 2,
        }}
      >
        <ForgotPasswordForm />
      </Box>
    </Box>
  );
}
