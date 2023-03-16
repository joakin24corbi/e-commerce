import { lazy } from 'react';
import { Navigate } from 'react-router-dom';
import Layout from 'components/Layout';
import { roles } from 'auth/roles';

const Profile = lazy(() => import('./profile/Profile'));
const Orders = lazy(() => import('./orders/Orders'));
const Order = lazy(() => import('./orders/Order'));

const sessionRoutes = [
  {
    path: '/account',
    element: <Navigate to='/account/profile' />
  },
  {
    path: '/account/profile',
    element: (
      <Layout>
        <Profile />
      </Layout>
    ),
    auth: roles.user
  },
  {
    path: '/account/orders',
    element: (
      <Layout>
        <Orders />
      </Layout>
    ),
    auth: roles.user
  },
  {
    path: '/account/orders/:orderNumber',
    element: (
      <Layout>
        <Order />
      </Layout>
    ),
    auth: roles.user
  }
];

export default sessionRoutes;
