import { lazy } from 'react';
import Layout from 'components/Layout';
import { roles } from 'auth/roles';

const Checkout = lazy(() => import('./Checkout.jsx'));

const checkoutRoutes = [
  {
    path: '/checkout',
    element: (
      <Layout>
        <Checkout />
      </Layout>
    ),
    auth: roles.user
  }
];

export default checkoutRoutes;
