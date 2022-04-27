import RestaurantsPage from './RestaurantsPage';

import HomePage from './HomePage';

function AboutPage() {
  return (
    <p>About...</p>
  );
}

function NotFoundPage() {
  return (
    <p>404 Not Found</p>
  );
}

export default function App() {
  const { pathname } = window.location;

  const MyComponent = {
    '/': HomePage,
    '/about': AboutPage,
    '/restaurants': RestaurantsPage,
  }[pathname] || NotFoundPage;

  return (
    <MyComponent />
  );
}
