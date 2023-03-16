import { lazy } from 'react';
import Layout from 'components/Layout';

const Search = lazy(() => import('./Search.jsx'));

const searchRoutes = [
  {
    path: '/search/:query',
    element: (
      <Layout>
        <Search />
      </Layout>
    )
  }
];

export default searchRoutes;
