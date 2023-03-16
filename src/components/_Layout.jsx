import { styled } from '@mui/material/styles';
import { IconButton as MIconButton } from '@mui/material';

export const AppContent = styled('div')(() => ({
  marginTop: '124px',
  marginBottom: '80px',
  minHeight: '59vmin'
}));

export const IconButton = styled(MIconButton)(({ theme }) => ({
  position: 'fixed',
  right: 0,
  bottom: 0,
  margin: '0px 20px 50px 0px',

  [theme.breakpoints.down('sm')]: {
    padding: 0,
    margin: '0px 12px 65px 0px',
  }
}));
