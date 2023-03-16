import { useFormikContext } from 'formik';
import { useIntl } from 'react-intl';
import {
  Grid,
  Button
} from '@mui/material';
import {
  FormContent,
  TextField,
  FormActions
} from './_Checkout';

const CheckoutDelivery = ({ handleBack }) => {
  const intl = useIntl();
  
  const { values, handleChange, handleBlur, touched, errors } = useFormikContext();
  
  return (
    <>
      <FormContent container spacing={3}>
        <Grid item xs={12}>
          <TextField
            id='name'
            name='name'
            type='text'
            variant='outlined'
            fullWidth
            label='Nombre'
            onBlur={handleBlur}
            onChange={handleChange}
            value={values.name}
            helperText={touched.name && errors.name}
            error={Boolean(touched.name && errors.name)}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            id='address'
            name='address'
            type='text'
            variant='outlined'
            fullWidth
            label='Dirección'
            required
            onBlur={handleBlur}
            onChange={handleChange}
            value={values.address}
            helperText={touched.address && errors.address}
            error={Boolean(touched.address && errors.address)}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            id='postalCode'
            name='postalCode'
            type='text'
            variant='outlined'
            fullWidth
            label='Código postal'
            required
            onBlur={handleBlur}
            onChange={handleChange}
            value={values.postalCode}
            helperText={touched.postalCode && errors.postalCode}
            error={Boolean(touched.postalCode && errors.postalCode)}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            id='city'
            name='city'
            type='text'
            variant='outlined'
            fullWidth
            label='Ciudad'
            required
            onBlur={handleBlur}
            onChange={handleChange}
            value={values.city}
            helperText={touched.city && errors.city}
            error={Boolean(touched.city && errors.city)}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            id='province'
            name='province'
            type='text'
            variant='outlined'
            fullWidth
            label='Provincia'
            required
            onBlur={handleBlur}
            onChange={handleChange}
            value={values.province}
            helperText={touched.province && errors.province}
            error={Boolean(touched.province && errors.province)}
          />
        </Grid>
      </FormContent>
      <FormActions>
        <Button
          variant='contained'
          color='primary'
          onClick={handleBack}
          sx={{ ml: 1 }}
        >
          Atrás
        </Button>
        <Button
          variant='contained'
          color='primary'
          type='submit'
          sx={{ mr: 1 }}
        >
          Siguiente
        </Button>
      </FormActions>
    </>
  )
}

export default CheckoutDelivery;
