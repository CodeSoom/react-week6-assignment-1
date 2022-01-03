import {
  BrowserRouter,
  Switch,
  Route,
} from 'react-router-dom';

import RestaurantsPage from './RestaurantsPage';

import HomePage from './HomePage';
import NotFoundPage from './NotFoundPage';
import AboutPage from './AboutPage';

export default function App() {
  /* const { location: { pathname } } = window;

  const MyComponent = {
    '/': HomePage,
    '/restaurants': RestaurantsPage,
    '/about': AboutPage,
  }[pathname] || NotFoundPage; */

  return (
    // <MyComponent />
    <BrowserRouter>
      <Switch>
        <Route path="/" component={HomePage} />
      </Switch>
    </BrowserRouter>
  );
}
