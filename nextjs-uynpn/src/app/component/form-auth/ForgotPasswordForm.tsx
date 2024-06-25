'use client';

import React, { useState } from 'react';
import { Box, Button, TextField, Typography, colors } from '@mui/material';
import { useRouter } from 'next/navigation';
import { useDispatch, useSelector } from 'react-redux';
import { requestSuccess, sendRequest } from '@/slice/forgotPasswordSlice';
import { RootState } from '@/lib/store';
import '@/styles/app.css'

const ForgotPasswordForm = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const isLoading = useSelector((state: RootState) => state.forgotPassword.isLoading);

  const [email, setEmail] = useState('');
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(sendRequest());
    setTimeout(() => {
      dispatch(requestSuccess());
      router.push('/login');
    }, 2000);
  };

  const onLogin = () => {
    router.push('/login');
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setEmail(value);
    setIsButtonDisabled(value === '');
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 2,
        width: '100%',
        height: '100vh',
        '& .MuiTextField-root': { mb: 2 },
        '& .MuiButton-root': { mt: 2 },
      }}
    >
      <Typography
        variant="h5"
        sx={{
          mb: 2,
          fontSize: 16,
          textAlign: 'center',
        }}
      >
        Để khôi phục mật khẩu, vui lòng nhập đúng email bạn đã dùng để đăng ký <span className='forgot-password-span'>(*)</span>
      </Typography>
      <TextField
        className='label-input'
        label="Email"
        type="email"
        fullWidth
        required
        value={email}
        onChange={handleEmailChange}
      />
      <Box sx={{ textAlign: 'center' }}>
        <Button
          variant="contained"
          color="secondary"
          sx={{
            color: '#303F9F',
            backgroundColor: '#FFFFFF',
            padding: '5px 10px',
            border: '2px solid #303F9F',
            '&:hover': {
              backgroundColor: '#303F9F',
              color: '#FFFFFF',
            },
          }}
          onClick={onLogin}
        >
          Quay lại
        </Button>
        <Button
          variant="contained"
          color="primary"
          type="submit"
          disabled={isButtonDisabled || isLoading}
          sx={{
            color: '#FFFFFF',
            backgroundColor: '#303F9F',
            padding: '5px 10px',
            marginLeft: '10px',
            border: '2px solid #303F9F',
            '&:hover': {
              backgroundColor: '#FFFFFF',
              color: '#303F9F',
            },
          }}
        >
          {isLoading ? 'Đang gửi...' : 'Gửi'}
        </Button>
      </Box>
    </Box>
  );
};

export default ForgotPasswordForm;
