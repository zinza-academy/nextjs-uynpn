"use client";

import ItemStepper from "@/app/component/common/item-stepper";
import Layout from "../../component/layouts/Layout";
import {
  Box,
  Container,
  Grid,
  Typography,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Button,
  TextField
} from "@mui/material";
import EastIcon from "@mui/icons-material/East";
import WestIcon from '@mui/icons-material/West';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';;
import { Controller } from "react-hook-form";
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';



const RegisterVaccine = () => {
  // Fake data for selects
  const priorityGroups = [
    { id: 1, name: "Nhóm ưu tiên 1" },
    { id: 2, name: "Nhóm ưu tiên 2" },
    { id: 3, name: "Nhóm ưu tiên 3" },
  ];

  const jobs = [
    { id: 1, name: "Bác sĩ" },
    { id: 2, name: "Y tá" },
    { id: 3, name: "Công nhân" },
  ];

  const workPlaces = [
    { id: 1, name: "Bệnh viện A" },
    { id: 2, name: "Cơ quan B" },
    { id: 3, name: "Xí nghiệp C" },
  ];

  const locations = [
    { id: 1, name: "Hà Nội" },
    { id: 2, name: "TP.HCM" },
    { id: 3, name: "Đà Nẵng" },
  ];

  const days = [
    "Thứ Hai",
    "Thứ Ba",
    "Thứ Tư",
    "Thứ Năm",
    "Thứ Sáu",
    "Thứ Bảy",
    "Chủ Nhật",
  ];

  const handleSearch = () => {
    // Placeholder function for handling search
    console.log("Searching...");
  };

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
              <Typography variant="h5">Tra cứu đăng kí tiêm</Typography>
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
      </Box>

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Container maxWidth="xl" sx={{marginBottom: 80}}>
          <Box sx={{ mt: 2 }}>
            <Grid container spacing={2}>
              {/* Grid 1 */}
              <Typography sx={{ ml: 2 }} variant="body1">
                1. Thông tin người đăng kí tiêm
              </Typography>
              <Grid item xs={12} sm={12} md={12}>
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={6} md={3}>
                    <Typography sx={{ fontWeight: "regular" }}>
                      Nhóm ưu tiên <span>(*)</span>
                    </Typography>
                    <FormControl fullWidth>
                      <InputLabel id="priority-group-label">
                        Nhóm ưu tiên
                      </InputLabel>
                      <Select
                        labelId="priority-group-label"
                        id="priority-group"
                        label="Nhóm ưu tiên"
                        defaultValue=""
                      >
                        {priorityGroups.map((group) => (
                          <MenuItem key={group.id} value={group.id}>
                            {group.name}
                          </MenuItem>
                        ))}
                      </Select>
                    </FormControl>
                  </Grid>
                  <Grid item xs={12} sm={6} md={3}>
                    <Typography sx={{ fontWeight: "regular" }}>
                      Số thẻ BHYT
                    </Typography>
                    <FormControl fullWidth>
                      <InputLabel id="bhyt-label">Số thẻ BHYT</InputLabel>
                      <Select
                        labelId="bhyt-label"
                        id="bhyt"
                        label="Số thẻ BHYT"
                        defaultValue=""
                      >
                        <MenuItem value="123456789">123456789</MenuItem>
                        <MenuItem value="987654321">987654321</MenuItem>
                      </Select>
                    </FormControl>
                  </Grid>
                </Grid>
              </Grid>

              {/* Grid 2 */}
              <Grid item xs={12} sm={12} md={12}>
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={4} md={3}>
                    <Typography sx={{ fontWeight: "regular" }}>
                      Nghề nghiệp
                    </Typography>
                    <FormControl fullWidth>
                      <InputLabel id="job-label">Nghề nghiệp</InputLabel>
                      <Select
                        labelId="job-label"
                        id="job"
                        label="Nghề nghiệp"
                        defaultValue=""
                      >
                        {jobs.map((job) => (
                          <MenuItem key={job.id} value={job.id}>
                            {job.name}
                          </MenuItem>
                        ))}
                      </Select>
                    </FormControl>
                  </Grid>
                  <Grid item xs={12} sm={4} md={3}>
                    <Typography sx={{ fontWeight: "regular" }}>
                      Đơn vị công tác
                    </Typography>
                    <FormControl fullWidth>
                      <InputLabel id="workplace-label">
                        Đơn vị công tác
                      </InputLabel>
                      <Select
                        labelId="workplace-label"
                        id="workplace"
                        label="Đơn vị công tác"
                        defaultValue=""
                      >
                        {workPlaces.map((place) => (
                          <MenuItem key={place.id} value={place.id}>
                            {place.name}
                          </MenuItem>
                        ))}
                      </Select>
                    </FormControl>
                  </Grid>
                  <Grid item xs={12} sm={4} md={3}>
                    <Typography sx={{ fontWeight: "regular" }}>
                      Địa chỉ hiện tại
                    </Typography>
                    <FormControl fullWidth>
                      <InputLabel id="location-label">
                        Địa chỉ hiện tại
                      </InputLabel>
                      <Select
                        labelId="location-label"
                        id="location"
                        label="Địa chỉ hiện tại"
                        defaultValue=""
                      >
                        {locations.map((location) => (
                          <MenuItem key={location.id} value={location.id}>
                            {location.name}
                          </MenuItem>
                        ))}
                      </Select>
                    </FormControl>
                  </Grid>
                </Grid>
              </Grid>

              {/* Grid 3 */}
              <Typography sx={{ ml: 2, mt: 3 }} variant="body1">
                2. Thông tin đăng kí tiêm chủng
              </Typography>
              <Grid item xs={12} sm={12} md={12}>
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={6} md={3}>
                    <Typography sx={{ fontWeight: "regular" }}>
                      Ngày muốn được tiêm (dự kiến)
                    </Typography>
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <DatePicker label="Ngày/Tháng/Năm" />
                    </LocalizationProvider>
                  </Grid>
                  <Grid item xs={12} sm={6} md={3}>
                    <Typography sx={{ fontWeight: "regular" }}>
                      Buổi tiêm mong muốn
                    </Typography>
                    <FormControl fullWidth>
                      <InputLabel id="session-label">
                        Buổi tiêm mong muốn
                      </InputLabel>
                      <Select
                        labelId="session-label"
                        id="session"
                        label="Buổi tiêm mong muốn"
                        defaultValue=""
                      >
                        <MenuItem value="Sáng">Sáng</MenuItem>
                        <MenuItem value="Chiều">Chiều</MenuItem>
                      </Select>
                    </FormControl>
                  </Grid>
                </Grid>
              </Grid>

              <Grid item xs={12} sm={12} md={12}>
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={6} md={12}>
                    <Typography sx={{ fontWeight: "medium", color: "#D32F2F" }}>
                      Lưu ý
                    </Typography>
                    <Typography
                      sx={{
                        fontWeight: "regular",
                        color: "#D32F2F",
                        ml: 1,
                        mt: 2,
                      }}
                    >
                      Việc đăng ký thông tin hoàn toàn bảo mật và phục vụ cho
                      chiến dịch tiêm chủng Vắc xin COVID - 19
                    </Typography>
                    <Typography
                      sx={{ fontWeight: "regular", color: "#D32F2F", ml: 1 }}
                    >
                      Xin vui lòng kiểm tra kỹ các thông tin bắt buộc(VD: Họ và
                      tên, Ngày tháng năm sinh, Số điện thoại, Số CMND/CCCD/Mã
                      định danh công dân/HC ...)
                    </Typography>
                    <Typography
                      sx={{ fontWeight: "regular", color: "#D32F2F", ml: 1 }}
                    >
                      Bằng việc nhấn nút xác nhận, bạn hoàn toàn hiểu và đồng ý
                      chịu trách nhiệm với các thông tin đã cung cấp.
                    </Typography>
                    <Typography
                      sx={{ fontWeight: "regular", color: "#D32F2F", ml: 1 }}
                    >
                      Cá nhân/Tổ chức đăng ký thành công trên hệ thống sẽ được
                      đưa vào danh sách đặt tiêm. Cơ sở y tế sẽ thông báo lịch
                      tiêm khi có vắc xin và kế hoạch tiêm được phê duyệt. Trân
                      trọng cảm ơn!
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>

              <Grid item xs={12} sm={12} md={12} mb={4}>
                <Grid container spacing={2} justifyContent="center">
                  <Grid item xs={12} sm={3} md={1.3}>
                    <Button
                      variant="contained"
                      sx={{
                        fontSize: 16,
                        fontWeight: "medium",
                        backgroundColor: "#FFFFFF",
                        color: "#303F9F",
                        mt: 2,
                        width: "100%",
                        height: 36,
                        borderRadius: "5px 5px 5px 0",
                        "&:hover": {
                          backgroundColor: "#303F9F",
                          color: "#FFFFFF",
                        },
                      }}
                    >
                      <WestIcon 
                        sx={{ 
                          mr: 2 
                        }} 
                        />
                       Hủy bỏ
                    </Button>
                  </Grid>
                  <Grid item xs={12} sm={3} md={1.3}>
                    <Button
                      variant="contained"
                      onClick={handleSearch}
                      sx={{
                        fontSize: 16,
                        fontWeight: "medium",
                        backgroundColor: "#303F9F",
                        color: "#FFFFFF",
                        mt: 2,
                        width: "100%",
                        height: 36,
                        borderRadius: "5px 5px 5px 0",
                        "&:hover": {
                          backgroundColor: "#FFFFFF",
                          color: "#303F9F",
                        },
                      }}
                    >
                      Tiếp tục <EastIcon sx={{ color: "FFFFFF", ml: 2 }} />
                    </Button>
                  </Grid>
                </Grid>
              </Grid>
              
            </Grid>
          </Box>
        </Container>
      </Box>
    </Layout>
  );
};

export default RegisterVaccine;
