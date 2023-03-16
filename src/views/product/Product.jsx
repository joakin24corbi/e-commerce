import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useIntl } from 'react-intl';
import { Rating, Skeleton } from '@mui/material';
import { Tabs } from '@mui/material';
import { Tab } from '@mui/material';
import { Typography } from '@mui/material';
import { Container } from '@mui/material';
import { IconButton } from '@mui/material';
import Lightbox from 'react-awesome-lightbox';
import 'react-awesome-lightbox/build/style.css';
import {
  TopSection,
  ProductImage,
  Badges,
  DiscountBadge,
  IsNewBadge,
  ExpandButtonDiv,
  ProductDetails,
  ProductInfo,
  PriceDetails,
  ProductPrice,
  ProductPriceOld,
  Description,
  ShareButtons,
  ShareButtonsWrapper,
  ShareButtonsItem,
  ShareLink,
  AddToCart,
  ChangeQuantityButton,
  AddToCartButton,
  TabsWrapper
} from './_Product.jsx';
import useSettings from 'hooks/useSettings';
import { addProductToCart } from 'store/slices/cart/actions';
import { addProductToFavorites, deleteProductFromFavorites } from 'store/slices/favorites/actions';
/* ICONS */
import OpenInFullIcon from '@mui/icons-material/OpenInFull';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
/* API */
import { apiProducts } from '../home/apiProducts';

const TabPanel = (props) => {
  const { children, value, index, ...other } = props;
  const { settings } = useSettings();

  return (
    <div
      role='tabpanel'
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Container maxWidth={settings.maxWidth} sx={{ p: 3 }}>
          {children}
        </Container>
      )}
    </div>
  );
}

