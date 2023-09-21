import { styled } from '@mui/material/styles';
import { Box as MBox } from '@mui/material';

export const Box = styled(MBox)(({ theme }) => ({
  backgroundColor: theme.palette.background.default,
  minHeight: '100vh',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center'
}));

export const Img = styled('img')(({ theme }) => ({
  margin: theme.spacing(3),
  maxWidth: '280px'
}));
