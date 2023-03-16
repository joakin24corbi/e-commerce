import { red } from '@mui/material/colors';
import { components } from './components';

const themeOptions = {
  typography: {
    fontFamily: 'Poppins, sans-serif',
    fontSize: 14,
    h2: {
      fontSize: '30px',
      fontWeight: 600,
      lineHeight: '24px'
    },
    h3: {
      fontSize: '24px',
      fontWeight: 500,
      lineHeight: '30px'
    },
    h4: {
      fontSize: '18px',
      fontWeight: 500,
      lineHeight: '24px'
    },
    body1: {
      fontSize: '14px'
    },
    bold: {
      fontSize: '16px',
      fontWeight: 1000,
      lineHeight: '24px'
    }
  },

  status: { danger: red[500] },
  components: { ...components },
};

export default themeOptions;
