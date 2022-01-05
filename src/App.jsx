import AboutPage from './AboutPage';
import HomePage from './HomePage';
import RestaurantsPage from './RestaurantsPage';
import NotfoundPage from './NotfoundPage';

export default function App() {
  const {
    location: { pathname },
  } = window;

  const Mycomponent =
    {
      '/': HomePage,
      '/about': AboutPage,
      '/restaurants': RestaurantsPage,
    }[pathname] || NotfoundPage;

  return (
    <div>
      <Mycomponent />
    </div>
  );
}
