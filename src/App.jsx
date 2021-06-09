import RestaurantsPage from './RestaurantsPage';

function HomePage() {
  return (
    <div>
      <h2>Home</h2>
      <ul>
        <li><a href="/about">About</a></li>
        <li><a href="/restaurants">Restaurants</a></li>
      </ul>
    </div>
  );
}

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
