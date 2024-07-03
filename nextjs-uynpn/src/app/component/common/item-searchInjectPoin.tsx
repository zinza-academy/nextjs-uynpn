import * as React from "react";
import { useState, useEffect } from "react";
import { useForm, Controller } from "react-hook-form";
import { styled } from "@mui/material/styles";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  TablePagination,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Button,
  Box,
  Divider,
} from "@mui/material";
import Link from "next/link";
import { Province } from "@/model/Province";
import { tableCellClasses } from "@mui/material/TableCell";
import { InjectionPoin } from "@/model/InjectionPoints";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: "white",
    color: theme.palette.common.black,
    fontWeight: "bold",
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

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

const rows: InjectionPoin[] = [
  {
    stt: "1",
    tenDiemTiem: "Tên điểm tiêm 1",
    soNhaDuong: "123 Đường A",
    xaPhuong: 1,
    quanHuyen: 1,
    tinhThanhPho: 1,
    nguoiDungDau: "Người A",
    soBanTiem: 5,
  },
  {
    stt: "2",
    tenDiemTiem: "Tên điểm tiêm 2",
    soNhaDuong: "456 Đường B",
    xaPhuong: 2,
    quanHuyen: 1,
    tinhThanhPho: 1,
    nguoiDungDau: "Người B",
    soBanTiem: 3,
  },
  {
    stt: "3",
    tenDiemTiem: "Tên điểm tiêm 3",
    soNhaDuong: "789 Đường C",
    xaPhuong: 3,
    quanHuyen: 1,
    tinhThanhPho: 1,
    nguoiDungDau: "Người C",
    soBanTiem: 7,
  },
  {
    stt: "4",
    tenDiemTiem: "Tên điểm tiêm 4",
    soNhaDuong: "101 Đường D",
    xaPhuong: 1,
    quanHuyen: 2,
    tinhThanhPho: 1,
    nguoiDungDau: "Người D",
    soBanTiem: 2,
  },
  {
    stt: "5",
    tenDiemTiem: "Tên điểm tiêm 5",
    soNhaDuong: "111 Đường E",
    xaPhuong: 1,
    quanHuyen: 2,
    tinhThanhPho: 2,
    nguoiDungDau: "Người E",
    soBanTiem: 4,
  },
  {
    stt: "6",
    tenDiemTiem: "Tên điểm tiêm 6",
    soNhaDuong: "112 Đường F",
    xaPhuong: 2,
    quanHuyen: 1,
    tinhThanhPho: 2,
    nguoiDungDau: "Người F",
    soBanTiem: 4,
  },
  {
    stt: "7",
    tenDiemTiem: "Tên điểm tiêm 7",
    soNhaDuong: "113 Đường G",
    xaPhuong: 3,
    quanHuyen: 1,
    tinhThanhPho: 2,
    nguoiDungDau: "Người G",
    soBanTiem: 4,
  },
  {
    stt: "8",
    tenDiemTiem: "Tên điểm tiêm 8",
    soNhaDuong: "114 Đường H",
    xaPhuong: 3,
    quanHuyen: 2,
    tinhThanhPho: 1,
    nguoiDungDau: "Người H",
    soBanTiem: 4,
  },
  {
    stt: "9",
    tenDiemTiem: "Tên điểm tiêm 9",
    soNhaDuong: "115 Đường I",
    xaPhuong: 1,
    quanHuyen: 2,
    tinhThanhPho: 2,
    nguoiDungDau: "Người I",
    soBanTiem: 4,
  },
  {
    stt: "10",
    tenDiemTiem: "Tên điểm tiêm 10",
    soNhaDuong: "116 Đường J",
    xaPhuong: 3,
    quanHuyen: 2,
    tinhThanhPho: 2,
    nguoiDungDau: "Người J",
    soBanTiem: 4,
  },
  {
    stt: "11",
    tenDiemTiem: "Tên điểm tiêm 11",
    soNhaDuong: "117 Đường K",
    xaPhuong: 3,
    quanHuyen: 1,
    tinhThanhPho: 2,
    nguoiDungDau: "Người K",
    soBanTiem: 4,
  },
];