const Product = () => {
  const { settings } = useSettings();
  const { slug } = useParams();
  const dispatch = useDispatch();
  const intl = useIntl();
  const { list: favorites } = useSelector((state) => state.favorites);

  const [tab, setTab] = useState(0);
  const [fullScreen, setFullScreen] = useState(false);
  const [loading, setLoading] = useState(true);
  const [product, setProduct] = useState();
  const [amount, setAmount] = useState(1);

  const handleChangeTab = (event, newTab) => {
    setTab(newTab);
  };

  const handleChangeQuantity = (quantity) => {
    const newAmount = amount + quantity;
    newAmount > 0 && newAmount <= 10 && setAmount(newAmount);
  }

  const handleZoomIn = () => (
    setFullScreen(true)
  )

  const handleZoomOut = () => (
    setFullScreen(false)
  )

  useEffect(() => {
    setTimeout(() => {
      try {
        const product = apiProducts.find((product) => product.slug === slug);
        product && setProduct(product);
      } finally {
        setLoading(false)
      }
    }, 1500)
  }, [slug])

  return loading
    ? <>
        <Container maxWidth={settings.maxWidth}>
          <TopSection>
            <ProductImage>
              <Skeleton animation='wave' variant='rectangular' width={566} height={754.66} />
            </ProductImage>
            <ProductDetails>
              <ProductInfo>
                <Skeleton animation='wave' width={300} height={24} />
                <PriceDetails>
                  <Skeleton animation='wave' width={139} height={36} />
                </PriceDetails>
                <Skeleton animation='wave' width={120} height={24} />
                <Description>
                  <Skeleton animation='wave' width={450} height={24} />
                  <Skeleton animation='wave' width={420} height={24} />
                  <Skeleton animation='wave' width={435} height={24} />
                  <Skeleton animation='wave' width={335} height={24} />
                </Description>
                <ShareButtons>
                  <Skeleton animation='wave' width={(24 + 40) * 4} height={24} />
                </ShareButtons>
              </ProductInfo>
              <AddToCart>
                <Skeleton animation='wave' width={300} height={60} />
              </AddToCart>
            </ProductDetails>
          </TopSection>
        </Container>
        <div>
          <TabsWrapper>
            <Skeleton animation='wave' width={490} height={60} />
          </TabsWrapper>
          <Container maxWidth={settings.maxWidth} sx={{ p: 3 }}>
            <Skeleton animation='wave' width={465} height={24} />
            <Skeleton animation='wave' width={400} height={24} />
            <Skeleton animation='wave' width={440} height={24} />
            <Skeleton animation='wave' width={376} height={24} />
          </Container>
        </div>
      </>
    : <>
        <Container maxWidth={settings.maxWidth}>
          <TopSection>
            <ProductImage>
              <img src={product.image} alt={product.name} width={'100%'} />
              {fullScreen && <Lightbox image={product.image} title={product.name} onClose={handleZoomOut} />}
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
              <ExpandButtonDiv>
                <IconButton
                  onClick={handleZoomIn}
                >
                  <OpenInFullIcon />
                </IconButton>
              </ExpandButtonDiv>
            </ProductImage>
            <ProductDetails>
              <ProductInfo>
                <h2>{product.name}</h2>
                <PriceDetails>
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
                </PriceDetails>
                <Rating
                  id='rating'
                  name='simple-controlled'
                  readOnly
                  value={product.rating}
                />
                <Description>
                  {product.description}
                </Description>
                <ShareButtons>
                  <ShareButtonsWrapper>
                    <ShareButtonsItem>
                      <ShareLink href='//instagram.com'>
                        <InstagramIcon />
                      </ShareLink>
                    </ShareButtonsItem>
                    <ShareButtonsItem>
                      <ShareLink variant='h2' href='//facebook.com'>
                        <FacebookIcon />
                      </ShareLink>
                    </ShareButtonsItem>
                    <ShareButtonsItem>
                      <ShareLink href='//twitter.com'>
                        <TwitterIcon />
                      </ShareLink>
                    </ShareButtonsItem>
                    <ShareButtonsItem>
                      <ShareLink href='//linkedin.com'>
                        <LinkedInIcon />
                      </ShareLink>
                    </ShareButtonsItem>
                  </ShareButtonsWrapper>
                </ShareButtons>
              </ProductInfo>
              <AddToCart>
                <ChangeQuantityButton
                  disabled={amount === 1}
                  onClick={() => handleChangeQuantity(-1)}
                >
                  -
                </ChangeQuantityButton>
                {amount}
                <ChangeQuantityButton
                  disabled={amount === 10}
                  onClick={() => handleChangeQuantity(1)}
                >
                  +
                </ChangeQuantityButton>
                <AddToCartButton
                  size='large'
                  color='inherit'
                  onClick={() => {
                    dispatch(addProductToCart(product, amount))
                  }}
                >
                  <AddShoppingCartIcon />
                </AddToCartButton>
                <IconButton
                  size='large'
                  color='inherit'
                  onClick={favorites.findIndex((item) => item.id === product.id) >= 0
                    ? () => {
                        dispatch(deleteProductFromFavorites(product.id))
                      }
                    : () => {
                        dispatch(addProductToFavorites(product))
                      }
                  }
                >
                  {favorites.findIndex((item) => item.id === product.id) >= 0
                    ? <FavoriteIcon />
                    : <FavoriteBorderIcon />
                  }
                </IconButton>
              </AddToCart>
            </ProductDetails>
          </TopSection>
        </Container>
        <div>
          <TabsWrapper>
            <Tabs
              variant='scrollable'
              value={tab}
              onChange={handleChangeTab}
            >
              <Tab label={intl.formatMessage({ id: 'PRODUCT.TABS.ADDITIONAL_INFO' })} />
              <Tab label={intl.formatMessage({ id: 'PRODUCT.TABS.DESCRIPTION' })} />
              <Tab label={intl.formatMessage({ id: 'PRODUCT.TABS.REVIEWS' })} />
            </Tabs>
          </TabsWrapper>
          <TabPanel value={tab} index={0}>
            <div dangerouslySetInnerHTML={{ __html: product.additionalInfo }} />
          </TabPanel>
          <TabPanel value={tab} index={1}>
            <Typography>
              {product.longDescription}
            </Typography>
          </TabPanel>
          <TabPanel value={tab} index={2}>
            <Typography>
              Reviews
            </Typography>
          </TabPanel>
        </div>
      </>
}

export default Product;
