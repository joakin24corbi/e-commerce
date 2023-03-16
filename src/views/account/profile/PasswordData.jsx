import React from 'react';
import { useDispatch } from 'react-redux';
import { FormattedMessage, useIntl } from 'react-intl';
import { Formik } from 'formik';
import * as Yup from 'yup';
import {
  Grid,
  TextField,
  Button,
  Typography,
  CircularProgress,
} from '@mui/material';
import {
  Card
} from './_Profile';
import getPasswordRegex from 'utils/PasswordRegex';

const PasswordData = () => {
  const intl = useIntl();
  const dispatch = useDispatch();

  return (
    <Card>
      <Typography variant='h6'>
        <FormattedMessage id='ACCOUNT.PASSWORD.TITLE' />
      </Typography>
      <Formik
        initialValues={{
          oldPassword: '',
          password: '',
          passwordCheck: '',
        }}
        validationSchema={Yup.object().shape({
          oldPassword: Yup
            .string()
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
        onSubmit={(values, { setSubmitting }) => {
          /* changePassword(values.oldPassword, values.password)
            .then((response) => {
              if (response.status === 200) {
                // Show snack feedback
                dispatch(
                  snackActions.successNotification(
                    intl.formatMessage({
                      id: 'ACCOUNT.PASSWORD.TITLE.CHANGED',
                    })
                  )
                );

                values.oldPassword = '';
                values.password = '';
                values.passwordCheck = '';
              } else {
                dispatch(
                  snackActions.errorNotification(
                    intl.formatMessage({
                      id: 'ACCOUNT.PASSWORD.TITLE.ERROR',
                    })
                  )
                );
              }

              setSubmitting(false);
            })
            .catch(() => {
              setSubmitting(false);
            }); */
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
        }) => (
          <form noValidate onSubmit={handleSubmit}>
            <Grid container spacing={2} sx={{ my: 2 }}>
              <Grid item xs={12} sm={12} md={4}>
                <TextField
                  id='oldPassword'
                  name='oldPassword'
                  type='password'
                  variant='outlined'
                  fullWidth
                  required
                  label={<FormattedMessage id='YUP.FORM.PASSWORD_OLD' />}
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.oldPassword}
                  helperText={touched.oldPassword && errors.oldPassword}
                  error={Boolean(touched.oldPassword && errors.oldPassword)}
                />
              </Grid>
              <Grid item xs={12} sm={12} md={4}>
                <TextField
                  id='password'
                  name='password'
                  type='password'
                  variant='outlined'
                  fullWidth
                  required
                  label={<FormattedMessage id='YUP.FORM.PASSWORD' />}
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.password}
                  helperText={touched.password && errors.password}
                  error={Boolean(touched.password && errors.password)}
                />
              </Grid>
              <Grid item xs={12} sm={12} md={4}>
                <TextField
                  id='passwordCheck'
                  name='passwordCheck'
                  type='password'
                  variant='outlined'
                  fullWidth
                  required
                  label={<FormattedMessage id='YUP.FORM.PASSWORD_CHECK' />}
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.passwordCheck}
                  helperText={touched.passwordCheck && errors.passwordCheck}
                  error={Boolean(touched.passwordCheck && errors.passwordCheck)}
                />
              </Grid>
              <Grid item xs={12} sm={6} md={8}>
                <Typography variant='body2' className='v1-contrast'>
                  <FormattedMessage id='ACCOUNT.PASSWORD.SECURITY_1' />
                </Typography>
                <Typography variant='caption'>
                  <ul className='v1-contrast'>
                    <li>
                      <FormattedMessage id='ACCOUNT.PASSWORD.SECURITY_2' />
                    </li>
                    <li>
                      <FormattedMessage id='ACCOUNT.PASSWORD.SECURITY_3' />
                    </li>
                    <li>
                      <FormattedMessage id='ACCOUNT.PASSWORD.SECURITY_4' />
                    </li>
                  </ul>
                </Typography>
              </Grid>
              <Grid item xs={12} sm={6} md={4} sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                <Button
                  type='submit'
                  variant='contained'
                  color='primary'
                  disabled={isSubmitting}
                  fullWidth
                  sx={{ height: '53.13px' }}
                >
                  {isSubmitting && (
                    <CircularProgress size={24} sx={{ mr: '12px' }} />
                  )}
                  <FormattedMessage id='ACCOUNT.BUTTON.SUBMIT' />
                </Button>
              </Grid>
            </Grid>
          </form>
        )}
      </Formik>
    </Card>
  );
};

export default PasswordData;
