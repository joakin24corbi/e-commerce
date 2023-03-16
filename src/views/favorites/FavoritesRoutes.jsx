import { lazy } from 'react';
import Layout from 'components/Layout';

const Favorites = lazy(() => import('./Favorites'));

const favoritesRoutes = [
  {
    path: '/favorites',
    element: (
      <Layout>
        <Favorites />
      </Layout>
    )
  }
];

export default favoritesRoutes;
