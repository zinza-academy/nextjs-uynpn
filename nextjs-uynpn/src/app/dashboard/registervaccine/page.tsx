// RegisterVaccine.tsx
"use client";
import React, { useState } from "react";
import ItemStepper from "@/app/component/common/item-stepper";
import Layout from "@/app/component/layouts/Layout";
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
  TextField,
  FormHelperText,
  colors,
} from "@mui/material";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { RegisterVaccines } from "@/model/RegisterVaccines";
import EastIcon from "@mui/icons-material/East";
import WestIcon from "@mui/icons-material/West";

// Validation schema using yup
const schema = yup.object().shape({
  priorityGroup: yup.string().required("Nhóm ưu tiên là bắt buộc"),
  bhyt: yup.string(),
  job: yup.string(),
  workplace: yup.string(),
  location: yup.string(),
  vaccinationDate: yup.date(),
  vaccinationSession: yup.string(),
});

const defaultValues: RegisterVaccines = {
  priorityGroup: "",
  bhyt: "",
  job: "",
  workplace: "",
  location: "",
  vaccinationDate: null,
  vaccinationSession: "",
};

const RegisterVaccine = () => {
  const [activeStep, setActiveStep] = useState<number>(0);
  const {
    control,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues,
  });

  const onSubmit = async (data: RegisterVaccines) => {
    console.log("data:", data);
    handleNextStep();
  };

  const handleNextStep = () => {
    setActiveStep((prevStep) => prevStep + 1);
    console.log("step tiếp theo");
  };

  const handleBackStep = () => {
    setActiveStep((prevStep) => prevStep - 1);
    console.log("quay lại step trước");
  };

  const steps = [
    "Thông tin người đăng ký tiêm",
    "Phiếu đồng ý tiêm",
    "Hoàn thành",
  ];

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

  return (
    <Layout>
      <form onSubmit={handleSubmit(onSubmit)}>
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
                <ItemStepper activeStep={activeStep} steps={steps} />
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
          <Container maxWidth="xl" sx={{ marginBottom: 80 }}>
            <Box sx={{ mt: 2 }}>
              <Grid container spacing={2}>
                <Typography sx={{ ml: 2 }} variant="body1">
                  1. Thông tin người tiêm
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
                        <Controller
                          name="priorityGroup"
                          control={control}
                          render={({ field }) => (
                            <Select
                              {...field}
                              labelId="priority-group-label"
                              id="priority-group"
                              label="Nhóm ưu tiên"
                            >
                              {priorityGroups.map((group) => (
                                <MenuItem key={group.id} value={group.name}>
                                  {group.name}
                                </MenuItem>
                              ))}
                            </Select>
                          )}
                        />
                        {!!errors.priorityGroup && (
                          <FormHelperText sx={{ color: "red" }}>
                            {errors.priorityGroup.message}
                          </FormHelperText>
                        )}
                      </FormControl>
                    </Grid>
                    <Grid item xs={12} sm={6} md={3}>
                      <Typography sx={{ fontWeight: "regular" }}>
                        Số thẻ BHYT
                      </Typography>
                      <FormControl fullWidth>
                        <InputLabel id="bhyt-label">Số thẻ BHYT</InputLabel>
                        <Controller
                          name="bhyt"
                          control={control}
                          render={({ field }) => (
                            <Select
                              {...field}
                              labelId="bhyt-label"
                              id="bhyt"
                              label="Số thẻ BHYT"
                            >
                              <MenuItem value="123456789">123456789</MenuItem>
                              <MenuItem value="987654321">987654321</MenuItem>
                            </Select>
                          )}
                        />
                      </FormControl>
                    </Grid>
                  </Grid>
                </Grid>

                <Grid item xs={12} sm={12} md={12}>
                  <Grid container spacing={2}>
                    <Grid item xs={12} sm={4} md={3}>
                      <Typography sx={{ fontWeight: "regular" }}>
                        Nghề nghiệp
                      </Typography>
                      <FormControl fullWidth>
                        <InputLabel id="job-label">Nghề nghiệp</InputLabel>
                        <Controller
                          name="job"
                          control={control}
                          render={({ field }) => (
                            <Select
                              {...field}
                              labelId="job-label"
                              id="job"
                              label="Nghề nghiệp"
                            >
                              {jobs.map((job) => (
                                <MenuItem key={job.id} value={job.name}>
                                  {job.name}
                                </MenuItem>
                              ))}
                            </Select>
                          )}
                        />
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
                        <Controller
                          name="workplace"
                          control={control}
                          render={({ field }) => (
                            <Select
                              {...field}
                              labelId="workplace-label"
                              id="workplace"
                              label="Đơn vị công tác"
                            >
                              {workPlaces.map((place) => (
                                <MenuItem key={place.id} value={place.name}>
                                  {place.name}
                                </MenuItem>
                              ))}
                            </Select>
                          )}
                        />
                      </FormControl>
                    </Grid>
                    <Grid item xs={12} sm={4} md={3}>
                      <Typography sx={{ fontWeight: "regular" }}>
                        Địa điểm tiêm
                      </Typography>
                      <FormControl fullWidth>
                        <InputLabel id="location-label">
                          Địa điểm tiêm
                        </InputLabel>
                        <Controller
                          name="location"
                          control={control}
                          render={({ field }) => (
                            <Select
                              {...field}
                              labelId="location-label"
                              id="location"
                              label="Địa điểm tiêm"
                            >
                              {locations.map((location) => (
                                <MenuItem
                                  key={location.id}
                                  value={location.name}
                                >
                                  {location.name}
                                </MenuItem>
                              ))}
                            </Select>
                          )}
                        />
                      </FormControl>
                    </Grid>
                  </Grid>
                </Grid>


                <Grid item xs={12} sm={12} md={12}>
                <Typography variant="body1" sx={{ mb: 1, mt: 2 }}>
                  1. Thông tin đăng kí tiêm chủng
                </Typography>
                  <Grid container spacing={2}>
                    <Grid item xs={12} sm={4} md={3}>
                      <Typography sx={{ fontWeight: "regular" }}>
                        Ngày tiêm
                      </Typography>
                      <FormControl fullWidth>
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                          <DatePicker
                            label="Ngày tiêm"
                            value={null} // Giá trị này có thể cần điều chỉnh
                            onChange={(date) =>
                              setValue("vaccinationDate", date)
                            }
                            renderInput={(params: any) => (
                              <TextField {...params} />
                            )}
                          />
                        </LocalizationProvider>
                      </FormControl>
                    </Grid>
                    <Grid item xs={12} sm={4} md={3}>
                      <Typography sx={{ fontWeight: "regular" }}>
                        Buổi tiêm
                      </Typography>
                      <FormControl fullWidth>
                        <InputLabel id="vaccination-session-label">
                          Buổi tiêm
                        </InputLabel>
                        <Controller
                          name="vaccinationSession"
                          control={control}
                          render={({ field }) => (
                            <Select
                              {...field}
                              labelId="vaccination-session-label"
                              id="vaccination-session"
                              label="Buổi tiêm"
                            >
                              <MenuItem value="Buổi sáng">Buổi sáng</MenuItem>
                              <MenuItem value="Buổi chiều">Buổi chiều</MenuItem>
                            </Select>
                          )}
                        />
                      </FormControl>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Box>
            
            <Grid item xs={12} sm={12} md={12} mt={4}>
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

            <Box sx={{ mt: 4, display: "flex", justifyContent: "center" }}>
              <Button
                variant="contained"
                sx={{
                  fontSize: 16,
                  fontWeight: "medium",
                  backgroundColor: "#FFFFFF",
                  color: "#303F9F",
                  mt: 2,
                  width: "30", 
                  height: 36,
                  borderRadius: "5px 5px 5px 0", 
                  "&:hover": {
                    backgroundColor: "#303F9F",
                    color: "#FFFFFF",
                  },
                }}
                onClick={handleBackStep}
                disabled={activeStep === 0}
              >
                <WestIcon sx={{ mr: 2 }} />
                Hủy bỏ
              </Button>

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
                  width: "40", 
                  height: 36,
                  borderRadius: "5px 5px 5px 0", 
                  "&:hover": {
                    backgroundColor: "#FFFFFF",
                    color: "#303F9F",
                  },
                }}
                onClick={handleNextStep}
                disabled={activeStep === steps.length - 1}
              >
                Tiếp tục <EastIcon sx={{ color: "#FFFFFF", ml: 2 }} />
              </Button>
            </Box>
          </Container>
        </Box>
      </form>
    </Layout>
  );
};

export default RegisterVaccine;
