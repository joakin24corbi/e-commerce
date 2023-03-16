import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { FormattedMessage, useIntl } from 'react-intl';
import { Formik } from 'formik';
import * as Yup from 'yup';
import {
  Grid,
  TextField,
  Button,
  Typography,
  CircularProgress
} from '@mui/material';
import {
  Card
} from './_Profile';

const AccountData = () => {
  const intl = useIntl();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);

  return (
    <Card>
      <Typography variant='h6'>
        <FormattedMessage id='ACCOUNT.GENERAL_INFO.TITLE' />
      </Typography>
      <Formik
        initialValues={{
          email: user.email || '',
          name: user.name || ''
        }}
        validationSchema={Yup.object().shape({
          email: Yup
            .string()
            .email(intl.formatMessage({ id: 'YUP.ERROR.EMAIL_FORMAT' }))
            .required(intl.formatMessage({ id: 'YUP.ERROR.REQUIRED_FIELD' })),
          name: Yup
            .string()
        })}
        onSubmit={(values, { setSubmitting }) => {
          /*modifyUser(values).then((response) => {
            if (response.status === 200) {
              // Saving user data in store
              onUserUpdated(response.data);
              // Show snack feedback
              dispatch(
                snackActions.successNotification(
                  intl.formatMessage({
                    id: 'ACCOUNT.GENERAL_INFO.CHANGED',
                  })
                )
              );
            } else {
              dispatch(
                snackActions.errorNotification(
                  intl.formatMessage({
                    id: 'ACCOUNT.GENERAL_INFO.ERROR',
                  })
                )
              );
            }

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
          setFieldValue,
          isSubmitting,
        }) => (
          <form noValidate onSubmit={handleSubmit}>
            <Grid container spacing={2} sx={{ my: 2 }}>
              <Grid item xs={12} sm={12}>
                <Grid container spacing={2}>
                  {/* EMAIL */}
                  <Grid item xs={12} sm={6}>
                    <TextField
                      id='email'
                      name='email'
                      type='text'
                      label={<FormattedMessage id='YUP.FORM.EMAIL' />}
                      variant='outlined'
                      fullWidth
                      required
                      disabled
                      value={values.email}
                      onBlur={handleBlur}
                      onChange={handleChange}
                      helperText={touched.email && errors.email}
                      error={Boolean(touched.email && errors.email)}
                    />
                  </Grid>
                  {/* NAME */}
                  <Grid item xs={12} sm={6}>
                    <TextField
                      id='name'
                      name='name'
                      label={<FormattedMessage id='YUP.FORM.NAME' />}
                      type='text'
                      variant='outlined'
                      fullWidth
                      onBlur={handleBlur}
                      onChange={handleChange}
                      value={values.name}
                      helperText={touched.name && errors.name}
                      error={Boolean(touched.name && errors.name)}
                    />
                  </Grid>
                </Grid>
              </Grid>
              {/* SUBMIT */}
              <Grid item xs={12}>
                <Grid container spacing={2}>
                  {/* EMPTY */}
                  <Grid item sm={6} md={8} sx={{ display: { xs: 'none', sm: 'inherit' } }} />
                  <Grid item xs={12} sm={6} md={4}>
                    <Button
                      type='submit'
                      variant='contained'
                      color='primary'
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
              </Grid>
            </Grid>
          </form>
        )}
      </Formik>
    </Card>
  );
};

export default AccountData;
