'use client';

import React from 'react';
import { Box, Button, Grid, TextField, Typography, Select, MenuItem, FormControl, InputLabel } from '@mui/material';
import { useRouter } from 'next/navigation'; // Đổi từ 'next/router' sang 'next/navigation'
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/lib/store';
import { requestSuccess, sendRequest } from '@/slice/registerSlice';
import '@/styles/app.css';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

interface FormData {
  email: string;
  password: string;
  cmnd: string;
  name: string;
  dob: string;
  gender: string;
  province: string;
  district: string;
  ward: string;
}

// Tạo schema xác thực bằng yup
const validationSchema = yup.object().shape({
  cmnd: yup.string().required('Số CMND/CCCD không được để trống').length(12, 'Số CMND/CCCD phải có đúng 12 số'),
  email: yup.string().email('Email không hợp lệ').required('Email không được để trống'),
  password: yup.string().required('Mật khẩu không được để trống'),
  name: yup.string().required('Họ và tên không được để trống'),
  dob: yup.string().required('Ngày sinh không được để trống'),
  gender: yup.string().required('Giới tính không được để trống'),
  province: yup.string().required('Tỉnh không được để trống'), 
  district: yup.string().required('Huyện không được để trống'),
  ward: yup.string().required('Xã không được để trống')
});

