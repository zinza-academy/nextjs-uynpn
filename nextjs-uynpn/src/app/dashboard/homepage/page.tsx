"use client";
import React from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import ItemParameter from "@/app/component/common/item-parameter";
import ItemChart from "@/app/component/common/item-chart";
import { Typography } from "@mui/material";
import SearchInject from "@/app/component/common/item-searchInjectPoin";

const HomePage = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >

      <Container
        sx={{ mb: 2, backgroundColor: "#F7FBFE", py: 2, mt: 2 }}
        maxWidth="xl"
      >
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <Box sx={{ flex: 1 }}>
            <ItemParameter
              imgSrc="/img/ic_register_people 1.png"
              title="Đối tượng đăng kí tiêm"
              content="11,203,873"
              unit="(lượt)"
            />
          </Box>
          <Box sx={{ flex: 1 }}>
            <ItemParameter
              imgSrc="/img/ic_injection.png"
              title="Số mũi tiêm hôm qua"
              content="1,762,119"
              unit="(mũi)"
            />
          </Box>
          <Box sx={{ flex: 1 }}>
            <ItemParameter
              imgSrc="/img/ic_injected_people.png"
              title="Số mũi đã tiêm toàn quốc"
              content="69,523,654"
              unit="(mũi)"
            />
          </Box>
        </Box>
      </Container>

      <Container sx={{
        p: 2,
        mt: 2,
          }} maxWidth="xl">
        <Grid
          container
          spacing={1}
          justifyContent="space-between"
          alignItems="center"
          sx={{
            mb: 2,
            p: 2,
            mt: 2,
            borderRadius: '16px',
            boxShadow: 'none',
            '&': {
              boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.3)'
            }
          }}
        >
          <Grid item xs={12} sm={12} md={12}>
          <ItemChart />
          <Typography variant="h6" sx={{ mt: 1 }}>
            Dữ liệu theo ngày
          </Typography>
          </Grid>
        </Grid>
      </Container>

      <Container sx={{
        mb: 2,
        p: 2,
        }} maxWidth="xl">
        <Grid
          container
          spacing={1}
          justifyContent="space-between"
          alignItems="center"
          sx={{
            mb: 2,
            p: 2,
            mt: 2,
            borderRadius: '16px',
            boxShadow: 'none',
            '&': {
              boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.3)'
            }
          }}
        >
          <Grid item xs={12} sm={12} md={12}>
            <Typography variant="h6" sx={{ mt: 1 }}>
              Tra cứu điểm tiêm theo địa bàn
            </Typography>
            <SearchInject />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default HomePage;
