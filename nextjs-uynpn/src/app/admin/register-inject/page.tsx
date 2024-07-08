'use client'
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
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Typography,
} from "@mui/material";
import { useForm, SubmitHandler } from "react-hook-form";
import AdminTabs from "@/app/component/common/admin-tabs";

interface FormValuesSearch {
  diemTiem: string;
  diaChi: string;
}

interface FormValuesEdit {
  tenDiemTiem: string;
  diaChi: string;
  nguoiDungDau: string;
  soBanTiem: number;
}

interface VaccinationCenter {
  id: number;
  tenDiemTiem: string;
  diaChi: string;
  nguoiDungDau: string;
  soBanTiem: number;
}

const RegisterInject = () => {
  const [value, setValue] = useState(0);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [open, setOpen] = useState(false);
  const [selectedCenter, setSelectedCenter] =
    useState<VaccinationCenter | null>(null);
  const {
    register: registerSearch,
    handleSubmit: handleSubmitSearch,
    formState: { errors: errorsSearch },
  } = useForm<FormValuesSearch>();
  const {
    register: registerEdit,
    handleSubmit: handleSubmitEdit,
    setValue: setFormValue,
    formState: { errors: errorsEdit },
  } = useForm<FormValuesEdit>();

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

  const onSubmitEdit: SubmitHandler<FormValuesEdit> = (data) => {
    handleCloseDialog();
  };

  const rows: VaccinationCenter[] = [
    {
      id: 1,
      tenDiemTiem: "Điểm tiêm 1",
      diaChi: "Địa chỉ 1",
      nguoiDungDau: "Người 1",
      soBanTiem: 5,
    },
    {
      id: 2,
      tenDiemTiem: "Điểm tiêm 2",
      diaChi: "Địa chỉ 2",
      nguoiDungDau: "Người 2",
      soBanTiem: 3,
    },
    {
      id: 3,
      tenDiemTiem: "Điểm tiêm 3",
      diaChi: "Địa chỉ 3",
      nguoiDungDau: "Người 3",
      soBanTiem: 4,
    },
    {
      id: 4,
      tenDiemTiem: "Điểm tiêm 4",
      diaChi: "Địa chỉ 4",
      nguoiDungDau: "Người 4",
      soBanTiem: 6,
    },
    {
      id: 5,
      tenDiemTiem: "Điểm tiêm 5",
      diaChi: "Địa chỉ 5",
      nguoiDungDau: "Người 5",
      soBanTiem: 2,
    },
    {
      id: 6,
      tenDiemTiem: "Điểm tiêm 6",
      diaChi: "Địa chỉ 6",
      nguoiDungDau: "Người 6",
      soBanTiem: 7,
    },
    {
      id: 7,
      tenDiemTiem: "Điểm tiêm 7",
      diaChi: "Địa chỉ 7",
      nguoiDungDau: "Người 7",
      soBanTiem: 3,
    },
    {
      id: 8,
      tenDiemTiem: "Điểm tiêm 8",
      diaChi: "Địa chỉ 8",
      nguoiDungDau: "Người 8",
      soBanTiem: 4,
    },
    {
      id: 9,
      tenDiemTiem: "Điểm tiêm 9",
      diaChi: "Địa chỉ 9",
      nguoiDungDau: "Người 9",
      soBanTiem: 5,
    },
    {
      id: 10,
      tenDiemTiem: "Điểm tiêm 10",
      diaChi: "Địa chỉ 10",
      nguoiDungDau: "Người 10",
      soBanTiem: 3,
    },
  ];

  const handleOpenDialog = (rowId: number) => {
    console.log(rowId)
    const selectedRow = rows.find(row => row.id === rowId);
    if (selectedRow) {
      setSelectedCenter(selectedRow);
      setOpen(true);
      setFormValue("tenDiemTiem", selectedRow.tenDiemTiem);
      setFormValue("diaChi", selectedRow.diaChi);
      setFormValue("nguoiDungDau", selectedRow.nguoiDungDau);
      setFormValue("soBanTiem", selectedRow.soBanTiem);
    }
  };

  const handleCloseDialog = () => {
    setOpen(false);
    setSelectedCenter(null);
  };

  return (
    <Layout>
      <AdminTabs value={value} onChange={handleChange} />

      <Box>
        {value === 0 && (
          <Container maxWidth="xl">
            <form onSubmit={handleSubmitSearch(onSubmitSearch)}>
              <Grid container spacing={2} alignItems="center">
                <Grid item xs={12} sm={2.5}>
                  <TextField
                    label="Điểm tiêm"
                    fullWidth
                    sx={{ height: "40px" }}
                    {...registerSearch("diemTiem")}
                  />
                </Grid>
                <Grid item xs={12} sm={2.5}>
                  <TextField
                    label="Địa chỉ"
                    sx={{ height: "40px" }}
                    fullWidth
                    {...registerSearch("diaChi")}
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
                    <TableCell align="center" sx={{ width: "10%" }}>
                      STT
                    </TableCell>
                    <TableCell align="center" sx={{ width: "20%" }}>
                      Tên điểm tiêm
                    </TableCell>
                    <TableCell align="center" sx={{ width: "30%" }}>
                      Địa chỉ
                    </TableCell>
                    <TableCell align="center" sx={{ width: "30%" }}>
                      Người đứng đầu cơ sở tiêm chủng
                    </TableCell>
                    <TableCell align="center" sx={{ width: "10%" }}>
                      Số bàn tiêm
                    </TableCell>
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
                    <TableRow
                      key={row.id}
                      onClick={() => handleOpenDialog(row.id)}
                    >
                      <TableCell align="center">{row.id}</TableCell>
                      <TableCell align="center">{row.tenDiemTiem}</TableCell>
                      <TableCell align="center">{row.diaChi}</TableCell>
                      <TableCell align="center">{row.nguoiDungDau}</TableCell>
                      <TableCell align="center">{row.soBanTiem}</TableCell>
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

            <Dialog
              open={open}
              onClose={handleCloseDialog}
              maxWidth = {"sm"}
              fullWidth
            >
              <DialogTitle variant="h6">Cập Nhật Điểm Tiêm</DialogTitle>
              <DialogContent>
                <form onSubmit={handleSubmitEdit(onSubmitEdit)}>
                  <Grid container spacing={2}>
                    <Grid item xs={12}>
                      <Typography>Tên điểm tiêm</Typography>
                      <TextField
                        fullWidth
                        {...registerEdit("tenDiemTiem")}
                        error={!!errorsEdit.tenDiemTiem}
                        helperText={errorsEdit.tenDiemTiem?.message}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <Typography>Địa chỉ </Typography>
                      <TextField
                        fullWidth
                        {...registerEdit("diaChi")}
                        error={!!errorsEdit.diaChi}
                        helperText={errorsEdit.diaChi?.message}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <Typography>Người đứng đầu cơ sở</Typography>
                      <TextField
                        fullWidth
                        {...registerEdit("nguoiDungDau")}
                        error={!!errorsEdit.nguoiDungDau}
                        helperText={errorsEdit.nguoiDungDau?.message}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <Typography>Số bàn tiêm</Typography>
                      <TextField
                        fullWidth
                        type="number"
                        {...registerEdit("soBanTiem")}
                        error={!!errorsEdit.soBanTiem}
                        helperText={errorsEdit.soBanTiem?.message}
                      />
                    </Grid>
                  </Grid>
                </form>
              </DialogContent>
              <DialogActions>
                <Button onClick={handleCloseDialog} color="primary">
                  Hủy bỏ
                </Button>
                <Button
                  type="submit"
                  onClick={handleSubmitEdit(onSubmitEdit)}
                  color="primary"
                >
                  Xác nhận
                </Button>
              </DialogActions>
            </Dialog>
          </Container>
        )}
      </Box>
    </Layout>
  );
};

export default RegisterInject;
