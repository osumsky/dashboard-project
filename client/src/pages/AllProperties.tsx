import { Add } from '@mui/icons-material';
import { useList } from '@pankod/refine-core';
import { Box, Stack, Typography } from '@pankod/refine-mui';
import { useNavigate } from '@pankod/refine-react-router-v6';

import { PropertyCard, CustomButton } from 'components';

export const AllProperties = () => {
  const navigate = useNavigate();
  return (
    <div>
      <Box>
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <Typography fontSize={25} fontWeight={700} color="#11142d">
            All Properties
          </Typography>

          <CustomButton
            title="Add Propety"
            handleClick={() => navigate('/properties/create')}
            color="#FCFCFC"
            backgroundColor="#475be8"
            icon={<Add />}
          />
        </Stack>
      </Box>
    </div>
  );
};
