import React from "react";
import { Container, Tabs, Tab, Divider } from "@mui/material";

interface Props {
  value: number;
  onChange: (event: React.SyntheticEvent, newValue: number) => void;
}

const NavigationTabs: React.FC<Props> = ({ value, onChange }) => {
  return (
    <Container sx={{ mb: 2, py: 2, height: 64 }} maxWidth="xl">
      <Tabs value={value} onChange={onChange} aria-label="navigation tabs">
        <Tab label="Chứng nhận tiêm chủng" href="/dashboard/information-user" />
        <Tab label="Kết quả đăng kí" href="/dashboard/vaccination-results" />
        <Tab label="Tài khoản" />
      </Tabs>
      <Divider sx={{ height: 4, backgroundColor: "#EEEEEE" }} />
    </Container>
  );
};

export default NavigationTabs;
