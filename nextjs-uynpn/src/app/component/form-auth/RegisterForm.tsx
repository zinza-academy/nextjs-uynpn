'use client';

import React, { useState, useEffect } from 'react';
import { Box, Button, Grid, TextField, Typography, Select, MenuItem, FormControl, InputLabel } from '@mui/material';
import { useRouter } from 'next/navigation'; // Đổi từ 'next/router' sang 'next/navigation'
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/lib/store';
import { requestSuccess, sendRequest } from '@/slice/registerSlice';
import '@/styles/app.css'
import { SelectChangeEvent } from '@mui/material/Select'; // Import SelectChangeEvent

const RegisterForm = () => {

  const router = useRouter();
  const dispatch = useDispatch();
  const isLoading = useSelector((state: RootState) => state.register.isLoading);

  // State để lưu trữ giá trị của các input
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [cmnd, setCmnd] = useState('');
  const [name, setName] = useState('');
  const [dob, setDob] = useState('');
  const [gender, setGender] = useState('');
  const [province, setProvince] = useState('');
  const [district, setDistrict] = useState('');
  const [ward, setWard] = useState('');

  const [isSubmitDisabled, setIsSubmitDisabled] = useState(true);

  const [touchedEmail, setTouchedEmail] = useState(false);
  const [touchedPassword, setTouchedPassword] = useState(false);
  const [touchedCmnd, setTouchedCmnd] = useState(false);
  const [touchedName, setTouchedName] = useState(false);
  const [touchedDob, setTouchedDob] = useState(false);
  const [touchedGender, setTouchedGender] = useState(false);
  const [touchedProvince, setTouchedProvince] = useState(false);
  const [touchedDistrict, setTouchedDistrict] = useState(false);
  const [touchedWard, setTouchedWard] = useState(false);

  useEffect(() => {
    validateForm(email, password, cmnd, name, dob, gender, province, district, ward);
  }, [email, password, cmnd, name, dob, gender, province, district, ward]);

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setEmail(value);
  };

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setPassword(value);
  };

  const handleCmndChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setCmnd(value);
  };

  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setName(value);
  };

  const handleDobChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setDob(value);
  };

  const handleGenderChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setGender(value);
  };

  const handleProvinceChange = (event: SelectChangeEvent<string>) => {
    const value = event.target.value as string;
    setProvince(value);
  };

  const handleDistrictChange = (event: SelectChangeEvent<string>) => {
    const value = event.target.value as string;
    setDistrict(value);
  };

  const handleWardChange = (event: SelectChangeEvent<string>) => {
    const value = event.target.value as string;
    setWard(value);
  };

  const handleBlur = (field: string) => {
    if (field === 'email') {
      setTouchedEmail(true);
    } else if (field === 'password') {
      setTouchedPassword(true);
    } else if (field === 'cmnd') {
      setTouchedCmnd(true);
    } else if (field === 'name') {
      setTouchedName(true);
    } else if (field === 'dob') {
      setTouchedDob(true);
    } else if (field === 'gender') {
      setTouchedGender(true);
    } else if (field === 'province') {
      setTouchedProvince(true);
    } else if (field === 'district') {
      setTouchedDistrict(true);
    } else if (field === 'ward') {
      setTouchedWard(true);
    }
  };

  const validateForm = (email: string, password: string, cmnd: string, name: string, dob: string, gender: string, province: string, district: string, ward: string) => {
    if (email.trim() !== '' && password.trim() !== '' && cmnd.trim() !== '' && name.trim() !== '' && dob.trim() !== '' && gender.trim() !== '' && province !== '' && district !== '' && ward !== '') {
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
      router.push('/login');
    }, 2000);
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
        <Typography className='header' variant="h5" sx={{ mb: 3, fontSize: 34, textAlign: 'center', fontWeight: 'bold' }}>
          Đăng ký tài khoản
        </Typography>
      </Grid>

      <Grid item sx={{ width: '100%', mb: 2 }}>
        <Typography className='label-input' variant="body1">
          Số CMND/CCCD <Box component="span" sx={{ color: 'red' }}>(*)</Box>
        </Typography>
        <TextField
          className='input-auth'
          placeholder='Số CMND/CCCD'
          fullWidth
          required
          value={cmnd}
          onChange={handleCmndChange}
          onBlur={() => handleBlur('cmnd')}
          error={touchedCmnd && cmnd.trim() === ''}
          helperText={touchedCmnd && cmnd.trim() === '' ? 'Số CMND/CCCD không được để trống' : ''}
        />
      </Grid>

      <Grid item sx={{ width: '100%', mb: 2 }}>
        <Typography className='label-input' variant="body1">
          Email <Box component="span" sx={{ color: 'red' }}>(*)</Box>
        </Typography>
        <TextField
          className='input-auth'
          placeholder='Email'
          type="email"
          fullWidth
          required
          value={email}
          onChange={handleEmailChange}
          onBlur={() => handleBlur('email')}
          error={touchedEmail && email.trim() === ''}
          helperText={touchedEmail && email.trim() === '' ? 'Email không được để trống' : ''}
        />
      </Grid>

      <Grid item sx={{ width: '100%', mb: 2 }}>
        <Typography className='label-input' variant="body1">
          Mật khẩu <Box component="span" sx={{ color: 'red' }}>(*)</Box>
        </Typography>
        <TextField
          className='input-auth'
          placeholder='Mật khẩu'
          type="password"
          fullWidth
          required
          value={password}
          onChange={handlePasswordChange}
          onBlur={() => handleBlur('password')}
          error={touchedPassword && password.trim() === ''}
          helperText={touchedPassword && password.trim() === '' ? 'Mật khẩu không được để trống' : ''}
        />
      </Grid>

      <Grid item sx={{ width: '100%', mb: 2 }}>
        <Typography className='label-input' variant="body1">
          Họ và tên <Box component="span" sx={{ color: 'red' }}>(*)</Box>
        </Typography>
        <TextField
          className='input-auth'
          placeholder='Họ và tên'
          fullWidth
          required
          value={name}
          onChange={handleNameChange}
          onBlur={() => handleBlur('name')}
          error={touchedName && name.trim() === ''}
          helperText={touchedName && name.trim() === '' ? 'Họ và tên không được để trống' : ''}
        />
      </Grid>

      <Grid item sx={{ width: '100%', mb: 2 }}>
        <Typography className='label-input' variant="body1">
          Ngày sinh <Box component="span" sx={{ color: 'red' }}>(*)</Box>
        </Typography>
        <TextField
          className='input-auth'
          placeholder='Ngày/Tháng/Năm'
          fullWidth
          required
          value={dob}
          onChange={handleDobChange}
          onBlur={() => handleBlur('dob')}
          error={touchedDob && dob.trim() === ''}
          helperText={touchedDob && dob.trim() === '' ? 'Ngày sinh không được để trống' : ''}
        />
      </Grid>

      <Grid item sx={{ width: '100%', mb: 2 }}>
        <Typography className='label-input' variant="body1">
          Giới tính <Box component="span" sx={{ color: 'red' }}>(*)</Box>
        </Typography>
        <TextField
          className='input-auth'
          placeholder='Giới tính'
          fullWidth
          required
          value={gender}
          onChange={handleGenderChange}
          onBlur={() => handleBlur('gender')}
          error={touchedGender && gender.trim() === ''}
          helperText={touchedGender && gender.trim() === '' ? 'Giới tính không được để trống' : ''}
        />
      </Grid>

      <Grid item sx={{ width: '100%', mb: 2 }}>
        <Typography className='label-input' variant="body1">
          Tỉnh/Thành phố <Box component="span" sx={{ color: 'red' }}>(*)</Box>
        </Typography>
        <FormControl fullWidth required className='input-auth'>
          <InputLabel>Tỉnh/Thành phố</InputLabel>
          <Select
            value={province}
            onChange={handleProvinceChange}
            onBlur={() => handleBlur('province')}
            error={touchedProvince && province === ''}
          >
            <MenuItem value=""><em>None</em></MenuItem>
            <MenuItem value="Hà Nội">Hà Nội</MenuItem>
            <MenuItem value="Hồ Chí Minh">Hồ Chí Minh</MenuItem>
            <MenuItem value="Đà Nẵng">Đà Nẵng</MenuItem>
          </Select>
          {touchedProvince && province === '' && (
            <Typography variant="caption" color="error">
              Tỉnh/Thành phố không được để trống
            </Typography>
          )}
        </FormControl>
      </Grid>

      <Grid item sx={{ width: '100%', mb: 2 }}>
        <Typography className='label-input' variant="body1">
          Quận/Huyện <Box component="span" sx={{ color: 'red' }}>(*)</Box>
        </Typography>
        <FormControl fullWidth required className='input-auth'>
          <InputLabel>Quận/Huyện</InputLabel>
          <Select
            value={district}
            onChange={handleDistrictChange}
            onBlur={() => handleBlur('district')}
            error={touchedDistrict && district === ''}
          >
            <MenuItem value=""><em>None</em></MenuItem>
            <MenuItem value="Quận 1">Quận 1</MenuItem>
            <MenuItem value="Quận 2">Quận 2</MenuItem>
            <MenuItem value="Quận 3">Quận 3</MenuItem>
          </Select>
          {touchedDistrict && district === '' && (
            <Typography variant="caption" color="error">
              Quận/Huyện không được để trống
            </Typography>
          )}
        </FormControl>
      </Grid>

      <Grid item sx={{ width: '100%', mb: 2 }}>
        <Typography className='label-input' variant="body1">
          Xã/Phường <Box component="span" sx={{ color: 'red' }}>(*)</Box>
        </Typography>
        <FormControl fullWidth required className='input-auth'>
          <InputLabel>Xã/Phường</InputLabel>
          <Select
            value={ward}
            onChange={handleWardChange}
            onBlur={() => handleBlur('ward')}
            error={touchedWard && ward === ''}
          >
            <MenuItem value=""><em>None</em></MenuItem>
            <MenuItem value="Phường 1">Phường 1</MenuItem>
            <MenuItem value="Phường 2">Phường 2</MenuItem>
            <MenuItem value="Phường 3">Phường 3</MenuItem>
          </Select>
          {touchedWard && ward === '' && (
            <Typography variant="caption" color="error">
              Xã/Phường không được để trống
            </Typography>
          )}
        </FormControl>
      </Grid>

      <Grid item sx={{ width: '100%', mb: 1 }}>
        <Button
          className='button-auth'
          color="primary"
          type="submit"
          fullWidth
          disabled={isSubmitDisabled || isLoading}
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
