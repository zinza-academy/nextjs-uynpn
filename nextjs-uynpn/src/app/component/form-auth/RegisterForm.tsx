import React, { useState } from 'react';
import { Box, Button, Grid, TextField, Typography, Select, MenuItem, FormControl, InputLabel } from '@mui/material';
import { useRouter } from 'next/navigation'; 
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/lib/store';
import { requestSuccess, sendRequest } from '@/slice/registerSlice';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { Register } from '@/model/Register';
import "@/styles/app.css"
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import dayjs, { Dayjs } from 'dayjs';
import { styled } from '@mui/material/styles';

//fake data
const provinces = [
  { id: 1, name: 'Hà Nội' },
  { id: 2, name: 'Hồ Chí Minh' },
  { id: 3, name: 'Đà Nẵng' },
];

const districts: { [key: string]: { id: number; name: string; }[] } = {
  'Hà Nội': [
    { id: 11, name: 'Quận 1' },
    { id: 12, name: 'Quận 2' },
    { id: 13, name: 'Quận 3' },
  ],
  'Hồ Chí Minh': [
    { id: 21, name: 'Quận Gò Vấp' },
    { id: 22, name: 'Quận Tân Bình' },
    { id: 23, name: 'Quận 10' },
  ],
  'Đà Nẵng': [
    { id: 31, name: 'Quận Hải Châu' },
    { id: 32, name: 'Quận Thanh Khê' },
    { id: 33, name: 'Quận Sơn Trà' },
  ],
};

const wards: { [key: string]: { id: number; name: string; }[] } = {
  'Quận 1': [
    { id: 111, name: 'Phường Bến Nghé' },
    { id: 112, name: 'Phường Nguyễn Thái Bình' },
  ],
  'Quận 2': [
    { id: 121, name: 'Phường Thảo Điền' },
    { id: 122, name: 'Phường An Phú' },
  ],
  'Quận 3': [
    { id: 131, name: 'Phường 1' },
    { id: 132, name: 'Phường 2' },
  ],
  'Quận Gò Vấp': [
    { id: 211, name: 'Phường 1' },
    { id: 212, name: 'Phường 2' },
  ],
  'Quận Tân Bình': [
    { id: 221, name: 'Phường 10' },
    { id: 222, name: 'Phường 11' },
  ],
  'Quận 10': [
    { id: 231, name: 'Phường 1' },
    { id: 232, name: 'Phường 2' },
  ],
  'Quận Hải Châu': [
    { id: 311, name: 'Phường Thanh Bình' },
    { id: 312, name: 'Phường Thuận Phước' },
  ],
  'Quận Thanh Khê': [
    { id: 321, name: 'Phường An Khê' },
    { id: 322, name: 'Phường Hòa Khê' },
  ],
  'Quận Sơn Trà': [
    { id: 331, name: 'Phường Mỹ An' },
    { id: 332, name: 'Phường An Hải Bắc' },
  ],
};

const StyledTextField = styled(TextField)({
  width: '200px',
  
});

const validationSchema = yup.object().shape({
  cmnd: yup.string().required('Số CMND/CCCD không được để trống').length(9 || 12, 'Số CMND/CCCD phải có đúng 12 số'),
  email: yup.string().email('Email không hợp lệ').required('Email không được để trống'),
  password: yup.string().required('Mật khẩu không được để trống'),
  name: yup.string().required('Họ và tên không được để trống'),
  dob: yup.date().required('Ngày sinh không được để trống'),
  gender: yup.string().required('Giới tính không được để trống'),
  province: yup.string().required('Tỉnh không được để trống'), 
  district: yup.string().required('Huyện không được để trống'),
  ward: yup.string().required('Xã không được để trống')
});

const RegisterForm = () => {
  const { control, handleSubmit, formState: { errors }, setValue, watch } = useForm<Register>({
    resolver: yupResolver(validationSchema),
    defaultValues: {
      cmnd: '',
      email: '',
      password: '',
      name: '',
      dob: '',
      gender: '',
      province: '',
      district: '',
      ward: '',
    },
  });
  

  const [selectedProvince, setSelectedProvince] = useState<string | null>(null);
  const [selectedDistrict, setSelectedDistrict] = useState<string | null>(null);
  const router = useRouter();
  const dispatch = useDispatch();
  const isLoading = useSelector((state: RootState) => state.register.isLoading);

  const onSubmit = (data: Register) => {
    console.log("thông tin đăng kí", data)
    dispatch(sendRequest());
    setTimeout(() => {
      dispatch(requestSuccess());
      router.push('/login');
    }, 2000);
  };

  // select theo tỉnh
  const handleProvinceChange = (value: string) => {
    setSelectedProvince(value);
    setValue('province', value);
    setSelectedDistrict(null);
    setValue('district', '');
    setValue('ward', '');
  };

  const handleDistrictChange = (value: string) => {
    setSelectedDistrict(value);
    setValue('district', value);
    setValue('ward', '');
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
        render={({ field }) => (
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker
              {...field}
              value={field.value ? dayjs(field.value) : null}
              onChange={(date: Dayjs | null) => field.onChange(date ? date.toDate() : null)}
              renderInput={(params: any) => (
                <StyledTextField
                  className="fullWidthInput" 
                  sx={{ paddingRight: '1000' }} 
                  fullWidth
                  {...params}
                  error={!!errors.dob}
                  helperText={errors.dob ? errors.dob.message : ''}
                />
              )}
            />
          </LocalizationProvider>
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
          Tỉnh/Thành phố <Box component="span" sx={{ color: 'red' }}>(*)</Box>
        </Typography>
        <Controller
          name="province"
          control={control}
          defaultValue=""
          render={({ field }) => (
            <FormControl fullWidth className='input-auth'>
              <Select
                {...field}
                error={!!errors.province}
                onChange={(e) => handleProvinceChange(e.target.value)}
              >
                <MenuItem value=""><em>Chọn Tỉnh/Thành phố</em></MenuItem>
                {provinces.map((province) => (
                  <MenuItem key={province.id} value={province.name}>{province.name}</MenuItem>
                ))}
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
          Quận/Huyện <Box component="span" sx={{ color: 'red' }}>(*)</Box>
        </Typography>
        <Controller
          name="district"
          control={control}
          defaultValue=""
          render={({ field }) => (
            <FormControl fullWidth className='input-auth'>
              <Select
                {...field}
                error={!!errors.district}
                onChange={(e) => handleDistrictChange(e.target.value)}
              >
                <MenuItem value=""><em>Chọn Quận/Huyện</em></MenuItem>
                {selectedProvince && districts[selectedProvince]?.map((district) => (
                  <MenuItem key={district.id} value={district.name}>{district.name}</MenuItem>
                ))}
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
          Xã/Phường <Box component="span" sx={{ color: 'red' }}>(*)</Box>
        </Typography>
        <Controller
          name="ward"
          control={control}
          defaultValue=""
          render={({ field }) => (
            <FormControl fullWidth className='input-auth'>
              <Select
                {...field}
                error={!!errors.ward}
              >
                <MenuItem value=""><em>Chọn Xã/Phường</em></MenuItem>
                {selectedDistrict && wards[selectedDistrict]?.map((ward) => (
                  <MenuItem key={ward.id} value={ward.name}>{ward.name}</MenuItem>
                ))}
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
          {isLoading ? 'Đang xử lý...' : 'Đăng ký'}
        </Button>
      </Grid>

    </Grid>
  );
};

export default RegisterForm;
