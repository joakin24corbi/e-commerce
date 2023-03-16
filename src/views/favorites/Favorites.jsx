import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { useIntl, FormattedMessage } from 'react-intl';
import useSettings from 'hooks/useSettings';
import {
  deleteProductFromFavorites,
  clearFavorites
} from 'store/slices/favorites/actions';
import {
  Card,
  Container,
  Button,
  Grid,
  Tooltip
} from '@mui/material';
import {
  CartWrapper,
  CartContent,
  ProductImg,
  PriceGrid,
  PriceGridItem,
  ProductPriceOld,
  ProductPrice,
  ClearIconButton,
  ClearIcon,
  CartOptions
} from './_Favorites.jsx';
import DeleteIcon from '@mui/icons-material/Delete';
import { getProductUri } from 'utils/Product.js';

const Favorites = () => {
  const intl = useIntl();
  const dispatch = useDispatch();
  const { settings } = useSettings();
  const { list: favorites } = useSelector((store) => store.favorites);

  return (
    <CartWrapper>
      <Container maxWidth={settings.maxWidth}>
        <h3><FormattedMessage id='FAVORITES.TITLE' />{` (${favorites && favorites.length})`}</h3>
        <Grid container spacing={3}>
          {favorites && favorites.length > 0
            ? <Grid item xs={12}>
                <Grid container spacing={4}>
                  <Grid item xs={12}>
                    {favorites.map((product) => (
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
                              </PriceGrid>
                            </div>
                          </div>
                          <Tooltip title={intl.formatMessage({ id: 'FAVORITES.BUTTON.REMOVE_ITEM' })}>
                            <ClearIconButton onClick={() => dispatch(deleteProductFromFavorites(product.id))}>
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
                      onClick={() => dispatch(clearFavorites())}
                    >
                      <FormattedMessage id='FAVORITES.BUTTON.EMPTY' />
                    </Button>
                    <Button
                      variant='outlined'
                      component={Link}
                      to='/'
                    >
                      <FormattedMessage id='FAVORITES.BUTTON.CONTINUE' />
                    </Button>
                  </CartOptions>
                </Grid>
              </Grid>
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
                      <FormattedMessage id='FAVORITES.EMPTY.TITLE' />
                    </span>
                    <span
                      style={{
                        marginBottom: '2rem',
                        fontSize: '1.0625rem',
                        lineHeight: '1.5rem',
                        color: 'rgb(115, 115, 115)'
                      }}
                    >
                      <FormattedMessage id='FAVORITES.EMPTY.SUBTITLE' />
                    </span>
                    <Button
                      component={Link}
                      to='/'
                      variant='contained'
                      color='primary'
                    >
                      <FormattedMessage id='FAVORITES.EMPTY.BUTTON' />
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

export default Favorites;
