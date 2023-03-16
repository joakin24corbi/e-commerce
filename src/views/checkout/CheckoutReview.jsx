import { useState, useEffect, useRef } from 'react';
import { useIntl, FormattedMessage } from 'react-intl';
import { useSelector } from 'react-redux';
import { useFormikContext } from 'formik';
import {
  Card,
  Button,
  Grid,
  Typography,
} from '@mui/material';
import {
  FormContent,
  FormActions,
  CartContent,
  ProductImg,
  PriceGrid,
  ProductPriceOld,
  ProductPrice,
  AmountGrid
} from './_Checkout';
import { StickyContainer, Sticky } from 'react-sticky';

const RightColumn = () => {
  const { values } = useFormikContext();
  const { list: cart } = useSelector((store) => store.cart);

  const [totalCost, setTotalCost] = useState(0);

  useEffect(() => {
    let total = 0;

    cart && cart.forEach((product) => {
      const productPrice = product.discount > 0
        ? (product.price - ((product.price * product.discount) / 100)) * product.amount
        : product.price * product.amount;

      total += productPrice;
    });

    setTotalCost(total);
  }, [cart])

  return (
    <>
      <Card>
        <h3>Datos de envío</h3>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column'
          }}
        >
          <div
            style={{
              display: 'flex',
              flexDirection: 'row',
              marginBottom: '16px'
            }}
          >
            <Typography sx={{ minWidth: '150px' }}>
              {`Nombre:`}
            </Typography>
            <Typography sx={{ minHeight: '21px' }}>
              {`${values.name}`}
            </Typography>
          </div>
          <div
            style={{
              display: 'flex',
              flexDirection: 'row',
              marginBottom: '16px'
            }}
          >
            <Typography sx={{ minWidth: '150px' }}>
              {`Dirección:`}
            </Typography>
            <Typography sx={{ minHeight: '21px' }}>
              {`${values.address}`}
            </Typography>
          </div>
          <div
            style={{
              display: 'flex',
              flexDirection: 'row',
              marginBottom: '16px'
            }}
          >
            <Typography sx={{ minWidth: '150px' }}>
              {`Ciudad:`}
            </Typography>
            <Typography sx={{ minHeight: '21px' }}>
              {`${values.city}`}
            </Typography>
          </div>
          <div
            style={{
              display: 'flex',
              flexDirection: 'row',
              marginBottom: '16px'
            }}
          >
            <Typography sx={{ minWidth: '150px' }}>
              {`Código postal:`}
            </Typography>
            <Typography sx={{ minHeight: '21px' }}>
              {`${values.postalCode}`}
            </Typography>
          </div>
        </div>
      </Card>
      <Card>
        <h3>Resumen del total</h3>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between'
          }}
        >
          <Typography>
            <FormattedMessage id='CART.RESUME.TOTAL' />
          </Typography>
          <Typography variant='bold'>
            {`${totalCost.toFixed(2)} €`}
          </Typography>
        </div>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between'
          }}
        >
          <Typography>
            Coste de envío:
          </Typography>
          <Typography variant='bold'>
            {`${(5.50).toFixed(2)} €`}
          </Typography>
        </div>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            marginBottom: '32px'
          }}
        >
          <Typography>
            TOTAL:
          </Typography>
          <Typography variant='bold'>
            {`${(totalCost + 5.50).toFixed(2)} €`}
          </Typography>
        </div>
        <div>
          <Button
            onClick={() => {}}
            variant='contained'
            color='primary'
            fullWidth
            sx={{ height: '53.13px' }}
          >
            Pagar
          </Button>
        </div>
      </Card>
    </>
  )
}

const CheckoutReview = ({ handleBack }) => {
  const intl = useIntl();
  const { list: cart } = useSelector((store) => store.cart);

  const [resumenColumnHeigth, setResumenColumnHeigth] = useState(0);
  const resumeColumnRef = useRef(null);

  useEffect( () => {
    if(resumeColumnRef.current){
      setResumenColumnHeigth(resumeColumnRef.current.offsetHeight);
    }
  }, [resumeColumnRef])

  return (
    <>
      <FormContent>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <Card>
              <h3>Resumen del pedido</h3>
              <Grid container spacing={4}>
                {cart.map((product) => (
                  <Grid item xs={12} key={product.id}>
                    <CartContent>
                      <ProductImg src={product.image} alt={product.name} />
                      <div
                        style={{
                          display: 'flex',
                          flexDirection: 'row',
                          justifyContent: 'space-between',
                          marginLeft: '1rem'
                        }}
                      >
                        <div
                          style={{
                            display: 'flex',
                            flexDirection: 'column',
                            rowGap: '0.2rem',
                            marginBottom: '1.15rem'
                          }}
                        >
                          <h4>{product.name}</h4>
                          <PriceGrid>
                            <ProductPriceOld>
                              {`${(product.price * product.amount).toFixed(2)} €`}
                            </ProductPriceOld>
                            <ProductPrice>
                              {`${((product.price - ((product.price * product.discount) / 100)) * product.amount).toFixed(2)} €`}
                            </ProductPrice>
                          </PriceGrid>
                          <AmountGrid>
                            {`Cantidad: ${product.amount}`}
                          </AmountGrid>
                        </div>
                      </div>
                    </CartContent>
                  </Grid>
                ))}
              </Grid>
            </Card>
          </Grid>
          <Grid item xs={12} md={6} ref={resumeColumnRef} sx={{ display: { xs: 'none', md: 'block' } }}>
            <StickyContainer style={{ height: resumenColumnHeigth }}>
              <Sticky topOffset={-110}>
                {({
                  style,
                  isSticky
                }) => (
                  <div style={{ ...style, marginTop: isSticky ? 90 : 0 }}>
                    <RightColumn />      
                  </div>
                )}
              </Sticky>
            </StickyContainer>
          </Grid>
          <Grid item xs={12} md={6} sx={{ display: { xs: 'block', md: 'none' } }}>
            <RightColumn />
          </Grid>
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
      </FormActions>
    </>
  )
}

export default CheckoutReview;
