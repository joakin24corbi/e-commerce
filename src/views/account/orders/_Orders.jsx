import { styled } from '@mui/material/styles';
import { Card as MuiCard, Grid, Typography, FormControl as MuiFormControl } from '@mui/material';

export const Filters = styled('div')(({ theme }) => ({
  margin: theme.spacing(4, 0, 3),
  display: 'flex',
  flexDirection: 'row',
  flexWrap: 'wrap'
}));

export const FiltersText = styled('div')(() => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center'
}));

export const FormControl = styled(MuiFormControl)(({ theme }) => ({
  margin: '0 0 0 16px',

  [theme.breakpoints.down('sm')]: {
    margin: '16px 0 0',
    flexBasis: '100%'
  }
}));

export const Card = styled(MuiCard)(() => ({
  padding: 0,
  rowGap: 0
}));

export const Top = styled('div')(({ theme }) => ({
  padding: theme.spacing(2),
  borderBottom: `1px solid ${theme.palette.divider}`,
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  backgroundColor: theme.palette.background.footer,

  [theme.breakpoints.down('sm')]: {
    gridTemplateColumns: 'repeat(1, 1fr)',
  }
}));

export const TopDate = styled('div')(() => ({ }));

export const TopTotal = styled(Typography)(({ theme }) => ({
  display: 'flex',
  textAlign: 'center',
  justifyContent: 'center',

  [theme.breakpoints.down('sm')]: {
    display: 'inherit',
    textAlign: 'left',
    justifyContent: 'inherit',
  }
}));

export const TopId = styled(Typography)(({ theme }) => ({
  display: 'flex',
  textAlign: 'right',
  justifyContent: 'right',

  [theme.breakpoints.down('sm')]: {
    display: 'inherit',
    textAlign: 'left',
    justifyContent: 'inherit',
  }
}));

export const Bottom = styled(Grid)(({ theme }) => ({
  padding: theme.spacing(2),
  marginTop: 0,
  paddingTop: 0
}));

export const CartContent = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'row',

  [theme.breakpoints.down('sm')]: {
    flexDirection: 'column',
  }
}));

export const ProductImg = styled('img')(({ theme }) => ({
  width: '100%',
  maxWidth: '6.6rem',
  marginBottom: '-6px',

  [theme.breakpoints.down('sm')]: {
    maxWidth: 'inherit'
  }
}));

export const CardContentRight = styled('div')(() => ({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  marginLeft: '1rem',
  paddingTop: '16px'
}));

export const FlexDiv = styled('div')(() => ({
  display: 'flex',
  flexDirection: 'column',
  rowGap: '1rem'
}));

export const H4 = styled('h4')(() => ({
  margin: 0
}));

export const PriceGrid = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',

  [theme.breakpoints.down('sm')]: {
    justifyContent: 'flex-start'
  },
}));

export const ProductPriceOld = styled('span')(() => ({
  fontSize: '15px',
  fontWeight: 600,
  position: 'relative',
  textDecoration: 'line-through',
  color: '#8e8e8e',
}));

export const ProductPrice = styled('span')(() => ({
  fontSize: '15px',
  fontWeight: 600,
  position: 'relative',
  color: '#000',
  margin: '0 9px',
}));
