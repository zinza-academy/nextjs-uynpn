import React, { useState, useEffect } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  Menu,
  MenuItem,
  CircularProgress,
  Grid,
} from "@mui/material";
import Link from "next/link";
import Image from "next/image";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import EastIcon from "@mui/icons-material/East";
import { RootState, AppDispatch, useAppDispatch, useAppSelector } from "@/lib/store"; // Updated import for Redux hooks
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { fetchUser, clearUser } from "@/slice/userSlice";

const Header = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [profileAnchorEl, setProfileAnchorEl] = useState<null | HTMLElement>(null);
  const [showLoginButton, setShowLoginButton] = useState<boolean>(false);
  const token = useAppSelector((state: RootState) => state.login.token); // Access token using useAppSelector
  const dispatch: AppDispatch = useAppDispatch(); // Access dispatch using useAppDispatch
  const { user, isLoading } = useAppSelector((state) => state.user); // Access user and isLoading using useAppSelector

  useEffect(() => {
    if (token && !user) {
      dispatch(fetchUser());
    } else {
      setShowLoginButton(!token);
    }
  }, [token, user, dispatch]);

  const handleMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleProfileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setProfileAnchorEl(event.currentTarget);
  };

  const handleProfileMenuClose = () => {
    setProfileAnchorEl(null);
  };

  const handleLogout = () => {
    dispatch(clearUser());
    setShowLoginButton(true);
    handleProfileMenuClose();
  };

  return (
    <AppBar
      position="static"
      sx={{
        height: 80,
        background:
          "linear-gradient(90deg, #ED1B23 0%, #2E3091 52%, #253494 100%)",
      }}
    >
      <Toolbar
        sx={{
          height: "100%",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          mx: 1.5,
        }}
      >
        <Box sx={{ width: 42, height: 50, position: "relative" }}>
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

        <Typography
          color="inherit"
          variant="h6"
          sx={{ fontSize: 16, fontWeight: "medium", mx: 2 }}
        >
          <Link href="/" passHref>
            Trang chủ
          </Link>
        </Typography>

        <Typography
          color="inherit"
          variant="h6"
          sx={{ fontSize: 16, fontWeight: "medium", mx: 2 }}
        >
          <Link href="/contact" passHref>
            Đăng kí tiêm
          </Link>
        </Typography>

        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            cursor: "pointer",
            position: "relative",
          }}
        >
          <Typography
            color="inherit"
            variant="h6"
            sx={{
              fontSize: 16,
              fontWeight: "medium",
              mx: 2,
              display: "flex",
              alignItems: "center",
            }}
            onClick={handleMenuOpen}
          >
            Tra cứu <KeyboardArrowDownIcon />
          </Typography>
          <Menu
            sx={{ mt: 3 }}
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleMenuClose}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "right",
            }}
            transformOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
          >
            <MenuItem onClick={handleMenuClose}>
              <Grid container spacing={1} alignItems="center">
                <Grid item>
                  <Box
                    sx={{
                      bgcolor: "#ccc",
                      p: "5px",
                      borderRadius: "10%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      width: 40,
                      height: 40,
                    }}
                  >
                    <PeopleAltIcon sx={{ width: 24, height: 24, color: "purple" }} />
                  </Box>
                </Grid>
                <Grid item xs>
                  <Typography variant="h6">Thông tin cá nhân</Typography>
                  <Typography variant="body1">
                    Cập nhật nhanh và chính xác nhất
                  </Typography>
                </Grid>
                <Grid item>
                  <EastIcon sx={{ color: "purple", ml: 3 }} />
                </Grid>
              </Grid>
            </MenuItem>
            <MenuItem onClick={handleMenuClose} sx={{ mt: 2 }}>
              <Grid container spacing={1} alignItems="center">
                <Grid item>
                  <Box
                    sx={{
                      bgcolor: "#ccc",
                      p: "5px",
                      borderRadius: "10%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      width: 40,
                      height: 40,
                    }}
                  >
                    <PeopleAltIcon sx={{ width: 24, height: 24, color: "blue" }} />
                  </Box>
                </Grid>
                <Grid item xs>
                  <Typography variant="h6">Thông tin tiêm chủng</Typography>
                  <Typography variant="body1">
                    Cập nhật nhanh và chính xác nhất
                  </Typography>
                </Grid>
                <Grid item>
                  <EastIcon sx={{ color: "blue", ml: 3 }} />
                </Grid>
              </Grid>
            </MenuItem>
          </Menu>
        </Box>

        <Typography
          color="inherit"
          variant="h6"
          sx={{ fontSize: 16, fontWeight: "medium", mx: 2 }}
        >
          <Link href="/contact" passHref>
            Tài liệu
          </Link>
        </Typography>

        {showLoginButton ? (
          <Button
            variant="contained"
            sx={{
              fontSize: 16,
              fontWeight: "medium",
              backgroundColor: "#FFFFFF",
              color: "#303F9F",
              width: 135,
              height: 40,
              borderRadius: "5px 5px 5px 0",
              "&:hover": {
                backgroundColor: "#303F9F",
                color: "#FFFFFF",
              },
            }}
          >
            <Link href="/login" passHref>
              Đăng nhập
            </Link>
          </Button>
        ) : (
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              cursor: "pointer",
              position: "relative",
            }}
          >
            <Typography
              color="inherit"
              variant="h6"
              sx={{ fontSize: 16, fontWeight: "medium", mx: 2, display: 'flex', alignItems: 'center' }}
              onClick={handleProfileMenuOpen}
            >
              {isLoading ? <CircularProgress size={24} /> : user?.name}
              <AccountCircleIcon sx={{ ml: 1 }} />
            </Typography>
            <Menu
              sx={{ mt: 3 }}
              anchorEl={profileAnchorEl}
              open={Boolean(profileAnchorEl)}
              onClose={handleProfileMenuClose}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "right",
              }}
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
            >
              <MenuItem onClick={handleProfileMenuClose}>
                Thông tin cá nhân
              </MenuItem>
              <MenuItem onClick={handleLogout}>
                Đăng xuất
              </MenuItem>
            </Menu>
          </Box>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Header;
