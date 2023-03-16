import { styled } from '@mui/material/styles';
import { Card as MuiCard } from '@mui/material';

export const Card = styled(MuiCard)(({ theme }) => ({
  padding: '3rem',

  [theme.breakpoints.down('sm')]: {
    padding: '1.5rem'
  }
}));