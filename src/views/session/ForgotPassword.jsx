import { useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
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
  Button,
  CaptchaWrapper
} from './_Session';
import ReCAPTCHA from 'react-google-recaptcha';

const ForgotPassword = () => {
  const intl = useIntl();
  const navigate = useNavigate();
  const captcha = useRef(null);

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
              captcha: false
            }}
            validationSchema={Yup.object().shape({
              email: Yup
                .string()
                .email(intl.formatMessage({ id: 'YUP.ERROR.EMAIL_FORMAT' }))
                .required(intl.formatMessage({ id: 'YUP.ERROR.REQUIRED_FIELD' })),
              captcha: Yup
                .boolean()
                .oneOf(
                  [true],
                  intl.formatMessage({ id: 'YUP.ERROR.REQUIRED_FIELD' })
                )
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
              setFieldValue
            }) => (
              <Form noValidate onSubmit={handleSubmit}>
                <H1><FormattedMessage id='FORGOT_PASSWORD.TITLE' /></H1>
                <Typography style={{ marginBottom: '12px' }}>
                  <FormattedMessage id='FORGOT_PASSWORD.SUBTITLE' />
                </Typography>
                <CaptchaWrapper>
                  <ReCAPTCHA
                    ref={captcha}
                    /* TODO move token to environment file */
                    sitekey={process.env.GOOGLE_RECAPTCHA_KEY}
                    onChange={() => {
                      if (captcha.current.getValue()) {
                        setFieldValue('captcha', true);
                      }
                    }}
                  />
                  {status && (
                    <Alert severity='error'>
                      {status}
                    </Alert>
                  )}
                </CaptchaWrapper>
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
                <Button
                  type='submit'
                  fullWidth
                  variant='contained'
                  color='primary'
                  disabled={isSubmitting}
                  style={{ marginTop: '8px', marginBottom: '24px' }}
                >
                  {isSubmitting && (
                    <CircularProgress size={24} style={{ marginRight: '16px' }} />
                  )}
                  <FormattedMessage id='FORGOT_PASSWORD.BUTTON.SUBMIT' />
                </Button>
              </Form>
            )}
          </Formik>
          <Box my={2}>
            <Link to='/login' style={{ display: 'flex' }}>
              <Typography variant='caption' align='center' style={{ width: '100%' }}>
                <FormattedMessage id='FORGOT_PASSWORD.BUTTON.LOGIN' />
              </Typography>
            </Link>
          </Box>
        </Section>
      </Main>
    </>
  );
};

export default ForgotPassword;
