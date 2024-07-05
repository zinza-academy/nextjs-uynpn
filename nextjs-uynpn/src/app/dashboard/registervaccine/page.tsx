"use client";
import React, { useState } from "react";
import ItemStepper from "@/app/component/common/item-stepper";
import Layout from "@/app/component/layouts/Layout";
import { Box, Container, Typography, Button } from "@mui/material";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { RegisterVaccines } from "@/model/RegisterVaccines";
import EastIcon from "@mui/icons-material/East";
import WestIcon from "@mui/icons-material/West";
import RegistrationInfoForm from "@/app/component/common/registrationInfoForm";
import AgreeInject from "@/app/component/common/agree-inject";
import TabPanel from "@/app/component/common/tablabel";
import RegisterVaccineTab from "@/constants/RegisterVaccineTab";

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
  const [activeStep, setActiveStep] = useState<RegisterVaccineTab>(RegisterVaccineTab.RegistrationInfo);
  const [tabIndex, setTabIndex] = useState<RegisterVaccineTab>(RegisterVaccineTab.RegistrationInfo);
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
    if (activeStep < RegisterVaccineTab.Complete) {
      setActiveStep((prevStep) => prevStep + 1);
    }
    setTabIndex((prevIndex) => prevIndex + 1);
  };

  const handleBackStep = () => {
    reset();
  };

  return (
    <Layout>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
          <Container sx={{ mb: 2, backgroundColor: "#F7FBFE", py: 2, height: 64 }} maxWidth="xl">
            <Box>
              <Box sx={{ flex: 1 }}>
                <Typography variant="h5">Tra cứu đăng kí tiêm</Typography>
              </Box>
            </Box>
          </Container>

          <Container sx={{ p: 2, mt: 2 }} maxWidth="xl">
            <Box sx={{ mt: 2 }}>
              <ItemStepper activeStep={activeStep} steps={steps} />
            </Box>
          </Container>
        </Box>

        <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
          <Container maxWidth="xl" sx={{ marginBottom: 80 }}>
            {tabIndex === RegisterVaccineTab.RegistrationInfo && (
              <TabPanel value={tabIndex} index={RegisterVaccineTab.RegistrationInfo}>
                <RegistrationInfoForm
                  control={control}
                  errors={errors}
                  setValue={setValue}
                  priorityGroups={priorityGroups}
                  jobs={jobs}
                  workPlaces={workPlaces}
                  locations={locations}
                />
              </TabPanel>
            )}

            {tabIndex === RegisterVaccineTab.AgreeInject && (
              <TabPanel value={tabIndex} index={RegisterVaccineTab.AgreeInject}>
                <Box sx={{ display: "flex", flexDirection: "column"}}>
                  <AgreeInject />
                </Box>
              </TabPanel>
            )}

            <Box sx={{ mt: 3, display: "flex", justifyContent: "center" }}>
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
                disabled={activeStep === RegisterVaccineTab.Complete}
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
