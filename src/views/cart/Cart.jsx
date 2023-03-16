import { useState, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, Link } from 'react-router-dom';
import { useIntl, FormattedMessage } from 'react-intl';
import useSettings from 'hooks/useSettings';
import {
  deleteProductFromCart,
  updateCartAmount,
  clearCart
} from 'store/slices/cart/actions';
import {
  Card,
  Container,
  Button,
  Grid,
  Tooltip,
  Typography
} from '@mui/material';
import {
  CartWrapper,
  CartContent,
  ProductImg,
  PriceGrid,
  PriceGridItem,
  ProductPriceOld,
  ProductPrice,
  ChangeQuantityButton,
  AmountDiv,
  ClearIconButton,
  ClearIcon,
  CartOptions,
  StickyDiv
} from './_Cart.jsx';
import DeleteIcon from '@mui/icons-material/Delete';
import { StickyContainer, Sticky } from 'react-sticky';
import { getProductUri } from 'utils/Product.js';

const CartResumeContent = () => {
  const navigate = useNavigate();
  const { user } = useSelector((store) => store.auth);
  const { list: cart } = useSelector((store) => store.cart);

  const [totalCost, setTotalCost] = useState(0);

  const handleCheckoutClick = () => {
    if (user) {
      if (totalCost > 0) {
        navigate('/checkout')
      }
    } else {
      navigate('/login', { state: { redirect: '/checkout' }})
    }
  }

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
    <Card>
      <h3><FormattedMessage id='CART.RESUME' /></h3>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          marginBottom: '32px'
        }}
      >
        <Typography>
          <FormattedMessage id='CART.RESUME.TOTAL' />
        </Typography>
        <Typography variant='bold'>
          {`${totalCost.toFixed(2)} €`}
        </Typography>
      </div>
      <div>
        <Button
          onClick={handleCheckoutClick}
          variant='contained'
          color='primary'
          fullWidth
          sx={{ height: '53.13px' }}
        >
          <FormattedMessage id='CART.BUTTON.BUY' />
        </Button>
      </div>
    </Card>
  )
}

