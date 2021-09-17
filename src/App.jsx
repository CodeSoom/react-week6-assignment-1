import {
  Switch, Route, Link,
} from 'react-router-dom';

import HomePage from './HomePage';
import AboutPage from './AboutPage';
import RestaurantsPage from './RestaurantsPage';
import RestaurantPage from './RestaurantPage';
import NotFoundPage from './NotFoundPage';

export default function App() {
  return (
    <>
      <Link to="/">
        <h1>헤더</h1>
      </Link>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/about" component={AboutPage} />
        <Route exact path="/restaurants" component={RestaurantsPage} />
        <Route path="/restaurants/:restaurantId" component={RestaurantPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </>
  );
}
