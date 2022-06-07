import HomePage from './HomePage';
import RestaurantsPage from './RestaurantsPage';

export default function App() {
  const { pathname } = window.location;

  const Component = ({
    '/': HomePage,
    '/restaurants': RestaurantsPage,
  }[pathname]) || HomePage;

  return (
    <Component />
  );
}
