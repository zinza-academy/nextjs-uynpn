'use client';

import React, { useState, useEffect } from 'react';
import { Box, Button, Grid, TextField, Typography } from '@mui/material';
import { useRouter } from 'next/navigation'; // Đổi từ 'next/router' sang 'next/navigation'
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/lib/store';
import { requestSuccess, sendRequest } from '@/slice/forgotPasswordSlice';
import '@/styles/app.css';

const LoginForm = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const isLoading = useSelector((state: RootState) => state.login.isLoading);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [isSubmitDisabled, setIsSubmitDisabled] = useState(true);

  const [touchedEmail, setTouchedEmail] = useState(false);
  const [touchedPassword, setTouchedPassword] = useState(false);

  useEffect(() => {
    validateForm(email, password);
  }, [email, password]);

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setEmail(value);
  };

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setPassword(value);
  };

  const handleBlur = (field: string) => {
    if (field === 'email') {
      setTouchedEmail(true);
    } else if (field === 'password') {
      setTouchedPassword(true);
    }
  };

  const validateForm = (email: string, password: string) => {
    if (email.trim() !== '' && password.trim() !== '') {
      setIsSubmitDisabled(false);
    } else {
      setIsSubmitDisabled(true);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(sendRequest());
    setTimeout(() => {
      dispatch(requestSuccess());
      router.push('/dashboard');
    }, 2000);
  };

  const onForgotPassword = () => {
    router.push('/forgot-password');
  };

  const onRegister = () => {
    router.push('/register');
  };

  return (
    <Grid
      container
      marginLeft={10}
      marginRight={10}
      component="form"
      onSubmit={handleSubmit}
      spacing={2}
      direction="column"
      alignItems="center"
      justifyContent="center"
      sx={{ height: 'auto' }}
    >
      <Grid item>
        <Typography variant="h5" sx={{ mb: 3, fontSize: 34, textAlign: 'center', fontWeight: 'bold', marginTop: '100px' }}>
          Đăng nhập vào tài khoản
        </Typography>
      </Grid>

      <Grid item sx={{ width: '100%' }}>
        <Typography className='label-input' variant="body1">
          Email
        </Typography>
        <TextField
          className='input-auth'
          placeholder='Email'
          type="email"
          fullWidth
          error={touchedEmail && email.trim() === ''}
          helperText={touchedEmail && email.trim() === '' ? 'Email không được để trống' : ''}
          value={email}
          onChange={handleEmailChange}
          onBlur={() => handleBlur('email')}
        />
      </Grid>

      <Grid item sx={{ width: '100%' }}>
        <Typography className='label-input' variant="body1">
          Mật khẩu
        </Typography>
        <TextField
          className='input-auth'
          placeholder='Mật khẩu'
          type="password"
          fullWidth
          error={touchedPassword && password.trim() === ''}
          helperText={touchedPassword && password.trim() === '' ? 'Mật khẩu không được để trống' : ''}
          value={password}
          onChange={handlePasswordChange}
          onBlur={() => handleBlur('password')}
        />
      </Grid>

      <Grid item container justifyContent="flex-end" sx={{ mb: 0 }}>
        <Button
          sx={{ textDecoration: 'none', textAlign: 'right', fontSize: 14, fontWeight: 'regular' }}
          onClick={onForgotPassword}
        >
          Quên mật khẩu?
        </Button>
      </Grid>

      <Grid item sx={{ width: '100%', mb: 1 }}>
        <Button
          className='button-auth'
          color="primary"
          type="submit"
          fullWidth
          disabled={isSubmitDisabled || isLoading} // Disable nút khi không hợp lệ hoặc đang loading
          sx={{
            color: '#FFFFFF',
            backgroundColor: '#66BB6A',
            padding: '5px 10px',
            border: '2px solid #66BB6A',
            '&:hover': {
              backgroundColor: '#FFFFFF',
              color: '#66BB6A',
            },
          }}
        >
          {isLoading ? 'Đang đăng nhập...' : 'Đăng nhập'}
        </Button>
      </Grid>

      <Grid item>
        <Typography variant="h5" sx={{ fontSize: 16, textAlign: 'center', fontWeight: 'bold' }}>
          Hoặc đăng ký tài khoản, nếu bạn chưa đăng ký!
        </Typography>
      </Grid>

      <Grid item sx={{ width: '100%', marginTop: '100px' }}>
        <Button
          className='button-auth'
          color="primary"
          fullWidth
          sx={{
            color: '#66BB6A',
            backgroundColor: '#FFFFFF',
            padding: '5px 10px',
            border: '2px solid #66BB6A',
            '&:hover': {
              backgroundColor: '#66BB6A',
              color: '#FFFFFF',
            },
          }}
          onClick={onRegister}
        >
          {isLoading ? 'Đang đăng ký...' : 'Đăng ký'}
        </Button>
      </Grid>

    </Grid>
  );
};

export default LoginForm;
