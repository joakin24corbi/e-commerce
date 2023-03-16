
import { useDispatch } from 'react-redux';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { FormattedMessage, useIntl } from 'react-intl';
import {
  TextField,
  Typography,
  CircularProgress,
  Box,
  Alert
} from '@mui/material';
import { Form, Formik } from 'formik';
import * as Yup from 'yup';
import { doLogin } from 'store/slices/auth/actions';
import {
  Header,
  BackButton,
  Img,
  Main,
  Section,
  H1,
  Separation,
  Span,
  Button
} from './_Session';

const Login = () => {
  const intl = useIntl();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  const redirect = location.state?.redirect;

  return (
    <>
      <Header>
        <BackButton
          onClick={() => navigate(-1)}
        >
          <div style={{ display: 'inline-flex' }}>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 24 24'
              enableBackground='new 0 0 24 24'
              aria-hidden='true'
              style={{
                overflow: 'hidden',
                fill: '#333333',
                display: 'inline-flex',
                alignSelf: 'center',
                width: '24px',
                height: '24px',
              }}
            >
              <path d='M22 11h-15.6l2.3-2.3-1.4-1.4-4.7 4.7 4.7 4.7 1.4-1.4-2.3-2.3h15.6z' />
            </svg>
          </div>
        </BackButton>
        <Link to='/'>
          <Img src='/images/logo192.png' alt='logo' width={138} heigth={48} />
        </Link>
      </Header>
      <Main>
        <Section>
          <Formik
            initialValues={{
              email: '',
              password: '',
            }}
            validationSchema={Yup.object().shape({
              email: Yup
                .string()
                .email(intl.formatMessage({ id: 'YUP.ERROR.EMAIL_FORMAT' }))
                .required(intl.formatMessage({ id: 'YUP.ERROR.REQUIRED_FIELD' })),
              password: Yup
                .string()
                .required(intl.formatMessage({ id: 'YUP.ERROR.REQUIRED_FIELD' })),
            })}
            onSubmit={(values, { setStatus, setSubmitting }) => {
              try {
                dispatch(doLogin({ id: 1, email: values.email }));
                navigate(redirect ?? '/', { replace: redirect ? true : false })
              } catch(err) {
                setStatus('Los datos introducidos no son válidos')
              } finally {
                setSubmitting(false)
              }
            }}
          >
            {({
              values,
              errors,
              status,
              touched,
              handleChange,
              handleBlur,
              handleSubmit,
              isSubmitting,
            }) => (
              <Form noValidate onSubmit={handleSubmit}>
                <H1><FormattedMessage id='LOGIN.TITLE' /></H1>
                <TextField
                  variant='outlined'
                  margin='normal'
                  required
                  fullWidth
                  id='email'
                  label={<FormattedMessage id='YUP.FORM.EMAIL' />}
                  name='email'
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.email}
                  helperText={touched.email && errors.email}
                  error={Boolean(touched.email && errors.email)}
                />
                <TextField
                  variant='outlined'
                  margin='normal'
                  required
                  fullWidth
                  name='password'
                  label={<FormattedMessage id='YUP.FORM.PASSWORD' />}
                  type='password'
                  id='password'
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.password}
                  helperText={touched.password && errors.password}
                  error={Boolean(touched.password && errors.password)}
                />
                <Box my={2}>
                  <Link to='/forgot-password' /* style={{ display: 'flex' }} */>
                    <Typography variant='caption' /* align='center' style={{ width: '100%' }} */>
                      <FormattedMessage id='LOGIN.BUTTON.FORGOT_PASSWORD' />
                    </Typography>
                  </Link>
                </Box>
                {status && (
                  <Alert severity='error'>
                    {status}
                  </Alert>
                )}
                <Button
                  type='submit'
                  fullWidth
                  variant='contained'
                  color='primary'
                  disabled={isSubmitting}
                >
                  {isSubmitting && (
                    <CircularProgress size={24} style={{ marginRight: '16px' }} />
                  )}
                  <FormattedMessage id='LOGIN.BUTTON.SUBMIT' />
                </Button>
              </Form>
            )}
          </Formik>
          <Separation>
            <Span>
              <FormattedMessage id='LOGIN.SEPARATOR.REGISTER' />
            </Span>
          </Separation>
          <Button
            fullWidth
            variant='outlined'
            color='primary'
            component={Link}
            to='/signup'
          >
            <FormattedMessage id='LOGIN.BUTTON.REGISTER' />
          </Button>
        </Section>
      </Main>
    </>
  );
};

export default Login;
