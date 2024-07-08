import React, { useState } from "react";
import { Typography, Box, Checkbox } from "@mui/material";
import Image from "next/image";
import Divider from '@mui/material/Divider';

const AgreeInject = () => {

  const [checked, setChecked] = useState(false);

  const handleCheckboxChange = (event: any) => {
    setChecked(event.target.checked);
  };

  return (
    <Box>
      <Box display="flex" alignItems="center" mt={3}>
        <Image
          src="/img/shield 1.png"
          alt="Check Circle"
          width={24}
          height={24}
        />
        <Typography variant="body1" ml={1}>
          1. Tiêm chủng vắc xin là biện pháp phòng chống dịch hiệu quả, tuy
          nhiên vắc xin phòng COVID-19 có thể không phòng được bệnh hoàn toàn.
          Người được tiêm chủng vắc xin phòng COVID-19 có thể phòng được bệnh
          hoặc giảm mức độ nặng nếu mắc bệnh. Tuy nhiên, sau khi tiêm chủng vẫn
          phải tiếp tục thực hiện nghiêm các biện pháp phòng chống dịch theo quy
          định.
        </Typography>
      </Box>
      <Box display="flex" alignItems="center" mt={2}>
        <Image
          src="/img/vaccine2 1.png"
          alt="Check Circle"
          width={24}
          height={24}
        />
        <Typography variant="body1" ml={1}>
          2. Tiêm chủng vắc xin phòng COVID-19 có thể gây ra một số biểu hiện
          tại chỗ tiêm hoặc toàn thân như sưng, đau chỗ tiêm, nhức đầu, buồn
          nôn, sốt, đau cơ…hoặc tai biến nặng sau tiêm chủng. Tiêm vắc xin mũi 2
          do Pfizer sản xuất ở người đã tiêm mũi 1 bằng vắc xin AstraZeneca có
          thể tăng khả năng xảy ra phản ứng thông thường sau tiêm chủng.
        </Typography>
      </Box>
      <Box display="flex" alignItems="center" mt={2}>
        <Image
          src="/img/hospital 1.png"
          alt="Check Circle"
          width={24}
          height={24}
        />
        <Typography variant="body1" ml={1}>
          3. Khi có triệu chứng bất thường về sức khỏe, người được tiêm chủng
          cần đến ngay cơ sở y tế gần nhất để được tư vấn, thăm khám và điều trị
          kịp thời.
        </Typography>
      </Box>

      <Divider sx={{ mt: 2, height: 2 }} />

      <Box display="flex" alignItems="center" mt={3}>
        <Typography variant="body1" ml={1}>
          Sau khi đã đọc các thông tin nêu trên, tôi đã hiểu về các nguy cơ và:
        </Typography>
        <Checkbox
          sx={{ ml: 2 }}
          color="primary"
          checked={checked}
          onChange={handleCheckboxChange}
        />
        <Typography variant="body1">
          Đồng ý đăng kí
        </Typography>
      </Box>
    </Box>
  );
};

export default AgreeInject;
