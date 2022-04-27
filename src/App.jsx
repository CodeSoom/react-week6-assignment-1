import RestaurantsPage from './RestaurantsPage';

function HomePage() {
  return (
    <div>
      <p>Home</p>
      <li><a href="/about">About</a></li>
      <li><a href="/restaurants">Restaurants</a></li>
    </div>
  );
}

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
