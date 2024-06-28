import React from "react";
import { Box, Typography, Container, Grid } from "@mui/material";

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
      <Container
        sx={{
            marginTop: '16px',
            marginBottom: '16px',
            marginLeft: '16px',
            marginRight: '16px',
          }}
      >
        <Grid container >
          <Grid item xs={12} sm={4}>
            <Typography variant="h6">About Us</Typography>
            <Typography variant="body2">
              Information about the company, mission, values, etc.
            </Typography>
          </Grid>
          <Grid item xs={12} sm={4} sx={{ ml: "auto" }}>
            <Typography variant="h6">Follow Us</Typography>
            <Typography variant="body2">
              Links to social media profiles.
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default Footer