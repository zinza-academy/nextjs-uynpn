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
import { Province } from '@/model/Province';

//fake data
type LocationData = Province[];
const locationData: LocationData = [
  {
    id: 1,
    name: "Hà Nội",
    districts: [
      {
        id: 1,
        name: "Ba Đình",
        provinceId: 1,
        wards: [
          { id: 1, name: "Phúc Xá" },
          { id: 2, name: "Trúc Bạch" },
          { id: 3, name: "Vĩnh Phúc" },
        ],
      },
      {
        id: 2,
        name: "Cầu Giấy",
        provinceId: 1,
        wards: [
          { id: 1, name: "Nghĩa Đô" },
          { id: 2, name: "Nghĩa Tân" },
          { id: 3, name: "Mai Dịch" },
        ],
      },
    ],
  },
  {
    id: 2,
    name: "Hồ Chí Minh",
    districts: [
      {
        id: 1,
        name: "Quận 1",
        provinceId: 2,
        wards: [
          { id: 1, name: "Bến Nghé" },
          { id: 2, name: "Bến Thành" },
          { id: 3, name: "Cầu Kho" },
        ],
      },
      {
        id: 2,
        name: "Quận 2",
        provinceId: 2,
        wards: [
          { id: 1, name: "An Phú" },
          { id: 2, name: "Thảo Điền" },
          { id: 3, name: "Bình An" },
        ],
      },
    ],
  },
];

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
      province: 0,
      district: 0,
      ward: 0,
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

  const handleProvinceChange = (value: number) => {
    setSelectedProvince(value);
    const selectedProvinceData = locationData.find(province => province.id === value);
    if (selectedProvinceData) {
      setValue('province', selectedProvinceData.id);
      setValue('district', 0);
      setValue('ward', 0);
    }
    setSelectedDistrict(null);
  };

  const handleDistrictChange = (value: number) => {
    setSelectedDistrict(value);
    const selectedProvinceData = locationData.find(province => province.id === selectedProvince);
    if (selectedProvinceData) {
      const selectedDistrictData = selectedProvinceData.districts.find(district => district.id === value);
      if (selectedDistrictData) {
        setValue('district', selectedDistrictData.id);
        setValue('ward', 0);
      }
    }
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
          render={({ field }) => (
            <FormControl fullWidth error={!!errors.province}>
              <Select
                {...field}
                value={field.value || ''}
                onChange={(e) => handleProvinceChange(Number(e.target.value))}
              >
                {locationData.map(province => (
                  <MenuItem key={province.id} value={province.id}>
                    {province.name}
                  </MenuItem>
                ))}
              </Select>
              <Typography variant="caption" color="error">
                {errors.province ? errors.province.message : ''}
              </Typography>
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
          render={({ field }) => (
            <FormControl fullWidth error={!!errors.district}>
              <Select
                {...field}
                value={field.value || ''}
                onChange={(e) => handleDistrictChange(Number(e.target.value))}
                disabled={!selectedProvince}
              >
                {selectedProvince &&
                  locationData.find(province => province.id === Number(selectedProvince))?.districts.map(district => (
                    <MenuItem key={district.id} value={district.id}>
                      {district.name}
                    </MenuItem>
                  ))}
              </Select>
              <Typography variant="caption" color="error">
                {errors.district ? errors.district.message : ''}
              </Typography>
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
          render={({ field }) => (
            <FormControl fullWidth error={!!errors.ward}>
              <Select
                {...field}
                value={field.value || ''}
                onChange={(e) => setValue('ward', e.target.value)}
                disabled={!selectedDistrict}
              >
                {selectedDistrict &&
                  locationData
                    .find(province => province.id === Number(selectedProvince))
                    ?.districts.find(district => district.id === Number(selectedDistrict))
                    ?.wards.map(ward => (
                      <MenuItem key={ward.id} value={ward.id}>
                        {ward.name}
                      </MenuItem>
                    ))}
              </Select>
              <Typography variant="caption" color="error">
                {errors.ward ? errors.ward.message : ''}
              </Typography>
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
