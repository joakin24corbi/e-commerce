import { styled } from '@mui/material/styles';
import { Button } from '@mui/material';

export const TitleDiv = styled('div')(({ theme }) => ({
  textAlign: 'center',

  '& h2': {
    fontSize: '30px',
    fontWeight: 600,
    position: 'relative',
    display: 'inline-block',
    margin: 0,
    color: 'black',

    '&::before': {
      position: 'absolute',
      top: '17px',
      left: '-100px',
      width: '80px',
      height: '2px',
      content: '""',
      backgroundColor: 'black'
    },
  
    '&::after': {
      position: 'absolute',
      top: '17px',
      right: '-100px',
      width: '80px',
      height: '2px',
      content: '""',
      backgroundColor: 'black'
    },

    [theme.breakpoints.down('sm')]: {
      '&::before': {
        position: 'static',
        width: 0
      },
    
      '&::after': {
        position: 'static',
        width: 0
      }
    }
  }
}));

export const ContentDiv = styled('div')(({ theme }) => ({
  margin: '70px 0px 50px 0px',
  padding: 0,
  display: 'grid',
  gridTemplateColumns: 'repeat(4, 1fr)',
  columnGap: 30,

  [theme.breakpoints.down('md')]: {
    gridTemplateColumns: 'repeat(2, 1fr)'
  },

  [theme.breakpoints.down('sm')]: {
    gridTemplateColumns: 'repeat(1, 1fr)',
    marginTop: '30px'
  },
}));

export const ProductWrapper = styled('div')(({ theme }) => ({
  position: 'relative',
  marginBottom: '25px',
  width: '100%',
}));

export const ProductImage = styled('div')(({ theme }) => ({
  position: 'relative',
  overflow: 'hidden'
}));

export const Badges = styled('div')(({ theme }) => ({
  position: 'absolute',
  top: '12px',
  right: '12px'
}));

export const DiscountBadge = styled('span')(({ theme }) => ({
  backgroundColor: '#fa6bff',
  fontSize: '13px',
  fontWeight: 500,
  lineHeight: 1,
  display: 'block',
  marginBottom: '10px',
  padding: '3px 11px',
  color: '#fff',
  borderRadius: '3px'
}));

export const IsNewBadge = styled('span')(({ theme }) => ({
  backgroundColor: '#a749ff',
  fontSize: '13px',
  fontWeight: 500,
  lineHeight: 1,
  display: 'block',
  padding: '3px 11px',
  color: '#fff',
  borderRadius: '3px'
}));

export const ProductContent = styled('div')(({ theme }) => ({
  textAlign: 'center',
  margin: '20px 0 0',

  '& a': {
    '& h3': {
      fontWeight: 400,
      margin: 0
    }
  },

  '& #rating': {
    margin: '3px 0px'
  }
}));

export const ProductPrice = styled('span')(({ theme }) => ({
  fontSize: '15px',
  fontWeight: 600,
  position: 'relative',
  margin: '0 9px',
  color: '#000'
}));

export const ProductPriceOld = styled('span')(({ theme }) => ({
  fontSize: '15px',
  fontWeight: 600,
  position: 'relative',
  margin: '0 9px',
  textDecoration: 'line-through',
  color: '#8e8e8e',

  '&::before': {
    position: 'absolute',
    top: '10px',
    left: '-13px',
    width: '7px',
    height: '2px',
    content: '""',
    backgroundColor: '#000'
  }
}));

export const LoadMoreProductsDiv = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center'
}));

export const LoadMoreProductsButton = styled(Button)(({ theme }) => ({
  marginBottom: '100px',

  [theme.breakpoints.down('sm')]: {
    marginBottom: 0
  },
}));
