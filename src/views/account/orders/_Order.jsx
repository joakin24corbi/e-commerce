import { styled } from '@mui/material/styles';

export const Subtitle = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'row',

  [theme.breakpoints.down('sm')]: {
    flexDirection: 'column',
  }
}));
