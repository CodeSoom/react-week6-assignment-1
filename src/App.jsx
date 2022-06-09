import HomePage from './HomePage';
import AboutPage from './AboutPage';
import RestaurantsPage from './RestaurantsPage';
import NotFoundPage from './pages/NotFoundPage';

export default function App() {
  const { location: { pathname } } = window;

  const Component = ({
    '/': HomePage,
    '/about': AboutPage,
    '/restaurants': RestaurantsPage,
  }[pathname]) || NotFoundPage;

  return (
    <Component />
  );
}
