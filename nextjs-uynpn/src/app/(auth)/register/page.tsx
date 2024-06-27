'use client';

import * as React from 'react';
import Image from 'next/image';
import { Box } from '@mui/material';
import RegisterForm from '@/app/component/form-auth/RegisterForm';

const Register = () => {
  return (
    <Box 
      sx={{
        display: 'flex',
        height: '180vh',  // Đặt chiều cao cho toàn bộ trang là 100% chiều cao của viewport
        overflow: 'hidden',  // Ngăn chặn scroll ở mức trang
      }}
    >
      <Box
        sx={{
          flex: '1 1 50%',  // Phần tử này chiếm 50% chiều rộng của flex container
          position: 'relative',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#f0f0f0',
          overflow: 'hidden',  // Ngăn chặn scroll ở phần ảnh nền
        }}
      >
        <Image
          src="/img/banner-auth.png"
          alt="Register Image"
          layout="fill"
          objectFit="cover"
        />
      </Box>
      <Box
        sx={{
          flex: '1 1 50%',  // Phần tử này chiếm 50% chiều rộng của flex container
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: 2,
          overflowY: 'auto',  // Cho phép phần form có thể cuộn khi nội dung vượt quá chiều cao
        }}
      >
        <RegisterForm />
      </Box>
    </Box>
  );
}

export default Register;
