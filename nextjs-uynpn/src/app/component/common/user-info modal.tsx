import React from "react";
import {
  Modal,
  Typography,
  Button,
  Box,
  Divider,
} from "@mui/material";

interface UserInfoModalProps {
  user: {
    name: string;
    email: string;
    address: string;
  } | null;
  onClose: () => void;
}

const UserInfoModal: React.FC<UserInfoModalProps> = ({ user, onClose }) => {
  return (
    <Modal
      open={Boolean(user)}
      onClose={onClose}
      aria-labelledby="user-info-modal-title"
      aria-describedby="user-info-modal-description"
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Box sx={{ width: 400, bgcolor: "background.paper", p: 2 }}>
        <Typography variant="h6" component="h2" id="user-info-modal-title">
          Thông tin cá nhân
        </Typography>
        <Divider sx={{ my: 2 }} />
        {user && (
          <Box>
            <Typography variant="body1">Họ và tên: {user.name}</Typography>
            <Typography variant="body1">Email: {user.email}</Typography>
            <Typography variant="body1">Địa chỉ: {user.address}</Typography>
          </Box>
        )}
        <Button onClick={onClose} sx={{ mt: 2 }}>
          Đóng
        </Button>
      </Box>
    </Modal>
  );
};

export default UserInfoModal;
