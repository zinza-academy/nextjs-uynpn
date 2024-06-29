import React from "react";
import { Box, Typography, Grid, Button } from "@mui/material";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        height: 256,
        backgroundColor: "#2D2188",
        color: "#FFFFFF",
        display: "flex",
      }}
    >
      <Grid
        container
        justifyContent="space-between"
        sx={{ mt: "16px", mb: "16px", mx: { xs: "16px", sm: "32px" } }}
      >
        <Grid item xs={12} sm={6}>
          <Typography variant="body2">
            © Bản quyền thuộc TRUNG TÂM CÔNG NGHỆ PHÒNG, CHỐNG DỊCH COVID-19
            QUỐC GIA
          </Typography>
          <Typography variant="body2" sx={{ mt: 2 }}>
            Phát triển bởi <span>Viettel</span>
          </Typography>
          <Box sx={{ width: 195, height: 89, position: "relative", mt: 2 }}>
            <Image
              src="/img/Logo2bo.png"
              alt="Login Image"
              layout="fill"
              objectFit="cover"
            />
          </Box>
        </Grid>
        <Grid
          item
          xs={12}
          sm={6}
          sx={{
            mt: { xs: 2, sm: 0 },
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-end",
          }}
        >
          <Typography variant="body2">
            Tải sổ sức khỏe điện tử để đăng ký tiêm và nhận giấy chứng nhận tiêm
          </Typography>
          <Box sx={{ mt: 2 }}>
            <Button
              variant="contained"
              sx={{
                fontSize: 16,
                fontWeight: "medium",
                backgroundColor: "#2D2188",
                color: "#FFFFFF",
                paddingX: "20px",
                paddingY: "8px",
                border: "1px solid #FFFFFF",
                borderRadius: "5px 5px 5px 0",
                "&:hover": {
                  backgroundColor: "#FFFFFF",
                  color: "#2D2188",
                },
              }}
            >
              <Link href="/login" passHref>
                App tiêm di động (Cho HCM)
              </Link>
            </Button>
            <Button
              variant="contained"
              sx={{
                fontSize: 16,
                fontWeight: "medium",
                backgroundColor: "#2D2188",
                color: "#FFFFFF",
                paddingX: "20px",
                paddingY: "8px",
                border: "1px solid #FFFFFF",
                mx: { xs: 1, sm: 2 },
                borderRadius: "5px 5px 5px 0",
                "&:hover": {
                  backgroundColor: "#FFFFFF",
                  color: "#2D2188",
                },
              }}
            >
              <Link href="/login" passHref>
                App Store
              </Link>
            </Button>
            <Button
              variant="contained"
              sx={{
                fontSize: 16,
                fontWeight: "medium",
                backgroundColor: "#2D2188",
                color: "#FFFFFF",
                paddingX: "20px",
                paddingY: "8px",
                border: "1px solid #FFFFFF",
                borderRadius: "5px 5px 5px 0",
                "&:hover": {
                  backgroundColor: "#FFFFFF",
                  color: "#2D2188",
                },
              }}
            >
              <Link href="/login" passHref>
                Google play
              </Link>
            </Button>
          </Box>
          <Box sx={{ width: 220, height: 100, position: "relative", mt: 2 }}>
            <Image
              src="/img/handle_cert 1.png"
              alt="Login Image"
              layout="fill"
              objectFit="cover"
            />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Footer;
