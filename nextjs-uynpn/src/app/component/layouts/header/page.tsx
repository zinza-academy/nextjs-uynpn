import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  IconButton,
  Menu,
  MenuItem
} from "@mui/material";
import Link from "next/link";
import Image from "next/image";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const Header = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar
      position="static"
      sx={{
        height: 80,
        background: "linear-gradient(90deg, #ED1B23 0%, #2E3091 52%, #253494 100%)",
      }}
    >
      <Toolbar sx={{ height: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center', mx: 1.5 }}>
        <Box sx={{ width: 42, height: 50, position: 'relative' }}>
          <Image
            src="/img/Logo.png"
            alt="Login Image"
            layout="fill"
            objectFit="cover"
          />
        </Box>

        <Typography variant="h6" component="div" sx={{ flexGrow: 1, ml: 2 }}>
          <Link href="/" passHref>
            CỔNG THÔNG TIN TIÊM CHỦNG COVID-19
          </Link>
        </Typography>

        <Typography color="inherit" variant="h6" sx={{ fontSize: 16, fontWeight: 'medium', mx: 2 }}>
          <Link href="/" passHref>
            Trang chủ 
          </Link>
        </Typography>

        <Typography color="inherit" variant="h6" sx={{ fontSize: 16, fontWeight: 'medium', mx: 2 }}>
          <Link href="/contact" passHref>
            Đăng kí tiêm
          </Link>
        </Typography>

        <Typography color="inherit" variant="h6" sx={{ fontSize: 16, fontWeight: 'medium', mx: 2, display: 'flex', alignItems: 'center', cursor: 'pointer' }} onClick={handleMenuOpen}>
          Tra cứu 
          <KeyboardArrowDownIcon />
        </Typography>
        <Menu
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleMenuClose}
        >
          <MenuItem onClick={handleMenuClose}>Thông tin tiêm chủng</MenuItem>
          <MenuItem onClick={handleMenuClose}>Thông tin vaccine</MenuItem>
          <MenuItem onClick={handleMenuClose}>Thông tin mũi tiêm</MenuItem>
        </Menu>
        
        <Typography color="inherit" variant="h6" sx={{ fontSize: 16, fontWeight: 'medium', mx: 2 }}>
          <Link href="/contact" passHref>
            Tài liệu
          </Link>
        </Typography>

        <Button
          variant="contained"
          sx={{
            fontSize: 16,
            fontWeight: 'medium',
            backgroundColor: '#FFFFFF',
            color: '#303F9F',
            width: 135,
            height: 40,
            borderRadius: '5px 5px 5px 0',
            '&:hover': {
              backgroundColor: '#303F9F',
              color: '#FFFFFF',
            },
          }}
        >
          <Link href="/login" passHref>
            Đăng nhập
          </Link>
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Header