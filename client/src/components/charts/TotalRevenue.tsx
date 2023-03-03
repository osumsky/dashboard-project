import { ArrowCircleUpRounded } from '@mui/icons-material';
import { Typography, Box, Stack } from '@pankod/refine-mui';
import ReactApexChart from 'react-apexcharts';

import { TotalRevenueOptions, TotalRevenueSeries } from './chat.config';

export const TotalRevenue = () => {
  return (
    <Box
      id="chart"
      display="flex"
      flexDirection="column"
      p={4}
      flex={1}
      bgcolor="#fcfcfc"
      borderRadius="15px"
    >
      <Typography fontSize={18} fontWeight={600} color="#11142d">
        Total Revenue
      </Typography>

      <Stack my="20px" direction="row" gap={4} flexWrap="wrap">
        <Typography fontSize={28} fontWeight={700} color="#11141d">
          $145,764
        </Typography>
        <Stack direction="row" alignItems="center" gap={1}>
          <ArrowCircleUpRounded sx={{ fontSize: 25, color: '#475be8' }} />
          <Stack>
            <Typography fontSize={15} color="#475be8">
              0.7%
            </Typography>
            <Typography fontSize={12} color="#808191">
              than last month
            </Typography>
          </Stack>
        </Stack>
      </Stack>

      <ReactApexChart
        series={TotalRevenueSeries}
        type="bar"
        height={310}
        options={TotalRevenueOptions}
      />
    </Box>
  );
};