const RegisterForm = () => {
  const { control, handleSubmit, formState: { errors } } = useForm<FormData>({
    resolver: yupResolver(validationSchema)
  });

  const router = useRouter();
  const dispatch = useDispatch();
  const isLoading = useSelector((state: RootState) => state.register.isLoading);

  const onSubmit = (data: FormData) => {
    dispatch(sendRequest());
    setTimeout(() => {
      dispatch(requestSuccess());
      router.push('/login');
    }, 2000);
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
        <Typography className='header' variant="h5" sx={{ mb: 3, fontSize: 34, textAlign: 'center', fontWeight: 'bold' }}>
          Đăng ký tài khoản
        </Typography>
      </Grid>

      <Grid item sx={{ width: '100%', mb: 2 }}>
        <Typography className='label-input' variant="body1">
          Số CMND/CCCD <Box component="span" sx={{ color: 'red' }}>(*)</Box>
        </Typography>
        <Controller
          name="cmnd"
          control={control}
          defaultValue=""
          render={({ field }) => (
            <TextField
              className='input-auth'
              placeholder='Số CMND/CCCD'
              fullWidth
              {...field}
              error={!!errors.cmnd}
              helperText={errors.cmnd ? errors.cmnd.message : ''}
            />
          )}
        />
      </Grid>

      <Grid item sx={{ width: '100%', mb: 2 }}>
        <Typography className='label-input' variant="body1">
          Email <Box component="span" sx={{ color: 'red' }}>(*)</Box>
        </Typography>
        <Controller
          name="email"
          control={control}
          defaultValue=""
          render={({ field }) => (
            <TextField
              className='input-auth'
              placeholder='Email'
              type="email"
              fullWidth
              {...field}
              error={!!errors.email}
              helperText={errors.email ? errors.email.message : ''}
            />
          )}
        />
      </Grid>

      <Grid item sx={{ width: '100%', mb: 2 }}>
        <Typography className='label-input' variant="body1">
          Mật khẩu <Box component="span" sx={{ color: 'red' }}>(*)</Box>
        </Typography>
        <Controller
          name="password"
          control={control}
          defaultValue=""
          render={({ field }) => (
            <TextField
              className='input-auth'
              placeholder='Mật khẩu'
              type="password"
              fullWidth
              {...field}
              error={!!errors.password}
              helperText={errors.password ? errors.password.message : ''}
            />
          )}
        />
      </Grid>

      <Grid item sx={{ width: '100%', mb: 2 }}>
        <Typography className='label-input' variant="body1">
          Họ và tên <Box component="span" sx={{ color: 'red' }}>(*)</Box>
        </Typography>
        <Controller
          name="name"
          control={control}
          defaultValue=""
          render={({ field }) => (
            <TextField
              className='input-auth'
              placeholder='Họ và tên'
              fullWidth
              {...field}
              error={!!errors.name}
              helperText={errors.name ? errors.name.message : ''}
            />
          )}
        />
      </Grid>

      <Grid item sx={{ width: '100%', mb: 2 }}>
        <Typography className='label-input' variant="body1">
          Ngày sinh <Box component="span" sx={{ color: 'red' }}>(*)</Box>
        </Typography>
        <Controller
          name="dob"
          control={control}
          defaultValue=""
          render={({ field }) => (
            <TextField
              className='input-auth'
              placeholder='Ngày/Tháng/Năm'
              fullWidth
              {...field}
              error={!!errors.dob}
              helperText={errors.dob ? errors.dob.message : ''}
            />
          )}
        />
      </Grid>

      <Grid item sx={{ width: '100%', mb: 2 }}>
        <Typography className='label-input' variant="body1">
          Giới tính <Box component="span" sx={{ color: 'red' }}>(*)</Box>
        </Typography>
        <Controller
          name="gender"
          control={control}
          defaultValue=""
          render={({ field }) => (
            <TextField
              className='input-auth'
              placeholder='Giới tính'
              fullWidth
              {...field}
              error={!!errors.gender}
              helperText={errors.gender ? errors.gender.message : ''}
            />
          )}
        />
      </Grid>

      <Grid item sx={{ width: '100%', mb: 2 }}>
        <Typography className='label-input' variant="body1">
          Tỉnh/Thành phố
        </Typography>
        <Controller
          name="province"
          control={control}
          defaultValue=""
          render={({ field }) => (
            <FormControl fullWidth className='input-auth'>
              <InputLabel>Tỉnh/Thành phố</InputLabel>
              <Select
                {...field}
                error={!!errors.province}
              >
                <MenuItem value=""><em>None</em></MenuItem>
                <MenuItem value="Hà Nội">Hà Nội</MenuItem>
                <MenuItem value="Hồ Chí Minh">Hồ Chí Minh</MenuItem>
                <MenuItem value="Đà Nẵng">Đà Nẵng</MenuItem>
              </Select>
              {errors.province && (
                <Typography variant="caption" color="error">
                  {errors.province.message}
                </Typography>
              )}
            </FormControl>
          )}
        />
      </Grid>

      <Grid item sx={{ width: '100%', mb: 2 }}>
        <Typography className='label-input' variant="body1">
          Quận/Huyện
        </Typography>
        <Controller
          name="district"
          control={control}
          defaultValue=""
          render={({ field }) => (
            <FormControl fullWidth className='input-auth'>
              <InputLabel>Quận/Huyện</InputLabel>
              <Select
                {...field}
                error={!!errors.district}
              >
                <MenuItem value=""><em>None</em></MenuItem>
                <MenuItem value="Quận 1">Quận 1</MenuItem>
                <MenuItem value="Quận 2">Quận 2</MenuItem>
                <MenuItem value="Quận 3">Quận 3</MenuItem>
              </Select>
              {errors.district && (
                <Typography variant="caption" color="error">
                  {errors.district.message}
                </Typography>
              )}
            </FormControl>
          )}
        />
      </Grid>

      <Grid item sx={{ width: '100%', mb: 2 }}>
        <Typography className='label-input' variant="body1">
          Xã/Phường
        </Typography>
        <Controller
          name="ward"
          control={control}
          defaultValue=""
          render={({ field }) => (
            <FormControl fullWidth className='input-auth'>
              <InputLabel>Xã/Phường</InputLabel>
              <Select
                {...field}
                error={!!errors.ward}
              >
                <MenuItem value=""><em>None</em></MenuItem>
                <MenuItem value="Phường 1">Phường 1</MenuItem>
                <MenuItem value="Phường 2">Phường 2</MenuItem>
                <MenuItem value="Phường 3">Phường 3</MenuItem>
              </Select>
              {errors.ward && (
                <Typography variant="caption" color="error">
                  {errors.ward.message}
                </Typography>
              )}
            </FormControl>
          )}
        />
      </Grid>

      <Grid item sx={{ width: '100%', mb: 1 }}>
        <Button
          className='button-auth'
          color="primary"
          type="submit"
          fullWidth
          disabled={isLoading}
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
          {isLoading ? 'Đăng ký...' : 'Đăng ký'}
        </Button>
      </Grid>

    </Grid>
  );
};

export default RegisterForm;
