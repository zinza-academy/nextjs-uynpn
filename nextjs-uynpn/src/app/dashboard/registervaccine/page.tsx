"use client";

import ItemStepper from "@/app/component/common/item-stepper";
import Layout from "../../component/layouts/Layout";
import { Box, Container, Grid, Typography } from "@mui/material";

const RegisterVaccine = () => {
  return (
    <Layout>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Container
          sx={{ mb: 2, backgroundColor: "#F7FBFE", py: 2, height: 64 }}
          maxWidth="xl"
        >
          <Box>
            <Box sx={{ flex: 1 }}>
                <Typography variant="h5">
                    Tra cứu đăng kí tiêm
                </Typography>
            </Box>
          </Box>
        </Container>

        <Container
          sx={{
            p: 2,
            mt: 2,
          }}
          maxWidth="xl"
        >
          <Grid
            container
            spacing={1}
            justifyContent="center"
            alignItems="center"
            sx={{
              mb: 2,
              p: 2,
              mt: 2,
            }}
          >
            <Grid item xs={12} sm={12} md={12}>
                <ItemStepper />
            </Grid>
          </Grid>
        </Container>

        <Container
          sx={{
            mb: 2,
            p: 2,
          }}
          maxWidth="xl"
        >
          <Grid
            container
            spacing={1}
            justifyContent="space-between"
            alignItems="center"
            sx={{
              mb: 2,
              p: 2,
              mt: 2,
            }}
          >
            <Grid item xs={12} sm={12} md={12}>
                <Typography variant="body1">1. Thông tin người đăng kí tiêm</Typography>
                
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Layout>
  );
};

export default RegisterVaccine;
