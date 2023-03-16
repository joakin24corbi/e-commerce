import { styled } from '@mui/material/styles';
import {
  TextField,
  Button as MButton
} from '@mui/material';
import { Link } from 'react-router-dom';

export const Header = styled('header')(({ theme }) => ({
  width: '100%',
  padding: '0 1rem',
  borderBottom: '1px solid #CCCCCC',
  display: 'flex',
  webkitAlignItems: 'center',
  webkitBoxAlign: 'center',
  msFlexAlign: 'center',
  alignItems: 'center',

  [theme.breakpoints.up('sm')]: {
    padding: '6rem 1rem 3.5rem',
    borderBottom: 'none',
    webkitBoxPack: 'center',
    webkitJustifyContent: 'center',
    msFlexPack: 'center',
    justifyContent: 'center',
  }
}));

export const BackButton = styled(MButton)(({ theme }) => ({
  width: '3rem',
  height: '3rem',
  marginRight: '1rem',
  padding: '0',
  display: 'flex',
  webkitBoxPack: 'center',
  webkitJustifyContent: 'center',
  msFlexPack: 'center',
  justifyContent: 'center',
  webkitAlignItems: 'center',
  webkitBoxAlign: 'center',
  msFlexAlign: 'center',
  alignItems: 'center',
  minWidth: 'inherit',

  [theme.breakpoints.up('sm')]: {
    display: 'none'
  }
}));

export const Img = styled('img')(({ theme }) => ({
  width: 'auto',
  maxHeight: '24px',

  [theme.breakpoints.up('sm')]: {
    maxHeight: '48px'
  }
}));

export const Main = styled('main')(() => ({
  display: 'flex',
  justifyContent: 'center'
}));

export const Section = styled('section')(({ theme }) => ({
  maxWidth: '32.25rem',
  padding: '2rem 1rem',
  webkitFlex: 1,
  msFlex: 1,
  flex: 1,

  [theme.breakpoints.up('sm')]: {
    paddingRight: '3rem',
    paddingLeft: '3.75rem'
  }
}));

export const H1 = styled('h1')(() => ({
  marginBottom: '2rem'
}));

export const CheckPassword = styled(TextField)(() => ({
  '& .Mui-disabled': {
    cursor: 'not-allowed',
    pointerEvents: 'all !important'
  }
}));

export const LinkFocusable = styled(Link)(({ theme }) => ({
  textDecoration: 'underline',

  '&:hover': {
    color: theme.palette.primary.dark
  }
}));

export const Separation = styled('div')(() => ({
  width: '100%',
  textAlign: 'center',
  position: 'relative',
  margin: '2rem 0',
  minHeight: '22px',

  '&:before': {
    content: '""',
    width: '100%',
    position: 'absolute',
    top: '50%',
    height: '1px',
    background: '#CCCCCC',
    left: '0',
  }
}));

export const Span = styled('span')(({ theme }) => ({
  display: 'inline-block',
  margin: '0 auto',
  background: theme.palette.background.default,
  padding: '0 1rem',
  position: 'relative',
  fontSize: '0.875rem',
  lineHeight: '1.25rem',
  fontWeight: '700',
  webkitLetterSpacing: 'normal',
  mozLetterSpacing: 'normal',
  msLetterSpacing: 'normal',
  letterSpacing: 'normal'
}));

export const Button = styled(MButton)(() => ({
  minHeight: '3rem'
}));

export const CaptchaWrapper = styled('div')(() => ({
  display: 'flex',
  alignContent: 'center',
  justifyContent: 'center',
  paddingTop: '24px'
}));
