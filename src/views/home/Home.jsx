import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FormattedMessage } from 'react-intl';
import { Rating, Skeleton, Typography } from '@mui/material';
import { Container } from '@mui/system';
import {
  TitleDiv,
  ContentDiv,
  ProductWrapper,
  ProductImage,
  Badges,
  DiscountBadge,
  IsNewBadge,
  ProductContent,
  ProductPrice,
  ProductPriceOld,
  LoadMoreProductsDiv,
  LoadMoreProductsButton
} from './_Home.jsx';
import useSettings from 'hooks/useSettings';
/* API */
import { apiProducts } from './apiProducts.js';

const Home = () => {
  const { settings } = useSettings();

  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState(apiProducts);
  const [page, setPage] = useState(0);
  const [size, setSize] = useState(20);

  useEffect(() => {
    setTimeout(() => {
      setProducts(apiProducts);
      setLoading(false);
    }, 1500)
  }, [])

  return (
    <Container maxWidth={settings.maxWidth}>
      {loading
        ? <>
            <TitleDiv style={{
              display: 'flex',
              justifyContent: 'center'
            }}>
              <Skeleton animation="wave" height={45} width={360} />
            </TitleDiv>
            <ContentDiv>
              {(() => {
                const options = [];

                for (let i = 0; i < 12; i++) {
                  options.push(
                    <ProductWrapper key={i}>
                      <ProductImage>
                        <Skeleton animation="wave" variant="rectangular" height={354} width={265.5} />
                      </ProductImage>
                      <ProductContent style={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center'
                      }}>
                        <Skeleton animation="wave" height={24} width={180} />
                        <Skeleton animation="wave" height={24} width={120} />
                        <Skeleton animation="wave" height={24} width={52.5} />
                      </ProductContent>
                    </ProductWrapper>
                  );
                }

                return options;
              })()}
            </ContentDiv>
          </>
        : products
          ? <>
              <TitleDiv>
                <h2><FormattedMessage id='HOME.TITLE' /></h2>
                <p />
              </TitleDiv>
              <ContentDiv>
                {products.map((product) => 
                  <ProductWrapper key={product.id}>
                    <ProductImage>
                      <Link
                        to={`products/${product.slug}`}
                      >
                        <img src={product.image} alt={product.name} width={'100%'} />
                      </Link>
                      {(product.discount > 0 || product.isNew) && (
                        <Badges>
                          {product.discount > 0 && (
                            <DiscountBadge>
                              -{product.discount}%
                            </DiscountBadge>
                          )}
                          {product.isNew && (
                            <IsNewBadge>
                              New
                            </IsNewBadge>
                          )}
                        </Badges>
                      )}
                    </ProductImage>
                    <ProductContent>
                      <Link to={`products/${product.slug}`}>
                        <h3>{product.name}</h3>
                      </Link>
                      <Rating
                        id='rating'
                        name='simple-controlled'
                        readOnly
                        value={product.rating}
                      />
                      <div>
                        <ProductPrice>
                          {product.discount > 0
                            ? `${(product.price - ((product.price * product.discount) / 100)).toFixed(2)} €`
                            : `${product.price.toFixed(2)} €`
                          }
                        </ProductPrice>
                        {product.discount > 0 && (
                          <ProductPriceOld>
                            {`${product.price.toFixed(2)} €`}
                          </ProductPriceOld>
                        )}
                      </div>
                    </ProductContent>
                  </ProductWrapper>
                )}
              </ContentDiv>
              {products.length * (page + 1) % size === 0 && (
                <LoadMoreProductsDiv>
                  <LoadMoreProductsButton size='large'>
                    <FormattedMessage id='HOME.BUTTON.LOAD_MORE' />
                  </LoadMoreProductsButton>
                </LoadMoreProductsDiv>
              )}
            </>
          : <div style={{ paddingTop: '3rem', textAlign: 'center' }}>
              <Typography>
                <FormattedMessage id='HOME.LOAD.FAIL' />
              </Typography>
            </div>
      }
    </Container>
  );
}

export default Home;
