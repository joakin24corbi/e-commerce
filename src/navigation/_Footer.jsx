
import { styled } from '@mui/material/styles';
import { Container } from '@mui/material';
import { Link } from 'react-router-dom';

export const FooterDiv = styled('footer')(({ theme }) => ({
  backgroundColor: theme.palette.background.footer,
  padding: theme.spacing(8, 0)
}));

export const FooterContainer = styled(Container)(({ theme }) => ({
  display: 'grid',
  gridTemplateColumns: 'repeat(4, 1fr)',
  columnGap: '20px',

  [theme.breakpoints.down('md')]: {
    gridTemplateColumns: 'repeat(2, 1fr)'
  },

  [theme.breakpoints.down('sm')]: {
    gridTemplateColumns: 'repeat(1, 1fr)'
  },
}));

export const FooterGrid = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignContent: 'flex-start',
  margin: '0px 0px 30px 70px',

  [theme.breakpoints.down('sm')]: {
    margin: '0px 0px 30px 30px'
  },
}));

export const FooterLink = styled(Link)(({ theme }) => ({
  letterSpacing: '.3px',
  marginBottom: '11px'
}));
