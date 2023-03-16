import { Box, Button, styled } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const FlexBox = styled(Box)(() => ({
  display: 'flex',
  alignItems: 'center',
}));

const JustifyBox = styled(FlexBox)(() => ({
  maxWidth: 320,
  flexDirection: 'column',
  justifyContent: 'center',
}));

const IMG = styled('img')(() => ({
  width: '100%',
  marginBottom: '32px',
}));

const NotFoundRoot = styled(FlexBox)(() => ({
  width: '100%',
  alignItems: 'center',
  justifyContent: 'center',
  height: '59vmin'
}));

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <NotFoundRoot>
      <JustifyBox>
        <IMG src='/images/404.svg' alt='' />
        <Button
          color='primary'
          variant='contained'
          onClick={() => navigate(-1)}
        >
          Ir atrás
        </Button>
      </JustifyBox>
    </NotFoundRoot>
  );
};

export default NotFound;
