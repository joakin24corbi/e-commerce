import { useFormikContext } from 'formik';
import { useIntl } from 'react-intl';
import {
  Button,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  FormControlLabel,
  Radio,
  Alert,
  AlertTitle
} from '@mui/material';
import {
  FormContent,
  FormActions
} from './_Checkout';
import { PaymentMethods } from 'enums/PaymentMethods';

const CheckoutPayment = ({ handleBack }) => {
  const intl = useIntl();

  const { values, touched, errors, setFieldValue } = useFormikContext()
  
  return (
    <>
      <FormContent>
        <Accordion
          expanded={values.paymentMethod === PaymentMethods.VISA}
          onClick={(event) => {
            event.stopPropagation();
            setFieldValue('paymentMethod', PaymentMethods.VISA);
          }}
        >
          <AccordionSummary>
            <FormControlLabel
              value="OutSpain"
              color="primary"
              control={<Radio />}
              onFocus={(event) => event.stopPropagation()}
              checked={values.paymentMethod === PaymentMethods.VISA}
              label='Visa'
            />
          </AccordionSummary>
          <AccordionDetails>
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={values.paymentMethod === PaymentMethods.MASTERCARD}
          onClick={(event) => {
            event.stopPropagation();
            setFieldValue('paymentMethod', PaymentMethods.MASTERCARD);
          }}
        >
          <AccordionSummary>
            <FormControlLabel
              value="OutSpain"
              color="primary"
              control={<Radio />}
              onFocus={(event) => event.stopPropagation()}
              checked={values.paymentMethod === PaymentMethods.MASTERCARD}
              label='Mastercard'
            />
          </AccordionSummary>
          <AccordionDetails>
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={values.paymentMethod === PaymentMethods.PAYPAL}
          onClick={(event) => {
            event.stopPropagation();
            setFieldValue('paymentMethod', PaymentMethods.PAYPAL);
          }}
        >
          <AccordionSummary>
            <FormControlLabel
              value="OutSpain"
              color="primary"
              control={<Radio />}
              onFocus={(event) => event.stopPropagation()}
              checked={values.paymentMethod === PaymentMethods.PAYPAL}
              label='Paypal'
            />
          </AccordionSummary>
          <AccordionDetails>
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={values.paymentMethod === PaymentMethods.STRIPE}
          onClick={(event) => {
            event.stopPropagation();
            setFieldValue('paymentMethod', PaymentMethods.STRIPE);
          }}
        >
          <AccordionSummary>
            <FormControlLabel
              value="OutSpain"
              color="primary"
              control={<Radio />}
              onFocus={(event) => event.stopPropagation()}
              checked={values.paymentMethod === PaymentMethods.STRIPE}
              label='Stripe'
            />
          </AccordionSummary>
          <AccordionDetails>
          </AccordionDetails>
        </Accordion>
        {touched.paymentMethod && errors.paymentMethod && (
          <Alert severity='error' sx={{ marginTop: '32px' }}>
            <AlertTitle>Error</AlertTitle>
            Debes seleccionar un tipo de pago
          </Alert>
        )}
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
          sx={{ mr: 1 }}
          type='submit'
        >
          Siguiente
        </Button>
      </FormActions>
    </>
  )
}

export default CheckoutPayment;
