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
import { Register } from "@/model/Register";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import dayjs from "dayjs";
import { Province } from "@/model/Province";

type LocationData = Province[];
const locationData: LocationData = [
  {
    id: 1,
    name: "Hà Nội",
    districts: [
      {
        id: 1,
        name: "Ba Đình",
        provinceId: 1,
        wards: [
          { id: 1, name: "Phúc Xá" },
          { id: 2, name: "Trúc Bạch" },
          { id: 3, name: "Vĩnh Phúc" },
        ],
      },
      {
        id: 2,
        name: "Cầu Giấy",
        provinceId: 1,
        wards: [
          { id: 1, name: "Nghĩa Đô" },
          { id: 2, name: "Nghĩa Tân" },
          { id: 3, name: "Mai Dịch" },
        ],
      },
    ],
  },
  {
    id: 2,
    name: "Hồ Chí Minh",
    districts: [
      {
        id: 1,
        name: "Quận 1",
        provinceId: 2,
        wards: [
          { id: 1, name: "Bến Nghé" },
          { id: 2, name: "Bến Thành" },
          { id: 3, name: "Cầu Kho" },
        ],
      },
      {
        id: 2,
        name: "Quận 2",
        provinceId: 2,
        wards: [
          { id: 1, name: "An Phú" },
          { id: 2, name: "Thảo Điền" },
          { id: 3, name: "Bình An" },
        ],
      },
    ],
  },
];

interface FormValuesSearch {
  name: string;
  email: string;
}

const rows: Register[] = [
  {
    id: 1,
    email: "nguyenvana@example.com",
    password: "password123",
    cmnd: "123456789",
    name: "Nguyễn Văn A",
    dob: "1988-05-05",
    gender: "Nam",
    province: 1,
    district: 1,
    ward: 1,
  },
  {
    id: 2,
    email: "tranthib@example.com",
    password: "password456",
    cmnd: "987654321",
    name: "Trần Thị B",
    dob: "1988-05-05",
    gender: "Nữ",
    province: 2,
    district: 2,
    ward: 2,
  },
  {
    id: 3,
    email: "lehoangc@example.com",
    password: "password789",
    cmnd: "456789123",
    name: "Lê Hoàng C",
    dob: "1988-05-05",
    gender: "Nam",
    province: 1,
    district: 2,
    ward: 3,
  },
  {
    id: 4,
    email: "phamminhd@example.com",
    password: "password012",
    cmnd: "654321987",
    name: "Phạm Minh D",
    dob: "1988-05-05",
    gender: "Nữ",
    province: 2,
    district: 1,
    ward: 3,
  },
  {
    id: 5,
    email: "vuthie@example.com",
    password: "password345",
    cmnd: "789456123",
    name: "Vũ Thị E",
    dob: "1988-05-05",
    gender: "Nam",
    province: 2,
    district: 2,
    ward: 1,
  },
];

