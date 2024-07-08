'use client'
import React, { useState } from "react";
import Layout from "@/app/component/layouts/Layout";
import { Box } from "@mui/material";
import NavigationTabs from "@/app/component/common/navigation-tabs";
import ImmunizationCertification from "@/app/component/common/immunization-certification";

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

  const [value, setValue] = useState<number>(0);
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

        {value === 0 && <ImmunizationCertification rows={rows} />}
      </Box>
    </Layout>
  );
};

export default InformationUser;
