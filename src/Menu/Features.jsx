import { Box,Typography} from '@mui/material';
import React from 'react';

export default function Features() {
  return (
    <Box>
      <Typography
              variant="h2"
              sx={{ fontWeight: "bold", mb: 2,width: 378,height: 135,minHeight:"50vh",textAlign:"center"}}
            >
              Better than CEXs <br /> for L2 trading
            </Typography>
    </Box>
  )
}
