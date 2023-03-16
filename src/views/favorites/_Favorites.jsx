import { styled } from '@mui/material/styles';
import { Button } from '@mui/material';
import { IconButton as MIconButton } from '@mui/material';
import { Clear as MClearIcon } from '@mui/icons-material';
import { Grid } from '@mui/material';

export const CartWrapper = styled('div')(({ theme }) => ({
  marginTop: '90px',
  marginBottom: '100px',

  [theme.breakpoints.down('sm')]: {
    marginTop: '-20px'
  }
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
  maxWidth: '12rem',

  [theme.breakpoints.down('sm')]: {
    maxWidth: 'inherit'
  }
}));

export const PriceGrid = styled('div')(({ theme }) => ({
  display: 'grid',
  gridTemplateColumns: 'repeat(2, 1fr)',
  columnGap: '20px',

  [theme.breakpoints.down('sm')]: {
    gridTemplateColumns: 'repeat(1, 1fr)'
  },
}));

export const PriceGridItem = styled('div')(({ theme }) => ({
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

export const ChangeQuantityButton = styled(Button)(({ theme }) => ({
  padding: 0,
  minWidth: '38px',
  lineHeight: 2.5,
  borderRadius: 0,
  borderColor: theme.palette.divider,

  '&:hover': {
    backgroundColor: 'transparent',
  },

  '&:disabled': {
    cursor: 'not-allowed',
    pointerEvents: 'all !important'
  }
}));

export const AmountDiv = styled('div')(({ theme }) => ({
  borderTop: `1px solid ${theme.palette.divider}`,
  borderBottom: `1px solid ${theme.palette.divider}`,
  paddingLeft: '16px',
  paddingRight: '16px',
  lineHeight: 2.5,
  margin: '16px 0'
}));

export const ClearIconButton = styled(MIconButton)(() => ({
  position: 'absolute',
  top: 10,
  right: 10
}));

export const ClearIcon = styled(MClearIcon)(({ theme }) => ({
  '&:hover': {
    color: theme.palette.error.main
  }
}));

export const CartOptions = styled(Grid)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',

  [theme.breakpoints.down('sm')]: {
    flexDirection: 'column',
    gap: '24px'
  }
}));

export const StickyDiv = styled('div')(({ theme }) => ({
  [theme.breakpoints.down('sm')]: {
    position: 'normal'
  }
}));
