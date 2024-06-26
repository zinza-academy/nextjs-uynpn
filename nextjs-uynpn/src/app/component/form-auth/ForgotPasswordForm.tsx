'use client';

import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { Box, Button, TextField, Typography } from '@mui/material';
import { useRouter } from 'next/navigation';
import { useDispatch, useSelector } from 'react-redux';
import { requestSuccess, sendRequest } from '@/slice/forgotPasswordSlice';
import { RootState } from '@/lib/store';
import '@/styles/app.css';

type FormValues = {
  email: string;
};

const ForgotPasswordForm = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const isLoading = useSelector((state: RootState) => state.forgotPassword.isLoading);

  const { register, handleSubmit, formState: { errors } } = useForm<FormValues>();

  const onSubmit: SubmitHandler<FormValues> = data => {
    console.log(data)
    dispatch(sendRequest());
    setTimeout(() => {
      dispatch(requestSuccess());
      router.push('/login');
    }, 2000);
  };

  const onLogin = () => {
    router.push('/login');
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit(onSubmit)}
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
          textAlign: 'center'
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
        {...register('email', { required: 'Email is required' })}
        error={!!errors.email}
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
          disabled={isLoading}
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
