import { styled, alpha } from '@mui/material/styles';
import {
  AppBar,
  Container,
  Typography,
  Toolbar,
  InputBase,
  IconButton
} from '@mui/material';

export const StyledAppBar = styled(AppBar)(() => ({
  backgroundColor: 'transparent',
  boxShadow: 'none',
  color: 'inherit'
}));

export const DefaultBackground = styled('div')(({ theme }) => ({
  backgroundColor: theme.palette.background.default,
}));

export const StyledContainer = styled(Container)(({ theme }) => ({
  [theme.breakpoints.down('sm')]: {
    padding: 0
  }
}));

export const LogoTypography = styled(Typography)(({ theme }) => ({
  [theme.breakpoints.down('sm')]: {
    paddingLeft: 12,
    paddingRight: 12
  }
}));

export const StyledToolBar = styled(Toolbar)(({ theme }) => ({
  [theme.breakpoints.down('sm')]: {
    padding: 0
  }
}));

export const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.black, 0.05),
  marginLeft: 0,
  width: '100%',

  '&:hover': {
    backgroundColor: alpha(theme.palette.common.black, 0.10),
  },

  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

export const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

export const StyledInputBase = styled(InputBase)(({ theme }) => ({
  width: '100%',

  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',

    [theme.breakpoints.up('sm')]: {
      width: '12ch',

      '&:focus': {
        width: '20ch',
      },
    },
  },
}));

export const CartIconButton = styled(IconButton)(({ theme }) => ({
  [theme.breakpoints.down('sm')]: {
    paddingRight: 0,
    paddingLeft: 12,
  }
}));

export const ProfileIconButton = styled(IconButton)(({ theme }) => ({
  [theme.breakpoints.down('sm')]: {
    marginRight: 0
  }
}));

export const Gradient = styled('div')(({ theme }) => ({
  width: '100%',
  height: '80px',
  background: `linear-gradient(to bottom, ${theme.palette.background.default}, transparent)`
}));