const Account = () => {
  const [value, setValue] = useState(2);
  const [selectedUser, setSelectedUser] = useState<Register | null>(null);
  const {
    register: registerSearch,
    handleSubmit: handleSubmitSearch,
    formState: { errors: errorsSearch },
  } = useForm<FormValuesSearch>();
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [selectedProvince, setSelectedProvince] = useState<number | null>(null);
  const [selectedDistrict, setSelectedDistrict] = useState<number | null>(null);
  const [selectedWard, setSelectedWard] = useState<number | null>(null);

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
    console.log(data);
  };

  const handleOpenEditDialog = (userId: number) => {
    const user = rows.find((u) => u.id === userId);
    setSelectedUser(user || null);
  };

  const handleCloseEditDialog = () => {
    setSelectedUser(null);
  };

  const {
    register: registerEdit,
    handleSubmit: handleSubmitEdit,
    setValue: setValueEdit,
    formState: { errors: errorsEdit },
  } = useForm<Register>();

  React.useEffect(() => {
    if (selectedUser) {
      setSelectedProvince(selectedUser.province || null);
      setSelectedDistrict(selectedUser.district || null);
      setSelectedWard(selectedUser.ward || null);
      setValueEdit("province", selectedUser.province);
      setValueEdit("district", selectedUser.district);
      setValueEdit("ward", selectedUser.ward);
    }
  }, [selectedUser, setValueEdit]);

  const onSubmitEdit: SubmitHandler<Register> = (data) => {
    console.log(data);
    handleCloseEditDialog();
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
                {...registerSearch("name")}
              />
            </Grid>
            <Grid item xs={12} sm={2.5}>
              <TextField
                label="Email"
                fullWidth
                sx={{ height: "40px" }}
                {...registerSearch("email")}
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

        <Box sx={{ mt: 3 }}>
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell align="center">Họ và tên</TableCell>
                  <TableCell align="center">Email</TableCell>
                  <TableCell align="center">Ngày sinh</TableCell>
                  <TableCell align="center">Giới tính</TableCell>
                  <TableCell align="center">
                    Số CMND/CCCD/Mã định danh công dân
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((row) => (
                    <TableRow
                      key={row.email}
                      onClick={() => handleOpenEditDialog(row.id)}
                    >
                      <TableCell align="center">{row.name}</TableCell>
                      <TableCell align="center">{row.email}</TableCell>
                      <TableCell align="center">{row.dob}</TableCell>
                      <TableCell align="center">{row.gender}</TableCell>
                      <TableCell align="center">{row.cmnd}</TableCell>
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
          />
        </Box>

        <Dialog
          open={!!selectedUser}
          onClose={handleCloseEditDialog}
          fullWidth
          maxWidth="sm"
        >
          <DialogTitle>Chỉnh sửa thông tin người dùng</DialogTitle>
          <DialogContent>
            <form onSubmit={handleSubmitEdit(onSubmitEdit)}>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <Typography>Họ và tên</Typography>
                  <TextField
                    fullWidth
                    {...registerEdit("name")}
                    defaultValue={selectedUser?.name}
                    error={!!errorsEdit.name}
                    helperText={errorsEdit.name?.message}
                  />
                </Grid>
                <Grid item xs={12}>
                  <Typography>Email</Typography>
                  <TextField
                    fullWidth
                    {...registerEdit("email")}
                    defaultValue={selectedUser?.email}
                    error={!!errorsEdit.email}
                    helperText={errorsEdit.email?.message}
                  />
                </Grid>
                <Grid item xs={12}>
                  <Typography>Giới tính</Typography>
                  <Select
                    fullWidth
                    {...registerEdit("gender")}
                    defaultValue={selectedUser?.gender}
                  >
                    {["Nam", "Nữ"].map((gender) => (
                      <MenuItem key={gender} value={gender}>
                        {gender}
                      </MenuItem>
                    ))}
                  </Select>
                </Grid>
                <Grid item xs={12}>
                  <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DatePicker
                      value={selectedUser ? dayjs(selectedUser.dob) : null}
                      onChange={(date) => {
                        setValueEdit("dob", date?.format("YYYY-MM-DD") || "");
                      }}
                      renderInput={(params) => (
                        <TextField {...params} fullWidth label="Ngày sinh" />
                      )}
                    />
                  </LocalizationProvider>
                </Grid>
                <Grid item xs={12}>
                  <Typography>Mật khẩu</Typography>
                  <TextField
                    fullWidth
                    type="password"
                    {...registerEdit("password")}
                    defaultValue={selectedUser?.password}
                    error={!!errorsEdit.password}
                    helperText={errorsEdit.password?.message}
                  />
                </Grid>
                <Grid item xs={12}>
                  <Typography>Số CMND/CCCD/Mã định danh công dân</Typography>
                  <TextField
                    fullWidth
                    {...registerEdit("cmnd")}
                    defaultValue={selectedUser?.cmnd}
                    error={!!errorsEdit.cmnd}
                    helperText={errorsEdit.cmnd?.message}
                  />
                </Grid>
                <Grid item xs={12}>
                  <Typography>Tỉnh/Thành phố</Typography>
                  <Select
                    fullWidth
                    {...registerEdit("province")}
                    value={selectedProvince || ""}
                    onChange={(e) => {
                      const provinceId = e.target.value as number;
                      setSelectedProvince(provinceId);
                      setSelectedDistrict(null);
                      setValueEdit("province", provinceId);
                      setValueEdit("district", null);
                      setValueEdit("ward", null);
                    }}
                  >
                    {locationData.map((province) => (
                      <MenuItem key={province.id} value={province.id}>
                        {province.name}
                      </MenuItem>
                    ))}
                  </Select>
                </Grid>
                <Grid item xs={12}>
                  <Typography>Quận/Huyện</Typography>
                  <Select
                    fullWidth
                    {...registerEdit("district")}
                    value={selectedDistrict ?? ""}
                    onChange={(e) => {
                      const districtId = e.target.value as number;
                      setSelectedDistrict(districtId);
                      setValueEdit("district", districtId);
                      setValueEdit("ward", null);
                    }}
                  >
                    {selectedProvince &&
                      locationData
                        .find((p) => p.id === selectedProvince)
                        ?.districts.map((district) => (
                          <MenuItem key={district.id} value={district.id}>
                            {district.name}
                          </MenuItem>
                        ))}
                  </Select>
                </Grid>
                <Grid item xs={12}>
                  <Typography>Phường/Xã</Typography>
                  <Select
                    fullWidth
                    {...registerEdit("ward")}
                    value={selectedWard ?? ""}
                    onChange={(e) => {
                      const wardId = e.target.value as number;
                      setSelectedWard(wardId);
                      setValueEdit("ward", wardId);
                    }}
                  >
                    {locationData
                      .find((p) => p.id === selectedProvince)
                      ?.districts.find((d) => d.id === selectedDistrict)
                      ?.wards.map((ward) => (
                        <MenuItem key={ward.id} value={ward.id}>
                          {ward.name}
                        </MenuItem>
                      ))}
                  </Select>
                </Grid>
              </Grid>
            </form>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleCloseEditDialog} color="primary">
              Hủy bỏ
            </Button>
            <Button
              type="submit"
              variant="contained"
              onClick={handleSubmitEdit(onSubmitEdit)}
              color="primary"
            >
              Lưu thay đổi
            </Button>
          </DialogActions>
        </Dialog>
      </Container>
    </Layout>
  );
};

export default Account;
