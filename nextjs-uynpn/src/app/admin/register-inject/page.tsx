"use client";
import React, { useState } from "react";
import Layout from "@/app/component/layouts/Layout";
import {
  Box,
  Container,
  Grid,
  TextField,
  Button,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  TableContainer,
  Paper,
  TablePagination,
  Typography,
  Select,
  MenuItem,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from "@mui/material";
import { useForm, SubmitHandler } from "react-hook-form";
import AdminTabs from "@/app/component/common/admin-tabs";
import { VaccintionResults } from "@/model/VaccineResults";
import { StatusRegister } from "@/constants/status-register";

interface FormValuesSearch {
  hoVaTen: string;
  soCMND: string;
}

const rows: VaccintionResults[] = [
  {
    id: 1,
    fullName: "Nguyễn Văn A",
    dob: "01/01/1990",
    gender: "Nam",
    idNumber: "123456789",
    status: "1",
  },
  {
    id: 2,
    fullName: "Trần Thị B",
    dob: "02/02/1995",
    gender: "Nữ",
    idNumber: "987654321",
    status: "1",
  },
  {
    id: 3,
    fullName: "Lê Hoàng C",
    dob: "03/03/1985",
    gender: "Khác",
    idNumber: "456789123",
    status: "2",
  },
  {
    id: 4,
    fullName: "Phạm Minh D",
    dob: "04/04/1992",
    gender: "Chưa xác định",
    idNumber: "654321987",
    status: "2",
  },
  {
    id: 5,
    fullName: "Vũ Thị E",
    dob: "05/05/1988",
    gender: "Không xác định",
    idNumber: "789456123",
    status: "1",
  },
];

const RegisterInject = () => {
  const [value, setValue] = useState(1);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [openDialog, setOpenDialog] = useState(false);
  const [selectedUser, setSelectedUser] =
    useState<VaccintionResults | null>(null);
  const {
    register: registerSearch,
    handleSubmit: handleSubmitSearch,
    formState: { errors: errorsSearch },
  } = useForm<FormValuesSearch>();

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const handlePageChange = (
    event: React.MouseEvent<HTMLButtonElement> | null,
    newPage: number
  ) => {
    setPage(newPage);
  };

  const handleRowsPerPageChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const onSubmitSearch: SubmitHandler<FormValuesSearch> = (data) => {

  };

  const getStatusText = (status: string): string => {
    switch (status) {
      case StatusRegister.pending:
        return "Đang chờ duyệt";
      case StatusRegister.approved:
        return "Đã duyệt";
      default:
        return "Không xác định";
    }
  };

  const handleStatusChange = (id: number, newStatus: string) => {
    const updatedRows = rows.map((row) =>
      row.id === id ? { ...row, status: newStatus } : row
    );

  };

  const handleRowClick = (id: number) => {
    const clickedUser = rows.find((row) => row.id === id);
    setSelectedUser(clickedUser || null);
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  return (
    <Layout>
      <AdminTabs value={value} onChange={handleChange} />

      <Container maxWidth="xl">
        <form onSubmit={handleSubmitSearch(onSubmitSearch)}>
          <Grid container spacing={2} alignItems="center">
            <Grid item xs={12} sm={2.5}>
              <TextField
                label="Họ và tên"
                fullWidth
                sx={{ height: "40px" }}
                {...registerSearch("hoVaTen")}
              />
            </Grid>
            <Grid item xs={12} sm={2.5}>
              <TextField
                label="Số CMND/CCCD"
                sx={{ height: "40px" }}
                fullWidth
                {...registerSearch("soCMND")}
              />
            </Grid>
            <Grid item xs={12} sm={1.2}>
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
                  height: "54px",
                  borderRadius: "5px 5px 5px 0",
                  "&:hover": {
                    backgroundColor: "#FFFFFF",
                    color: "#303F9F",
                  },
                }}
              >
                Tìm kiếm
              </Button>
            </Grid>
          </Grid>
        </form>

        <TableContainer component={Paper} sx={{ mt: 4 }}>
          <Table>
            <TableHead>
              <TableRow sx={{ backgroundColor: "#EEEEEE" }}>
                <TableCell align="center">STT</TableCell>
                <TableCell align="center">Họ và tên</TableCell>
                <TableCell align="center">Ngày sinh</TableCell>
                <TableCell align="center">Giới tính</TableCell>
                <TableCell align="center">Số CMND/CCCD</TableCell>
                <TableCell align="center">Trạng thái</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {(rowsPerPage > 0
                ? rows.slice(
                    page * rowsPerPage,
                    page * rowsPerPage + rowsPerPage
                  )
                : rows
              ).map((row) => (
                <TableRow key={row.id} >
                  <TableCell align="center">{row.id}</TableCell>
                  <TableCell align="center" onClick={() => handleRowClick(row.id)}>{row.fullName}</TableCell>
                  <TableCell align="center">{row.dob}</TableCell>
                  <TableCell align="center">{row.gender}</TableCell>
                  <TableCell align="center">{row.idNumber}</TableCell>
                  <TableCell align="center">
                    <Select
                      value={row.status}
                      onChange={(e) =>
                        handleStatusChange(row.id, e.target.value as string)
                      }
                      sx={{ minWidth: 120 }}
                    >
                      <MenuItem value={StatusRegister.pending}>
                        {getStatusText(StatusRegister.pending)}
                      </MenuItem>
                      <MenuItem value={StatusRegister.approved}>
                        {getStatusText(StatusRegister.approved)}
                      </MenuItem>
                    </Select>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>

        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handlePageChange}
          onRowsPerPageChange={handleRowsPerPageChange}
          sx={{ mt: 2 }}
        />
      </Container>

      <Dialog open={openDialog} onClose={handleCloseDialog} maxWidth= {"sm"}>
        <DialogTitle>Chi tiết người dùng</DialogTitle>
        <DialogContent>
          <Typography variant="body1">
            Họ và tên: {selectedUser?.fullName}
          </Typography>
          <Typography variant="body1">
            Ngày sinh: {selectedUser?.dob}
          </Typography>
          <Typography variant="body1">
            Giới tính: {selectedUser?.gender}
          </Typography>
          <Typography variant="body1">
            Số CMND/CCCD: {selectedUser?.idNumber}
          </Typography>
          <Typography variant="body1">
            Trạng thái: {getStatusText(selectedUser?.status || "")}
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDialog} color="primary">
            Đóng
          </Button>
        </DialogActions>
      </Dialog>
    </Layout>
  );
};

export default RegisterInject;
