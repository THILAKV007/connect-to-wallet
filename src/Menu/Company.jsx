import { Box,Typography } from '@mui/material';
import React from 'react';

export default function Company() {
  return (
    <Box>
       <Typography
              variant="h4"
              sx={{ fontWeight: "bold", mb: 2,width: 378,height: 135,}}
            >
              Better than CEXs <br /> for L2 trading
            </Typography>
    </Box>
    
  )
}
