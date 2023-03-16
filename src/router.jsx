import Layout from 'components/Layout';
import NotFound from 'views/NotFound';
import sessionRoutes from 'views/session/SessionRoutes';
import homeRoutes from 'views/home/HomeRoutes';
import productRoutes from 'views/product/ProductRoutes';
import cartRoutes from 'views/cart/CartRoutes';
import favoritesRoutes from 'views/favorites/FavoritesRoutes';
import checkoutRoutes from 'views/checkout/CheckoutRoutes';
import accountRoutes from 'views/account/AccountRoutes';
import privacyPolicyRoutes from 'views/privacy-policy/PrivacyPolicyRoutes';
import searchRoutes from 'views/search/SearchRoutes';

const router = [
  ...sessionRoutes,
  ...homeRoutes,
  ...productRoutes,
  ...cartRoutes,
  ...favoritesRoutes,
  ...checkoutRoutes,
  ...accountRoutes,
  ...privacyPolicyRoutes,
  ...searchRoutes,
  {
    path: '*',
    element: (
      <Layout>
        <NotFound />
      </Layout>
    )
  }
];

export default router;
