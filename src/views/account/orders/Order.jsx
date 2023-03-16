import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import useSettings from 'hooks/useSettings';
import moment from 'moment';
import {
  Container,
  Grid,
  Skeleton,
  Typography,
} from '@mui/material';
import {
  Card,
  Top,
  TopDate,
  Bottom,
  CartContent,
  ProductImg,
  CardContentRight,
  FlexDiv,
  H4,
  PriceGrid,
  ProductPriceOld,
  ProductPrice
} from './_Orders';
import {
  Subtitle
} from './_Order';
import { apiOrders } from './apiOrders';
import { getProductUri } from 'utils/Product.js';
import NotFound from 'views/NotFound';

const Order = () => {
  const settings = useSettings();
  const { orderNumber } = useParams();

  const [loading, setLoading] = useState(true);
  const [order, setOrder] = useState();

  useEffect(() => {
    setTimeout(() => {
      setOrder(apiOrders.find((order) => order.number === orderNumber));
      setLoading(false);
    }, 1500)
  }, [orderNumber])

  return (
    <Container maxWidth={settings.maxWidth}>
      {loading
        ? <div>
            <Skeleton animation="wave" width={200} height={31} />
            <Subtitle style={{ marginTop: '24px' }}>
              <Skeleton animation="wave" width={230} height={24} style={{ marginRight: '34px' }} />
              <Skeleton animation="wave" width={190} height={24} />
            </Subtitle>
            <Card>
              <Top>
                <TopDate>
                  <Skeleton animation="wave" width={200} height={20} style={{ margin: '8px 0' }} />
                  <Skeleton animation="wave" width={200} height={20} />
                  <Skeleton animation="wave" width={200} height={20} />
                  <Skeleton animation="wave" width={180} height={20} />
                </TopDate>
                <TopDate>
                  <Skeleton animation="wave" width={160} height={20} style={{ margin: '8px 0' }} />
                  <Skeleton animation="wave" width={60} height={20} />
                </TopDate>
                <TopDate>
                  <Skeleton animation="wave" width={160} height={20} style={{ margin: '8px 0' }} />
                  <Skeleton animation="wave" width={260} height={20} />
                  <Skeleton animation="wave" width={260} height={20} />
                  <Skeleton animation="wave" width={260} height={20} style={{ margin: '8px 0' }} />
                </TopDate>
              </Top>
              <Bottom container spacing={2}>
                <Grid item xs={12}>
                  <CartContent>
                    <Skeleton animation="wave" variant="rectangular" width={105} height={140} />
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
                        <Skeleton animation="wave" width={200} height={40} />
                        <Skeleton animation="wave" width={160} height={40} />
                        <Skeleton animation="wave" width={80} height={40} />
                      </div>
                    </div>
                  </CartContent>
                </Grid>
              </Bottom>
            </Card>
          </div>
        : order
          ? <div>
              <h2>Detalles del pedido</h2>
              <Subtitle>
                <Typography sx={{ margin: '8px 0 0' }}>
                  {`Comprado el ${moment(order.createdAt).format('LL')}`}
                </Typography>
                <Typography variant='caption' color='lightgray' sx={{ margin: '8px 16px 0', display: { xs: 'none', sm: 'inherit' } }}>
                  |
                </Typography>
                <Typography sx={{ margin: '8px 0 0' }}>
                  {`Pedido nº ${order.number.toUpperCase()}`}
                </Typography>
              </Subtitle>
              <Card>
                <Top>
                  <TopDate>
                    <h4 style={{ margin: '6px 0' }}>Dirección de envío</h4>
                    <Typography>
                      {order.name}
                    </Typography>
                    <Typography>
                      {order.address}
                    </Typography>
                    <Typography>
                      {`${order.postalCode} ${order.city}, ${order.province}`}
                    </Typography>
                  </TopDate>
                  <TopDate>
                    <h4 style={{ margin: '6px 0' }}>Método de pago</h4>
                    <Typography>
                      {order.paymentMethod}
                    </Typography>
                  </TopDate>
                  <TopDate>
                    <h4 style={{ margin: '6px 0' }}>Resumen del pedido</h4>
                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                      <Typography>
                        {`Subtotal de producto(s):`}
                      </Typography>
                      <Typography>
                        {`${order.products
                          .map((product) =>
                            product.discount > 0
                              ? (product.price - (product.price * product.discount) / 100) * product.amount
                              : product.price * product.amount
                          )
                          .reduce((a, b) => a + b)
                          .toFixed(2)
                        } €`}
                      </Typography>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                      <Typography>
                        {`Envío:`}
                      </Typography>
                      <Typography>
                        {`${order.shippingPrice.toFixed(2)} €`}
                      </Typography>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', padding: '6px 0' }}>
                      <h4 style={{ margin: '0 0' }}>
                        {`Importe total:`}
                      </h4>
                      <Typography>
                        {`${(order.products
                          .map((product) =>
                            product.discount > 0
                              ? (product.price - (product.price * product.discount) / 100) * product.amount
                              : product.price * product.amount
                          )
                          .reduce((a, b) => a + b) + order.shippingPrice)
                          .toFixed(2)
                        } €`}
                      </Typography>
                    </div>
                  </TopDate>
                </Top>
                <Bottom container spacing={2}>
                  {order.products.map((product) => (
                    <Grid item xs={12} key={product.id}>
                      <CartContent>
                        <Link to={getProductUri(product.slug)}>
                          <ProductImg src={product.image} alt={product.name} />
                        </Link>
                        <CardContentRight>
                          <FlexDiv>
                            <Link to={getProductUri(product.slug)}>
                              <H4>{product.name}</H4>
                            </Link>
                            <PriceGrid>
                              <ProductPriceOld>
                                {`${(product.price * product.amount).toFixed(2)} €`}
                              </ProductPriceOld>
                              <ProductPrice>
                                {`${((product.price - ((product.price * product.discount) / 100)) * product.amount).toFixed(2)} €`}
                              </ProductPrice>
                            </PriceGrid>
                            <div>
                              {`Cantidad: ${product.amount}`}
                            </div>
                          </FlexDiv>
                        </CardContentRight>
                      </CartContent>
                    </Grid>
                  ))}
                </Bottom>
              </Card>
            </div>
          : <NotFound />
      }
    </Container>
  )
}

export default Order;
