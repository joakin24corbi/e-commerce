import { lazy } from 'react';
import Layout from 'components/Layout';

const Cart = lazy(() => import('./Cart'));

const cartRoutes = [
  {
    path: '/cart',
    element: (
      <Layout>
        <Cart />
      </Layout>
    )
  }
];

export default cartRoutes;
