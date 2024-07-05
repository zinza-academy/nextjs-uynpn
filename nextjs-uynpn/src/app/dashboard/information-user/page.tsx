"use client";
import Layout from "@/app/component/layouts/Layout";
import {
  Box,
  Container,
  Typography,
  Grid,
  Table,
  TableContainer,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Paper,
  Divider,
  Button,
} from "@mui/material";
import Image from "next/image";

const InformationUser = () => {
  const rows = [
    {
      stt: 1,
      thoiGianTiem: "10/07/2024",
      tenVaccine: "Pfizer-BioNTech",
      soLo: "ABC123",
      noiTiem: "Bệnh viện A",
    },
    {
      stt: 2,
      thoiGianTiem: "15/07/2024",
      tenVaccine: "Moderna",
      soLo: "DEF456",
      noiTiem: "Bệnh viện B",
    },
    {
      stt: 3,
      thoiGianTiem: "20/07/2024",
      tenVaccine: "AstraZeneca",
      soLo: "GHI789",
      noiTiem: "Bệnh viện C",
    },
  ];

  const vaccineCount = rows.length;
  const backgroundColor = vaccineCount >= 2 ? "#43A047" : "#FFD700";

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
        <Container sx={{ mb: 2, py: 2, height: 64 }} maxWidth="xl">
          <Grid container spacing={2}>
            <Grid item xs={12} sm={2}>
              <Typography variant="body1">Chứng nhận tiêm chủng</Typography>
            </Grid>
            <Grid item xs={12} sm={1.5}>
              <Typography variant="body1">Kết quả đăng kí</Typography>
            </Grid>
            <Grid item xs={12} sm={1.5}>
              <Typography variant="body1">Tài khoản</Typography>
            </Grid>
          </Grid>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={12}>
              <Divider sx={{ height: 3, backgroundColor: "#EEEEEE", mt: 2 }} />
            </Grid>
          </Grid>
        </Container>

        <Container sx={{ mb: 2, mt: 3 }} maxWidth="xl">
          <Grid
            container
            spacing={3}
            sx={{ display: "flex", justifyContent: "space-between" }}
          >
            <Grid item xs={12} sm={9}>
              <Grid item xs={12} sm={12} textAlign={"center"}>
                <Typography variant="body1">
                  CỘNG HÒA XÃ HỘI CHỦ NGHĨA VIỆT NAM
                </Typography>
                <Typography variant="body1" sx={{ fontWeight: "500" }}>
                  Độc lập - Tự do - Hạnh phúc
                </Typography>
              </Grid>
              <Grid item xs={12} sm={12} textAlign={"center"}>
                <Typography variant="h6">
                  CHỨNG NHẬN TIÊM CHỦNG COVID-19
                </Typography>
              </Grid>
              <Grid container xs={12} sm={12} sx={{ mt: 4 }}>
                <Grid item xs={12} sm={3}>
                  <Typography variant="body1">Họ và tên</Typography>
                  <Typography variant="body1" sx={{ fontWeight: "600", mt: 1 }}>
                    Phạm Ngọc Uyn
                  </Typography>
                </Grid>
                <Grid item xs={12} sm={3}>
                  <Typography variant="body1">Ngày sinh</Typography>
                  <Typography variant="body1" sx={{ fontWeight: "600", mt: 1 }}>
                    05/09/2002
                  </Typography>
                </Grid>
                <Grid item xs={12} sm={3}>
                  <Typography variant="body1">Số CMND/CCCD</Typography>
                  <Typography variant="body1" sx={{ fontWeight: "600", mt: 1 }}>
                    030012345678
                  </Typography>
                </Grid>
                <Grid item xs={12} sm={3}>
                  <Typography variant="body1">Số thẻ BHYT</Typography>
                  <Typography variant="body1" sx={{ fontWeight: "600", mt: 1 }}>
                    030094005102
                  </Typography>
                </Grid>
              </Grid>
              <Grid item xs={12} sm={12} sx={{ mt: 3 }}>
                <Typography variant="body1">Địa chỉ</Typography>
                <Typography variant="body1" sx={{ fontWeight: "600", mt: 1 }}>
                  Phường Giang Biên - Quận Long Biên - Thành phố Hà Nội
                </Typography>
              </Grid>
              <Grid item xs={12} sm={12} sx={{ mt: 3 }}>
                <Typography variant="body1">Kết luận</Typography>
                <Typography variant="body1" sx={{ fontWeight: "600", mt: 1 }}>
                  Đã được tiêm phòng vắc xin phòng bệnh Covid-19
                </Typography>
              </Grid>
              <Grid item xs={12} sm={12} sx={{ mt: 3 }}>
                <TableContainer component={Paper}>
                  <Table>
                    <TableHead>
                      <TableRow sx={{ backgroundColor: "#EEEEEE" }}>
                        <TableCell align="center">STT</TableCell>
                        <TableCell align="center">Thời gian tiêm</TableCell>
                        <TableCell align="center">Tên vaccine</TableCell>
                        <TableCell align="center">Số lô</TableCell>
                        <TableCell align="center">Nơi tiêm</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {rows.map((row) => (
                        <TableRow key={row.stt}>
                          <TableCell align="center">{row.stt}</TableCell>
                          <TableCell align="center">
                            {row.thoiGianTiem}
                          </TableCell>
                          <TableCell align="center">{row.tenVaccine}</TableCell>
                          <TableCell align="center">{row.soLo}</TableCell>
                          <TableCell align="center">{row.noiTiem}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </TableContainer>
              </Grid>
              <Grid item xs={12} sm={12} sx={{ mt: 5 }} textAlign={"center"}>
                <Button
                  type="submit"
                  variant="contained"
                  sx={{
                    fontSize: 16,
                    fontWeight: "medium",
                    backgroundColor: "#303F9F",
                    color: "#FFFFFF",
                    mt: 2,
                    ml: 2,
                    width: "auto",
                    height: 36,
                    borderRadius: "5px 5px 5px 0",
                    "&:hover": {
                      backgroundColor: "#FFFFFF",
                      color: "#303F9F",
                    },
                  }}
                >
                  Đăng kí mũi tiêm tiếp theo
                </Button>
              </Grid>
            </Grid>
            <Grid
              container
              xs={12}
              sm={2.8}
              sx={{
                backgroundColor: backgroundColor,
                mt: 2,
                borderRadius: "10px",
                height: "700px",
              }}
            >
              <Grid
                xs={12}
                sm={12}
                sx={{ height: "100px", mt: 3 }}
                container
                justifyContent="center"
              >
                <Grid
                  item
                  xs={12}
                  sm={12}
                  sx={{ mt: 3 }}
                  container
                  justifyContent={"center"}
                >
                  <Image
                    src="/img/logo_byt.png"
                    alt="Check Circle"
                    width={100}
                    height={100}
                  />
                </Grid>
                <Grid
                  item
                  xs={12}
                  sm={12}
                  sx={{ mt: 3 }}
                  container
                  justifyContent={"center"}
                >
                  <Typography variant="h5" sx={{ color: "white" }}>
                    ĐÃ TIÊM 2 MŨI VẮC XIN
                  </Typography>
                </Grid>
                <Grid
                  item
                  xs={12}
                  sm={12}
                  sx={{ mt: 3 }}
                  container
                  justifyContent={"center"}
                >
                  <Image
                    src="/img/qr.png"
                    alt="Check Circle"
                    width={196}
                    height={196}
                  />
                </Grid>
                <Grid
                  xs={12}
                  sm={12}
                  sx={{ mt: 3 }}
                  container
                  justifyContent="center"
                >
<Box
                      sx={{
                        width: "292px",
                        height: "220px",
                        backgroundColor: "white",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "center",
                        borderRadius: 1,
                        boxShadow: 3,
                        padding: 2,
                      }}
                    >
                      <Grid container xs={12} sm={12} sx={{}}>
                        <Grid container xs={12} sm={12}>
                          <Grid item xs={12} sm={2}>
                            <Image
                              src="/img/person.png"
                              alt="Check Circle"
                              width={24}
                              height={24}
                            />
                          </Grid>
                          <Grid item xs={12} sm={10}>
                            <Typography variant="body1">Họ và tên</Typography>
                            <Typography
                              variant="body1"
                              sx={{ fontWeight: "600" }}
                            >
                              Phạm Ngọc Uyn
                            </Typography>
                          </Grid>
                        </Grid>
                        <Grid container xs={12} sm={12}>
                          <Grid item xs={12} sm={2}>
                            <Image
                              src="/img/date_range.png"
                              alt="Check Circle"
                              width={24}
                              height={24}
                            />
                          </Grid>
                          <Grid item xs={12} sm={10}>
                            <Typography variant="body1">Ngày sinh</Typography>
                            <Typography
                              variant="body1"
                              sx={{ fontWeight: "600" }}
                            >
                              16/10/1999
                            </Typography>
                          </Grid>
                        </Grid>
                        <Grid container xs={12} sm={12}>
                          <Grid item xs={12} sm={2}>
                            <Image
                              src="/img/featured_video.png"
                              alt="Check Circle"
                              width={24}
                              height={24}
                            />
                          </Grid>
                          <Grid item xs={12} sm={10}>
                            <Typography variant="body1">
                              Số CMND/CCCD
                            </Typography>
                            <Typography
                              variant="body1"
                              sx={{ fontWeight: "600" }}
                            >
                              030012345678
                            </Typography>
                          </Grid>
                        </Grid>
                      </Grid>
                    </Box>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Layout>
  );
};

export default InformationUser;
