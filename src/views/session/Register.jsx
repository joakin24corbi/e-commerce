
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { FormattedMessage, useIntl } from 'react-intl';
import {
  TextField,
  Typography,
  CircularProgress,
  Checkbox,
  Alert
} from '@mui/material';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { doLogin } from 'store/slices/auth/actions';
import FormControlLabel from 'components/FormControlLabel';
import {
  Header,
  BackButton,
  Img,
  Main,
  Section,
  H1,
  CheckPassword,
  LinkFocusable,
  Separation,
  Span,
  Button
} from './_Session';
import getPasswordRegex from 'utils/PasswordRegex';

const Register = () => {
  const intl = useIntl();
  const dispatch = useDispatch();
  const navigate = useNavigate();

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
              name: '',
              email: '',
              password: '',
              passwordCheck: '',
              terms: false,
              newsletter: false
            }}
            validationSchema={Yup.object().shape({
              name: Yup
                .string()
                .nullable(),
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
              terms: Yup
                .boolean()
                .oneOf(
                  [true],
                  intl.formatMessage({ id: 'YUP.ERROR.REQUIRED_FIELD' })
                ),
              newsletter: Yup
                .boolean()
                .required(intl.formatMessage({ id: 'YUP.ERROR.REQUIRED_FIELD' }))
            })}
            onSubmit={(values, { setStatus, setSubmitting }) => {
              try {
                dispatch(doLogin({ id: 1, email: values.email }));
                navigate('/', { state:{ } })
              } catch(err) {
                setStatus('Los datos introducidos no son válidos')
              } finally {
                setSubmitting(false);
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
                <H1><FormattedMessage id='REGISTER.TITLE' /></H1>
                <TextField
                  variant='outlined'
                  margin='normal'
                  fullWidth
                  id='name'
                  label={<FormattedMessage id='YUP.FORM.NAME' />}
                  name='name'
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.name}
                  helperText={touched.name && errors.name}
                  error={Boolean(touched.name && errors.name)}
                />
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
                <Field
                  component={FormControlLabel}
                  variant='outlined'
                  margin='normal'
                  required
                  id='terms'
                  name='terms'
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.terms}
                  control={<Checkbox />}
                  labelPlacement='end'
                  label={
                    <Typography>
                      <FormattedMessage id='YUP.FORM.TERMS_1' />
                      <LinkFocusable
                        color='inherit'
                        to={'/privacy-policy'}
                      >
                        <FormattedMessage id='YUP.FORM.TERMS_2' />
                      </LinkFocusable>
                    </Typography>
                  }
                />
                <Field
                  component={FormControlLabel}
                  id='newsletter'
                  name='newsletter'
                  variant='outlined'
                  margin='normal'
                  required
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.newsletter}
                  control={<Checkbox />}
                  labelPlacement='end'
                  label={<FormattedMessage id='YUP.FORM.NEWSLETTER' />}
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
                >
                  {isSubmitting && (
                    <CircularProgress size={24} style={{ marginRight: '16px' }} />
                  )}
                  <FormattedMessage id='REGISTER.BUTTON.SUBMIT' />
                </Button>
              </Form>
            )}
          </Formik>
          <Separation>
            <Span>
              <FormattedMessage id='REGISTER.SEPARATOR.LOGIN' />
            </Span>
          </Separation>
          <Button
            fullWidth
            variant='outlined'
            color='primary'
            component={Link}
            to='/login'
          >
            <FormattedMessage id='REGISTER.BUTTON.LOGIN' />
          </Button>
        </Section>
      </Main>
    </>
  );
};

export default Register;
