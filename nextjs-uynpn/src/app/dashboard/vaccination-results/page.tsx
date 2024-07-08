"use client";
import React, { useState } from "react";
import Layout from "@/app/component/layouts/Layout";
import NavigationTabs from "@/app/component/common/navigation-tabs";
import {
  Box,
  Button,
  Container,
  Grid,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  Paper,
} from "@mui/material";
import { VaccintionResults } from "@/model/VaccineResults";

const rows: VaccintionResults[] = [
  {
    stt: 1,
    fullName: "Nguyễn Văn A",
    dob: "01/01/1990",
    gender: "Nam",
    idNumber: "123456789",
    status: "Đã đăng kí",
  },
  {
    stt: 2,
    fullName: "Trần Thị B",
    dob: "02/02/1995",
    gender: "Nữ",
    idNumber: "987654321",
    status: "Đã đăng kí",
  },
  {
    stt: 3,
    fullName: "Phạm Đình C",
    dob: "03/03/1985",
    gender: "Nam",
    idNumber: "456123789",
    status: "Đã đăng kí",
  },
];

const VaccineResults = () => {
  const [value, setValue] = useState<number>(1);
  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Layout>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          marginBottom: "500px",
        }}
      >
        <NavigationTabs value={value} onChange={handleChange} />
        <Container maxWidth="xl" sx={{ mt: 3 }}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TableContainer component={Paper}>
                <Table>
                  <TableHead>
                    <TableRow sx={{ backgroundColor: "#EEEEEE" }}>
                      <TableCell align="center" sx={{ width: "10%" }}>
                        STT
                      </TableCell>
                      <TableCell align="center" sx={{ width: "20%" }}>
                        Họ và tên
                      </TableCell>
                      <TableCell align="center" sx={{ width: "15%" }}>
                        Ngày sinh
                      </TableCell>
                      <TableCell align="center" sx={{ width: "10%" }}>
                        Giới tính
                      </TableCell>
                      <TableCell align="center" sx={{ width: "25%" }}>
                        Số CMND/CCCD/Mã định danh công dân
                      </TableCell>
                      <TableCell align="center" sx={{ width: "20%" }}>
                        Trạng thái
                      </TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {rows.map((row) => (
                      <TableRow key={row.stt}>
                        <TableCell align="center">{row.stt}</TableCell>
                        <TableCell align="center">{row.fullName}</TableCell>
                        <TableCell align="center">{row.dob}</TableCell>
                        <TableCell align="center">{row.gender}</TableCell>
                        <TableCell align="center">{row.idNumber}</TableCell>
                        <TableCell align="center">
                          {row.status === "Đã đăng kí" ? (
                            <Button
                              variant="contained"
                              sx={{
                                width: {
                                  xs: "100%",
                                  sm: "80%",
                                  md: "60%",
                                  lg: "100%",
                                },
                                height: { xs: "30px", sm: "24px" },
                                backgroundColor: "#E8EAF6",
                                border: "1px solid #3F51B5",
                                borderRadius: "15px",
                                color: "#000000",
                                fontWeight: "regular",
                                whiteSpace: "nowrap",
                                overflow: "hidden",
                                textOverflow: "ellipsis",
                                minWidth: 0,
                                maxWidth: "100%",
                              }}
                              disabled
                            >
                              Đăng kí thành công
                            </Button>
                          ) : (
                            <Button
                              variant="contained"
                              color="primary"
                              sx={{
                                width: {
                                  xs: "100%",
                                  sm: "80%",
                                  md: "60%",
                                  lg: "100%",
                                },
                                height: { xs: "30px", sm: "24px" },
                                whiteSpace: "nowrap",
                                overflow: "hidden",
                                textOverflow: "ellipsis",
                                minWidth: 0,
                                maxWidth: "100%",
                              }}
                            >
                              Đăng kí
                            </Button>
                          )}
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Layout>
  );
};

export default VaccineResults;
