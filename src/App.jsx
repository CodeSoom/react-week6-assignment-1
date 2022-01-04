import HomePage from './HomePage';
import RestaurantsPage from './RestaurantsPage';

export default function App() {
  const {
    location: { pathname },
  } = window;

  const Mycomponent = {
    '/': HomePage,
    '/restaurants': RestaurantsPage,
  }[pathname];

  return (
    <div>
      <Mycomponent />
    </div>
  );
}
