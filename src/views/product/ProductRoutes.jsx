import { lazy } from 'react';
import Layout from 'components/Layout';

const Product = lazy(() => import('./Product.jsx'));

const productRoutes = [
  {
    path: '/products/:slug',
    element: (
      <Layout>
        <Product />
      </Layout>
    )
  }
];

export default productRoutes;
