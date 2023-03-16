import { styled } from '@mui/material/styles';
import { Link, Button, IconButton } from '@mui/material';

export const TopSection = styled('div')(({ theme }) => ({
  display: 'grid',
  gridTemplateColumns: 'repeat(2, 1fr)',
  columnGap: '20px',
  marginBottom: theme.spacing(12),

  [theme.breakpoints.down('sm')]: {
    gridTemplateColumns: 'repeat(1, 1fr)',
    marginBottom: 0,
  }
}));

export const ProductImage = styled('div')(() => ({
  position: 'relative',
  overflow: 'hidden'
}));

export const Badges = styled('div')(() => ({
  position: 'absolute',
  top: '20px',
  left: '20px'
}));

export const DiscountBadge = styled('span')(() => ({
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

export const IsNewBadge = styled('span')(() => ({
  backgroundColor: '#a749ff',
  fontSize: '13px',
  fontWeight: 500,
  lineHeight: 1,
  display: 'block',
  padding: '3px 11px',
  color: '#fff',
  borderRadius: '3px'
}));

export const ExpandButtonDiv = styled('div')(() => ({
  position: 'absolute',
  top: '20px',
  right: '20px'
}));

export const ProductDetails = styled('div')(({ theme }) => ({
  marginLeft: '70px',

  [theme.breakpoints.down('sm')]: {
    marginLeft: 0,
    marginTop: theme.spacing(4)
  }
}));

export const ProductInfo = styled('div')(({ theme }) => ({
  padding: '0 0 37px',
  borderBottom: '1px solid #e5e5e5',

  '& h2': {
    fontSize: '24px',
    fontWeight: 400,
    lineHeight: 1,
    margin: 0,
    color: '#010101'
  },

  [theme.breakpoints.down('sm')]: {
    borderBottom: 'none',
    padding: '0 8px 16px',
  }
}));

export const PriceDetails = styled('div')(() => ({
  display: 'flex',
  alignItems: 'center',
  margin: '15px 0 26px'
}));

export const ProductPrice = styled('span')(() => ({
  fontSize: '24px',
  color: '#fe5252'
}));

export const ProductPriceOld = styled('span')(() => ({
  fontSize: '18px',
  marginLeft: '20px',
  textDecoration: 'line-through'
}));

export const Description = styled('div')(() => ({
  margin: '20px 0 34px'
}));

export const ShareButtons = styled('div')(() => ({
  margin: '24px 0 0'
}));

export const ShareButtonsWrapper = styled('ul')(() => ({
  display: 'flex',
  margin: 0,
  padding: 0,
  listStyle: 'outside none none'
}));

export const ShareButtonsItem = styled('li')(() => ({
  marginRight: '40px'
}));

export const ShareLink = styled(Link)(({ theme }) => ({
  fontSize: '16px',

  '&:hover': {
    color: theme.palette.primary.dark,
    transition: 'all .3s ease-in-out 0s'
  }
}));

export const AddToCart = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  marginTop: '40px',
  marginBottom: '34px',

  [theme.breakpoints.down('sm')]: {
    position: 'fixed',
    bottom: 0,
    left: 0,
    width: '100%',
    background: 'white',
    marginTop: 0,
    marginBottom: 0,
    padding: 10,
    boxShadow: '0 -5px 15px -3px rgb(0 0 0 / 23%)',
    justifyContent: 'space-between'
  }
}));

export const ChangeQuantityButton = styled(Button)(() => ({
  '&:hover': {
    backgroundColor: 'transparent'
  }
}));

export const AddToCartButton = styled(IconButton)(({ theme }) => ({
  marginRight: '38px',

  [theme.breakpoints.down('sm')]: {
    marginRight: '8px'
  }
}));

export const TabsWrapper = styled('div')(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  width: '100%',
  borderBottom: '1px solid #d7d7d7',

  [theme.breakpoints.up('sm')]: {
    width: theme.breakpoints.values.lg,
    marginLeft: 'auto',
    marginRight: 'auto'
  }
}));
