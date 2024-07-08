import React from "react";
import {
  Box,
  Grid,
  Typography,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  TextField,
  FormHelperText,
} from "@mui/material";
import { Controller } from "react-hook-form";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";

interface RegistrationInfoFormProps {
  control: any;
  errors: any;
  setValue: Function;
  priorityGroups: { id: number; name: string }[];
  jobs: { id: number; name: string }[];
  workPlaces: { id: number; name: string }[];
  locations: { id: number; name: string }[];
}

const RegistrationInfoForm: React.FC<RegistrationInfoFormProps> = ({
  control,
  errors,
  setValue,
  priorityGroups,
  jobs,
  workPlaces,
  locations,
}) => {
  return (
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
                <InputLabel id="priority-group-label">Nhóm ưu tiên</InputLabel>
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
                <InputLabel id="workplace-label">Đơn vị công tác</InputLabel>
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
                <InputLabel id="location-label">Địa điểm tiêm</InputLabel>
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
                        <MenuItem key={location.id} value={location.name}>
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
              <Typography sx={{ fontWeight: "regular" }}>Ngày tiêm</Typography>
              <FormControl fullWidth>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DatePicker
                    label="Ngày tiêm"
                    value={null}
                    onChange={(date) => setValue("vaccinationDate", date)}
                    renderInput={(params: any) => <TextField {...params} />}
                  />
                </LocalizationProvider>
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={4} md={3}>
              <Typography sx={{ fontWeight: "regular" }}>Buổi tiêm</Typography>
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
              Việc đăng ký thông tin hoàn toàn bảo mật và phục vụ cho chiến dịch
              tiêm chủng Vắc xin COVID - 19
            </Typography>
            <Typography sx={{ fontWeight: "regular", color: "#D32F2F", ml: 1 }}>
              Xin vui lòng kiểm tra kỹ các thông tin bắt buộc(VD: Họ và tên,
              Ngày tháng năm sinh, Số điện thoại, Số CMND/CCCD/Mã định danh công
              dân/HC ...)
            </Typography>
            <Typography sx={{ fontWeight: "regular", color: "#D32F2F", ml: 1 }}>
              Bằng việc nhấn nút xác nhận, bạn hoàn toàn hiểu và đồng ý chịu
              trách nhiệm với các thông tin đã cung cấp.
            </Typography>
            <Typography sx={{ fontWeight: "regular", color: "#D32F2F", ml: 1 }}>
              Cá nhân/Tổ chức đăng ký thành công trên hệ thống sẽ được đưa vào
              danh sách đặt tiêm. Cơ sở y tế sẽ thông báo lịch tiêm khi có vắc
              xin và kế hoạch tiêm được phê duyệt. Trân trọng cảm ơn!
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

export default RegistrationInfoForm;
