import React from "react";
import { Container, Tabs, Tab, Divider } from "@mui/material";
import Link from 'next/link';

interface Props {
  value: number;
  onChange: (event: React.SyntheticEvent, newValue: number) => void;
}

const AdminTabs: React.FC<Props> = ({ value, onChange }) => {
  return (
    <Container sx={{ mb: 2, py: 2, height: 64 }} maxWidth="xl">
      <Tabs value={value} onChange={onChange} aria-label="navigation tabs">
        <Tab label="Điểm tiêm" component={Link} href="/admin/register-inject" />
        <Tab label="Đăng kí" />
        <Tab label="Tài liệu" />
      </Tabs>
      <Divider sx={{ height: 4, backgroundColor: "#EEEEEE" }} />
    </Container>
  );
};

export default AdminTabs;
