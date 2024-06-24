// src/components/ForgotPasswordForm.tsx
import React from 'react';
import { Box, Button, TextField, Typography } from '@mui/material';

const ForgotPasswordForm = () => {
  return (
    <Box
      component="form"
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
        Để khôi phục mật khẩu, vui lòng nhập đúng email bạn đã dùng để đăng ký (*)
      </Typography>
      <TextField label="Email" type="email" fullWidth required />
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
        >
          Quay lại
        </Button>
        <Button
          variant="contained"
          color="primary"
          type="submit"
          sx={{
            color: '#FFFFFF',
            backgroundColor: '#303F9F',
            padding: '5px 10px',
            marginLeft: '10px',
            border: '2px solid #303F9F',
            '&:hover': {
              backgroundColor: '#FFFFFF', 
              color: '#303F9F'
            },
          }}
        >
          Gửi
        </Button>
      </Box>
    </Box>
  );
};

export default ForgotPasswordForm;