export default function SearchInject() {
  const { control, handleSubmit, watch, setValue } = useForm();
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [filteredRows, setFilteredRows] = useState(rows);

  const selectedProvince = watch("province");
  const selectedDistrict = watch("district");

  useEffect(() => {
    setValue("district", "");
    setValue("ward", "");
  }, [selectedProvince, setValue]);

  useEffect(() => {
    setValue("ward", "");
  }, [selectedDistrict, setValue]);

  const availableDistricts = selectedProvince
    ? locationData.find((province) => province.id === parseInt(selectedProvince, 10))?.districts
    : [];

  const availableWards = selectedDistrict
    ? availableDistricts?.find((district) => district.id === parseInt(selectedDistrict, 10))?.wards
    : [];

  const handleSearch = (data: any) => {
    const { province, district, ward } = data;
    const filtered = rows.filter((row) => {
      return (
        (!province || row.tinhThanhPho === parseInt(province, 10)) &&
        (!district || row.quanHuyen === parseInt(district, 10)) &&
        (!ward || row.xaPhuong === parseInt(ward, 10))
      );
    });
    setFilteredRows(filtered);
    setPage(0);
  };

  const handleChangePage = (event: any, newPage: any) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: any) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <div>
      <Box sx={{ display: "flex", marginBottom: 2 }}>
        <FormControl variant="outlined" sx={{ m: 1, minWidth: 260}}>
          <InputLabel id="province-label">Tỉnh/Thành phố</InputLabel>
          <Controller
            name="province"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <Select
                labelId="province-label"
                id="province"
                label="Tỉnh/Thành phố"
                {...field}
              >
                <MenuItem value="">
                  <em>Tất cả</em>
                </MenuItem>
                {locationData.map((province) => (
                  <MenuItem key={province.id} value={province.id}>
                    {province.name}
                  </MenuItem>
                ))}
              </Select>
            )}
          />
        </FormControl>

        <FormControl variant="outlined" sx={{ m: 1, minWidth: 260 }}>
          <InputLabel id="district-label">Quận/Huyện</InputLabel>
          <Controller
            name="district"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <Select
                labelId="district-label"
                id="district"
                label="Quận/Huyện"
                {...field}
                disabled={!selectedProvince}
              >
                <MenuItem value="">
                  <em>Tất cả</em>
                </MenuItem>
                {availableDistricts?.map((district) => (
                  <MenuItem key={district.id} value={district.id}>
                    {district.name}
                  </MenuItem>
                ))}
              </Select>
            )}
          />
        </FormControl>

        <FormControl variant="outlined" sx={{ m: 1, minWidth: 260 }}>
          <InputLabel id="ward-label">Xã/Phường</InputLabel>
          <Controller
            name="ward"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <Select
                labelId="ward-label"
                id="ward"
                label="Xã/Phường"
                {...field}
                disabled={!selectedDistrict}
              >
                <MenuItem value="">
                  <em>Tất cả</em>
                </MenuItem>
                {availableWards?.map((ward) => (
                  <MenuItem key={ward.id} value={ward.id}>
                    {ward.name}
                  </MenuItem>
                ))}
              </Select>
            )}
          />
        </FormControl>

        <Button
            variant="contained"
            onClick={handleSubmit(handleSearch)}
            sx={{
              fontSize: 16,
              fontWeight: "medium",
              backgroundColor: "#303F9F",
              color: "#FFFFFF",
              mt: 1,
              ml: 1,
              width: 148,
              height: 56,
              borderRadius: "5px 5px 5px 0",
              "&:hover": {
                backgroundColor: "#FFFFFF",
                color: "#303F9F",
              },
            }}
          >
            <Link href="/login" passHref>
              Tìm kiếm
            </Link>
          </Button>
      </Box>

      <TableContainer component={Paper}>
        <Table aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell align="center">STT</StyledTableCell>
              <StyledTableCell align="center">Tên điểm tiêm</StyledTableCell>
              <StyledTableCell align="center">Số nhà, đường</StyledTableCell>
              <StyledTableCell align="center">Xã/Phường</StyledTableCell>
              <StyledTableCell align="center">Quận/Huyện</StyledTableCell>
              <StyledTableCell align="center">Tỉnh/Thành phố</StyledTableCell>
              <StyledTableCell align="center">Người dùng đầu</StyledTableCell>
              <StyledTableCell align="center">Số bàn tiêm</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredRows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => (
                <StyledTableRow key={row.stt}>
                  <StyledTableCell align="center">{row.stt}</StyledTableCell>
                  <StyledTableCell align="center">
                    {row.tenDiemTiem}
                  </StyledTableCell>
                  <StyledTableCell align="center">
                    {row.soNhaDuong}
                  </StyledTableCell>
                  <StyledTableCell align="center">
                    {
                      locationData
                        .find((province) => province.id === row.tinhThanhPho)
                        ?.districts.find(
                          (district) => district.id === row.quanHuyen
                        )
                        ?.wards.find((ward) => ward.id === row.xaPhuong)?.name
                    }
                  </StyledTableCell>
                  <StyledTableCell align="center">
                    {
                      locationData
                        .find((province) => province.id === row.tinhThanhPho)
                        ?.districts.find(
                          (district) => district.id === row.quanHuyen
                        )?.name
                    }
                  </StyledTableCell>
                  <StyledTableCell align="center">
                    {
                      locationData.find(
                        (province) => province.id === row.tinhThanhPho
                      )?.name
                    }
                  </StyledTableCell>
                  <StyledTableCell align="center">
                    {row.nguoiDungDau}
                  </StyledTableCell>
                  <StyledTableCell align="center">
                    {row.soBanTiem}
                  </StyledTableCell>
                </StyledTableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 50]}
        component="div"
        count={filteredRows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </div>
  );
}
