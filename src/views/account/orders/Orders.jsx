import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import useSettings from 'hooks/useSettings';
import moment from 'moment';
import {
  Container,
  Typography,
  Grid,
  Skeleton,
  InputLabel,
  Select,
  MenuItem
} from '@mui/material';
import {
  Filters,
  FiltersText,
  FormControl,
  Card,
  Top,
  TopDate,
  TopTotal,
  TopId,
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
import { apiOrders } from './apiOrders';
import { getProductUri } from 'utils/Product.js';

const filters = [
  {
    year: 2021,
    months: [
      1, 2, 5, 11
    ]
  },
  {
    year: 2020,
    months: [
      3
    ]
  },
  {
    year: 2019,
    months: [
      10, 11
    ]
  }
]

const Orders = () => {
  const settings = useSettings();

  const [loading, setLoading] = useState(true);
  const [orders, setOrders] = useState();

  const [yearsFilter, setYearsFilter] = useState('');
  const [monthsFilter, setMonthsFilter] = useState('');

  const handleFilter = (year, month) => {
    setYearsFilter(year);
    setMonthsFilter(month);

    setOrders(apiOrders.filter((order) => {
      const orderDate = moment(order.createdAt);
      
      return year === -1
        ? true
        : month === -1
          ? orderDate.year() === year
          : orderDate.year() === yearsFilter && orderDate.month() === month;
    }));
  }

  useEffect(() => {
    setTimeout(() => {
      setOrders(apiOrders);
      setLoading(false);
    }, 1500)
  }, [])

  return (
    <Container maxWidth={settings.maxWidth}>
      <h3>Mis pedidos</h3>
      <Filters>
        <FiltersText>
          {`(${orders ? orders.length : 0}) pedidos en`}
        </FiltersText>
        <FormControl>
          <InputLabel>Año</InputLabel>
          <Select
            id='year'
            value={yearsFilter}
            label='Año'
            onChange={(e) => handleFilter(e.target.value, -1)}
            defaultValue={-1}
            style={{ minWidth: '120px' }}
          >
            <MenuItem value={-1}>Todos</MenuItem>
            {filters.map((year) => {
              return <MenuItem key={year.year} value={year.year}>{year.year}</MenuItem>
            })}
          </Select>
        </FormControl>
        <FormControl>
          <InputLabel>Mes</InputLabel>
          <Select
            id='month'
            value={monthsFilter}
            label='Mes'
            onChange={(e) => handleFilter(yearsFilter, e.target.value)}
            disabled={!yearsFilter || yearsFilter === 0}
            defaultValue={-1}
            style={{ minWidth: '220px' }}
          >
            <MenuItem value={-1}>Todos</MenuItem>
            {yearsFilter && filters
              .find((year) =>
                year.year === yearsFilter)?.months
              .map((month) =>
                <MenuItem key={month} value={month - 1}>{month}</MenuItem>)
            }
          </Select>
        </FormControl>
      </Filters>
      <div>
        {loading
          ? <>
              {(() => {
                const options = [];

                for (let i = 0; i < 3; i++) {
                  options.push(
                    <Card key={i}>
                      <Top>
                        <TopDate>
                          <Skeleton animation="wave" width={200} height={20} />
                        </TopDate>
                        <TopTotal>
                          <Skeleton animation="wave" width={160} height={20} />
                        </TopTotal>
                        <TopId>
                          <Skeleton animation="wave" width={180} height={20} />
                        </TopId>
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
                  );
                }

                return options;
              })()}
            </>
          : orders
            ? orders
              .sort((a, b) => (a.createdAt < b.createdAt ? 1 : -1))
              .map((order) => (
                <Card key={order.number}>
                  <Link to={`${order.number}`}>
                    <Top>
                      <TopDate>
                        {`REALIZADO: ${moment(order.createdAt).format('LL')}`}
                      </TopDate>
                      <TopTotal>
                        {`TOTAL ${order.products
                          .map((product) =>
                            product.discount > 0
                              ? (product.price - (product.price * product.discount) / 100) * product.amount
                              : product.price * product.amount
                          )
                          .reduce((a, b) => a + b)
                          .toFixed(2)
                        } €`}
                      </TopTotal>
                      <TopId>
                        {`PEDIDO N.º ${order.number.toUpperCase()}`}
                      </TopId>
                    </Top>
                  </Link>
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
              ))
            : <div style={{ paddingTop: '3rem', textAlign: 'center' }}>
                <Typography>
                  No has comprado nada aún
                </Typography>
              </div>
        }
      </div>
    </Container>
  )
}

export default Orders;
