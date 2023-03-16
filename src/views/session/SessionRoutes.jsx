import { lazy } from 'react';

const Login = lazy(() => import('./Login'));
const Register = lazy(() => import('./Register'));
const ForgotPassword = lazy(() => import('./ForgotPassword'));
const ResetPassword = lazy(() => import('./ResetPassword'));

const sessionRoutes = [
  { path: 'login', element: <Login /> },
  { path: 'signup', element: <Register /> },
  { path: 'forgot-password', element: <ForgotPassword /> },
  { path: 'reset-password/:token', element: <ResetPassword /> }
];

export default sessionRoutes;