const Cart = () => {
  const intl = useIntl();
  const dispatch = useDispatch();
  const { settings } = useSettings();
  const { list: cart } = useSelector((store) => store.cart);

  const [resumenColumnHeigth, setResumenColumnHeigth] = useState(0);
  const resumeColumnRef = useRef(null);

  useEffect( () => {
    if(resumeColumnRef.current){
      setResumenColumnHeigth(resumeColumnRef.current.offsetHeight);
    }
  }, [resumeColumnRef])

  return (
    <CartWrapper>
      <Container maxWidth={settings.maxWidth}>
        <h3><FormattedMessage id='CART.TITLE' />{` (${cart && cart.length})`}</h3>
        <Grid container spacing={3}>
          {cart && cart.length > 0
            ? <>
                <Grid item xs={12} md={8}>
                  <Grid container spacing={4}>
                    <Grid item xs={12}>
                      {cart.map((product) => (
                        <Card key={product.id}>
                          <CartContent>
                            <Link to={getProductUri(product.slug)}>
                              <ProductImg src={product.image} alt={product.name} />
                            </Link>
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
                                  rowGap: '0.2rem'
                                }}
                              >
                                <Link to={getProductUri(product.slug)}>
                                  <h4>{product.name}</h4>
                                </Link>
                                <PriceGrid>
                                  <PriceGridItem>
                                    <ProductPriceOld>
                                      {`${product.price.toFixed(2)} €`}
                                    </ProductPriceOld>
                                    <ProductPrice>
                                      {`${(product.price - ((product.price * product.discount) / 100)).toFixed(2)} €`}
                                    </ProductPrice>
                                  </PriceGridItem>
                                  <PriceGridItem>
                                    <ChangeQuantityButton
                                      variant='outlined'
                                      disabled={product.amount === 1}
                                      onClick={() => dispatch(updateCartAmount(product.id, -1))}
                                    >
                                      -
                                    </ChangeQuantityButton>
                                    <AmountDiv>
                                      {product.amount}
                                    </AmountDiv>
                                    <ChangeQuantityButton
                                      variant='outlined'
                                      onClick={() => dispatch(updateCartAmount(product.id, 1))}
                                    >
                                      +
                                    </ChangeQuantityButton>
                                  </PriceGridItem>
                                  <PriceGridItem>
                                    <Typography variant='caption'>
                                      {intl.formatMessage({ id: 'CART.TEXT.TOTAL' })}
                                    </Typography>
                                    <ProductPrice>
                                      {`${((product.price - ((product.price * product.discount) / 100)) * product.amount).toFixed(2)} €`}
                                    </ProductPrice>
                                  </PriceGridItem>
                                </PriceGrid>
                              </div>
                            </div>
                            <Tooltip title={intl.formatMessage({ id: 'CART.BUTTON.REMOVE_ITEM' })}>
                              <ClearIconButton onClick={() => dispatch(deleteProductFromCart(product.id))}>
                                <ClearIcon />
                              </ClearIconButton>
                            </Tooltip>
                          </CartContent>
                        </Card>
                      ))}
                    </Grid>
                    <CartOptions item xs={12}>
                      <Button
                        variant='outlined'
                        startIcon={<DeleteIcon />}
                        onClick={() => dispatch(clearCart())}
                      >
                        <FormattedMessage id='CART.BUTTON.EMPTY' />
                      </Button>
                      <Button
                        variant='outlined'
                        component={Link}
                        to='/'
                      >
                        <FormattedMessage id='CART.BUTTON.CONTINUE' />
                      </Button>
                    </CartOptions>
                  </Grid>
                </Grid>
                <Grid item xs={12} md={4} ref={resumeColumnRef} sx={{ display: { xs: 'none', md: 'block' } }}>
                  <StickyContainer style={{ height: resumenColumnHeigth }}>
                    <Sticky topOffset={-138}>
                      {({
                        style,
                        isSticky
                      }) => (
                        <StickyDiv style={{ ...style, marginTop: isSticky ? 114 : 0 }}>
                          <CartResumeContent />
                        </StickyDiv>
                      )}
                    </Sticky>
                  </StickyContainer>
                </Grid>
                <Grid item xs={12} md={4} sx={{ display: { xs: 'block', md: 'none' } }}>
                  <CartResumeContent />
                </Grid>
              </>
            : <Grid item xs={12}>
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'center',
                    verticalAlign: 'middle',
                    paddingTop: '3.5rem',
                    alignItems: 'center'
                  }}
                >
                  <div
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      maxWidth: '23.25rem',
                      textAlign: 'center'
                    }}
                  >
                    <div
                      style={{
                        marginBottom: '1rem',
                        width: '6.5rem',
                        height: '6.5rem',
                        borderRadius: '5.625rem',
                        textAlign: 'center',
                        alignSelf: 'center',
                        backgroundColor: 'rgb(242, 242, 242)'
                      }}
                    >
                      <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' enableBackground='new 0 0 24 24' fill='white' width='64' height='64'
                        style={{
                          width: '4rem',
                          height: '4rem',
                          position: 'relative',
                          top: '50%',
                          transform: 'translateY(-50%)',
                          backgroundColor: 'rgb(242, 242, 242)'
                        }}
                      >
                        <g transform='matrix(0.375 0 0 0.375 0 0)'>
                          <path transform='matrix(1 0 0 1 0 0)' d='M46.136 39.0649L61.125 54.0539L54.054 61.1249L39.064 46.1349' fill='white'></path>
                          <path transform='matrix(1 0 0 1 0 0)' d='M46.136 39.0649L61.125 54.0539L54.054 61.1249L39.064 46.1349' stroke='#333333' strokeWidth='2' strokeMiterlimit='10'></path>
                          <path transform='matrix(1 0 0 1 0 0)' d='M26 50C39.2548 50 50 39.2548 50 26C50 12.7452 39.2548 2 26 2C12.7452 2 2 12.7452 2 26C2 39.2548 12.7452 50 26 50Z' fill='white' stroke='#333333' strokeWidth='2' strokeMiterlimit='10' strokeLinecap='square'></path>
                          <path transform='matrix(1 0 0 1 0 0)' d='M31.6567 20.3431L20.343 31.6568' stroke='#333333' strokeWidth='2' strokeMiterlimit='10' strokeLinecap='square'></path>
                          <path transform='matrix(1 0 0 1 0 0)' d='M31.657 31.6568L20.3433 20.3431' stroke='#333333' strokeWidth='2' strokeMiterlimit='10' strokeLinecap='square'></path>
                        </g>
                      </svg>
                    </div>
                    <span
                      style={{
                        marginBottom: '0.5rem',
                        fontWeight: 'bold',
                        fontSize: '1.0625rem',
                        lineHeight: '1.5rem',
                      }}
                    >
                      <FormattedMessage id='CART.EMPTY.TITLE' />
                    </span>
                    <span
                      style={{
                        marginBottom: '2rem',
                        fontSize: '1.0625rem',
                        lineHeight: '1.5rem',
                        color: 'rgb(115, 115, 115)'
                      }}
                    >
                      <FormattedMessage id='CART.EMPTY.SUBTITLE' />
                    </span>
                    <Button
                      component={Link}
                      to='/'
                      variant='contained'
                      color='primary'
                    >
                      <FormattedMessage id='CART.EMPTY.BUTTON' />
                    </Button>
                  </div>
                </div>
              </Grid>
          }
        </Grid>
      </Container>
    </CartWrapper>
  )
}

export default Cart;
