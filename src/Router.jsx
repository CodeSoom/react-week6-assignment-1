import { useRoutes } from 'react-router-dom';

import Restaurants from './pages/Restaurants';
import Home from './pages/Home';
import About from './pages/About';
import NotFound from './pages/NotFound';

export default function Router() {
  const element = useRoutes([
    {
      path: '/',
      element: <Home />,
    },
    {
      path: '/about',
      element: <About />,
    },
    {
      path: '/restaurants',
      element: <Restaurants />,
    },
    {
      path: '*',
      element: <NotFound />,
    },
  ]);

  return element;
}
