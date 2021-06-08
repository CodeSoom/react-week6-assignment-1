import {
  Link,
  Switch,
  Route,
} from 'react-router-dom';

import RestaurantsPage from './RestaurantsPage';
import RestaurantDetailPage from './RestaurantDetailPage';
import HomePage from './HomePage';
import NotFoundPage from './NotFoundPage';
import AboutPage from './AboutPage';

export default function App() {
  return (
    <>
      <Link to="/">
        <h1>헤더</h1>
      </Link>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/about" component={AboutPage} />
        <Route path="/restaurants/:restaurantId" component={RestaurantDetailPage} />
        <Route path="/restaurants" component={RestaurantsPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </>
  );
}
