import HomePage from './HomePage';
import RestaurantsPage from './RestaurantsPage';

function NotFoundPage() {
  return (
    <p>Not Found Page</p>
  );
}

function AboutPage() {
  return (
    <p>About...</p>
  );
}

export default function App() {
  const { location: { pathname } } = window;

  const MyComponent = {
    '/': HomePage,
    '/about': AboutPage,
    '/restaurants': RestaurantsPage,
  }[pathname] || NotFoundPage;

  return (
    <MyComponent />
  );
}
