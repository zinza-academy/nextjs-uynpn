'use client'
import React, { useState } from "react";
import ItemStepper from "@/app/component/common/item-stepper";
import Layout from "@/app/component/layouts/Layout";
import {
  Box,
  Container,
  Grid,
  Typography,
  Button
} from "@mui/material";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { RegisterVaccines } from "@/model/RegisterVaccines";
import EastIcon from "@mui/icons-material/East";
import WestIcon from "@mui/icons-material/West";
import RegistrationInfoForm from "@/app/component/common/registrationInfoForm";

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

const RegisterVaccine = () => {
  const [activeStep, setActiveStep] = useState<number>(0);
  const {
    control,
    handleSubmit,
    formState: { errors },
    setValue,
    reset,
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues,
  });

  const onSubmit = async (data: RegisterVaccines) => {
    console.log("data:", data);
    handleNextStep();
  };

  const handleNextStep = () => {
    if (activeStep < steps.length - 1) {
      setActiveStep((prevStep) => prevStep + 1);
    }
  };

  const handleBackStep = () => {
    reset();
  };

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
            <Box sx={{ mt: 2 }}>
              <ItemStepper activeStep={activeStep} steps={steps} />
            </Box>
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
            <RegistrationInfoForm
              control={control}
              errors={errors}
              setValue={setValue}
              priorityGroups={priorityGroups}
              jobs={jobs}
              workPlaces={workPlaces}
              locations={locations}
            />

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
                  width: "130px",
                  height: 36,
                  borderRadius: "5px 5px 5px 0",
                  "&:hover": {
                    backgroundColor: "#303F9F",
                    color: "#FFFFFF",
                  },
                }}
                onClick={handleBackStep}
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
                  width: "160px",
                  height: 36,
                  borderRadius: "5px 5px 5px 0",
                  "&:hover": {
                    backgroundColor: "#FFFFFF",
                    color: "#303F9F",
                  },
                }}
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
