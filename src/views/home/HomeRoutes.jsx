import { lazy } from 'react';
import Layout from 'components/Layout';

const Home = lazy(() => import('./Home'));

const homeRoutes = [
  {
    path: '/',
    element: (
      <Layout>
        <Home />
      </Layout>
    )
  }
];

export default homeRoutes;
