'use client';

import React, { useState } from 'react';
import { Box, Button, Grid, TextField, Typography } from '@mui/material';
import { useRouter } from 'next/navigation';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/lib/store';
import { requestSuccess, sendRequest } from '@/slice/forgotPasswordSlice';
import { useForm, Controller, SubmitHandler } from 'react-hook-form';
import { setToken } from '@/slice/loginSlice';
import '@/styles/app.css';

interface LoginFormInputs {
  email: string;
  password: string;
}

const fakeToken = 'abc123fakeToken456xyz';

const fakeEmail = 'uynpham@gmail.com';
const fakePassword = '123uynpham';

const LoginForm = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const isLoading = useSelector((state: RootState) => state.login.isLoading);

  const { handleSubmit, control, formState: { errors, isValid, isSubmitting } } = useForm<LoginFormInputs>({
    mode: 'onChange',
  });

  const [serverError, setServerError] = useState<string | null>(null);

  const onSubmit: SubmitHandler<LoginFormInputs> = async (data) => {
    dispatch(sendRequest());

    try {
      await new Promise<void>((resolve, reject) => {
        setTimeout(() => {
          if (data.email === fakeEmail && data.password === fakePassword) {
            resolve();
          } else {
            reject(new Error('Sai email hoặc mật khẩu'));
          }
        }, 1000);
      });
    } catch (error: any) {
      setServerError(error.message);
      dispatch(requestSuccess());
      return;
    }
  
    localStorage.setItem('token', fakeToken);
    dispatch(setToken(fakeToken));
    
    alert("Đăng nhập thành công");
    dispatch(requestSuccess());
    router.push('/');
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
      onSubmit={handleSubmit(onSubmit)}
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
        <Controller
          name="email"
          control={control}
          defaultValue=""
          rules={{
            required: 'Email không được để trống',
            pattern: {
              value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
              message: 'Email không hợp lệ',
            },
          }}
          render={({ field }) => (
            <TextField
              {...field}
              className='input-auth'
              placeholder='Email'
              type="email"
              fullWidth
              error={!!errors.email}
              helperText={errors.email ? errors.email.message : ''}
            />
          )}
        />
      </Grid>

      <Grid item sx={{ width: '100%' }}>
        <Typography className='label-input' variant="body1">
          Mật khẩu
        </Typography>
        <Controller
          name="password"
          control={control}
          defaultValue=""
          rules={{
            required: 'Mật khẩu không được để trống',
            minLength: {
              value: 8,
              message: 'Mật khẩu phải có ít nhất 8 ký tự',
            },
            validate: value => !/\s/.test(value) || 'Mật khẩu không được chứa dấu cách'
          }}
          render={({ field }) => (
            <TextField
              {...field}
              className='input-auth'
              placeholder='Mật khẩu'
              type="password"
              fullWidth
              error={!!errors.password}
              helperText={errors.password ? errors.password.message : ''}
            />
          )}
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
          disabled={!isValid || isSubmitting || isLoading}
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

      {serverError && (
        <Grid item sx={{ width: '100%', mb: 1 }}>
          <Typography variant="body2" color="error" sx={{ textAlign: 'center' }}>
            {serverError}
          </Typography>
        </Grid>
      )}

      <Grid item>
        <Typography variant="h5" sx={{ fontSize: 16, textAlign: 'center' }}>
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
