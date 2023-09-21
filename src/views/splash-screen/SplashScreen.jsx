import React from 'react';
import { CircularProgress, Typography } from '@mui/material';
import { Box, Img } from './_SplashScreen';

const SplashScreen = () => {
  return (
    <Box>
      <Typography variant='h1'>E-COMMERCE</Typography>
      <Img src='/images/logo.svg' alt='splash' />
      <CircularProgress color='primary' />
    </Box>
  );
};

export default SplashScreen;
