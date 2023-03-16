import { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import { Link } from 'react-router-dom';
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
} from 'views/home/_Home';
import useSettings from 'hooks/useSettings';
/* API */
import { apiProducts } from 'views/home/apiProducts.js';

const Search = () => {
  const { settings } = useSettings();
  const { query } = useParams();

  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState();
  const [page, setPage] = useState(0);
  const [size, setSize] = useState(20);

  useEffect(() => {
    setLoading(true);

    setTimeout(() => {
      const filter = apiProducts.filter((product) => product.name.toLocaleLowerCase().includes(query.toLocaleLowerCase()));
      setProducts(filter && filter.length > 0 ? filter : null);
      setLoading(false);
    }, 1500)
  }, [query])

  return (
    <Container maxWidth={settings.maxWidth}>
      <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
        <h3 style={{ marginRight: '16px' }}>{`Busqueda:`}</h3>
        {`"${query}"`}
      </div>
      {loading
        ? <ContentDiv>
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
        : products
          ? <>
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
                    Cargar más
                  </LoadMoreProductsButton>
                </LoadMoreProductsDiv>
              )}
            </>
          : <div style={{ paddingTop: '3rem', textAlign: 'center' }}>
              <Typography>
                No se han encontrado resultados
              </Typography>
            </div>
      }
    </Container>
  )
}

export default Search;
