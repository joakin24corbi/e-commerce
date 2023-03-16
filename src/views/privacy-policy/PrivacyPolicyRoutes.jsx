import { lazy } from 'react';
import Layout from 'components/Layout';

const PrivacyPolicy = lazy(() => import('./PrivacyPolicy'));

const privacyPolicyRoutes = [
  {
    path: '/privacy-policy',
    element: (
      <Layout>
        <PrivacyPolicy />
      </Layout>
    )
  }
];

export default privacyPolicyRoutes;
