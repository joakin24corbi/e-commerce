import { useRoutes } from 'react-router-dom';
import { Suspense } from 'react';
import routes from './router';
import SplashScreen from 'views/splash-screen/SplashScreen';

const App = () => {
  const content = useRoutes(routes);

  return (
    <Suspense fallback={<SplashScreen />}>
      {content}
    </Suspense>
  )
}

export default App;
