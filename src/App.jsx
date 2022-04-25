import RestaurantsPage from './RestaurantsPage';

export default function App() {
  const { pathname } = window.location;

  if (pathname === '/') {
    return (
      <p>Home</p>
    );
  }
  return (
    <RestaurantsPage />
  );
}
