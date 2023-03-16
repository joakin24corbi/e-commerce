import { Link, useNavigate, useParams } from 'react-router-dom';
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
import {
  Header,
  BackButton,
  Img,
  Main,
  Section,
  H1,
  CheckPassword,
  Button
} from './_Session';
import getPasswordRegex from 'utils/PasswordRegex';

const ResetPassword = () => {
  const intl = useIntl();
  const navigate = useNavigate();

  let { token } = useParams();

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
              token: token,
              email: '',
              password: '',
              passwordCheck: '',
            }}
            validationSchema={Yup.object().shape({
              token: Yup
                .string()
                .required(intl.formatMessage({ id: 'YUP.ERROR.REQUIRED_FIELD' })),
              email: Yup
                .string()
                .email(intl.formatMessage({ id: 'YUP.ERROR.EMAIL_FORMAT' }))
                .required(intl.formatMessage({ id: 'YUP.ERROR.REQUIRED_FIELD' })),
              password: Yup
                .string()
                .required(intl.formatMessage({ id: 'YUP.ERROR.REQUIRED_FIELD' }))
                .matches(
                  getPasswordRegex(),
                  intl.formatMessage({ id: 'YUP.ERROR.PASSWORD_FORMAT' })
                ),
              passwordCheck: Yup
                .string()
                .required(intl.formatMessage({ id: 'YUP.ERROR.REQUIRED_FIELD' }))
                .oneOf(
                  [Yup.ref('password'), null],
                  intl.formatMessage({ id: 'YUP.ERROR.PASSWORD_UNMATCH' })
                ),
            })}
            onSubmit={(values, { setStatus, setSubmitting }) => {
              try {
                navigate('/login')
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
                <H1><FormattedMessage id='RESET.TITLE' /></H1>
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
                <CheckPassword
                  variant='outlined'
                  margin='normal'
                  required
                  fullWidth
                  disabled={!values.password}
                  name='passwordCheck'
                  label={<FormattedMessage id='YUP.FORM.PASSWORD_CHECK' />}
                  type='password'
                  id='passwordCheck'
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.passwordCheck}
                  helperText={touched.passwordCheck && errors.passwordCheck}
                  error={Boolean(touched.passwordCheck && errors.passwordCheck)}
                />
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
                  style={{ marginTop: '24px', marginBottom: '24px' }}
                >
                  {isSubmitting && (
                    <CircularProgress size={24} style={{ marginRight: '16px' }} />
                  )}
                  <FormattedMessage id='RESET.BUTTON.SUBMIT' />
                </Button>
              </Form>
            )}
          </Formik>
          <Box my={2}>
            <Link to='/login' style={{ display: 'flex' }}>
              <Typography variant='caption' align='center' style={{ width: '100%' }}>
                <FormattedMessage id='RESET.BUTTON.LOGIN' />
              </Typography>
            </Link>
          </Box>
        </Section>
      </Main>
    </>
  );
};

export default ResetPassword;
