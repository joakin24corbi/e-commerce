import useSettings from 'hooks/useSettings';
import { useIntl } from 'react-intl';
import { Container } from '@mui/material';
import FormikStepper from 'components/FormikStepper';
import FormikStep from 'components/FormikStep';
import CheckoutDelivery from './CheckoutDelivery';
import CheckoutReview from './CheckoutReview';
import CheckoutPayment from './CheckoutPayment';
import * as Yup from 'yup';
import { PaymentMethods } from 'enums/PaymentMethods';

const Checkout = () => {
  const settings = useSettings();
  const intl = useIntl();

  return (
    <Container maxWidth={settings.maxWidth}>
      <FormikStepper
        enableReinitialize
        initialValues={{
          name: '',
          address: '',
          postalCode: '',
          city: '',
          province: '',
          paymentMethod: null
        }}>
        <FormikStep
          //label={intl.formatMessage({ id: 'CHECKOUT.STEP.1' })}
          label='Envío'
          validationSchema={
            Yup.object({
              name: Yup
                .string(),
              address: Yup
                .string()
                .required(intl.formatMessage({ id: 'YUP.ERROR.REQUIRED_FIELD' })),
              postalCode: Yup
                .string()
                .required(intl.formatMessage({ id: 'YUP.ERROR.REQUIRED_FIELD' })),
              city: Yup
                .string()
                .required(intl.formatMessage({ id: 'YUP.ERROR.REQUIRED_FIELD' })),
              province: Yup
                .string()
                .required(intl.formatMessage({ id: 'YUP.ERROR.REQUIRED_FIELD' }))
            })
          }
          onSubmit={() => {}}
        >
          <CheckoutDelivery />
        </FormikStep>

        <FormikStep
          //label={intl.formatMessage({ id: 'CHECKOUT.STEP.2' })}
          label='Pago'
          validationSchema={
            Yup.object({
              paymentMethod: Yup
                .string()
                .oneOf(
                  Object.values(PaymentMethods),
                  intl.formatMessage({ id: 'YUP.ERROR.REQUIRED_FIELD' })
                )
            })
          }
          onSubmit={() => {}}
        >
          <CheckoutPayment />
        </FormikStep>
        
        <FormikStep
          //label={intl.formatMessage({ id: 'CHECKOUT.STEP.3' })}
          label='Resumen'
          validationSchema={
            Yup.object({
              name: Yup.string()
            })
          }
          onSubmit={() => {}}
        >
          <CheckoutReview />
        </FormikStep>
      </FormikStepper>
    </Container>
  )
}

export default Checkout;
