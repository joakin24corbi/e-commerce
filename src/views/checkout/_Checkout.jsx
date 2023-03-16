import { styled } from '@mui/material/styles';
import { Grid, TextField as MuiTextField } from '@mui/material';

export const FormContent = styled(Grid)(({ theme }) => ({
  marginTop: theme.spacing(4),
  marginBottom: theme.spacing(8),
}));

export const TextField = styled(MuiTextField)(({ theme }) => ({
  '& .MuiInputBase-input': {
    backgroundColor: theme.palette.common.white
  }
}));

export const FormActions = styled('div')(() => ({
  width: '100%',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center'
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

  [theme.breakpoints.down('sm')]: {
    maxWidth: 'inherit'
  }
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

export const AmountGrid = styled('div')(() => ({
  marginTop: '16px'
}));
