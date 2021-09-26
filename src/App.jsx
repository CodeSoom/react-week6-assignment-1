import { Switch, Route } from 'react-router';

import Header from './Header';
import HomePage from './HomePage';
import AboutPage from './AboutPage';
import RestaurantsPage from './RestaurantsPage';
import RestaurantDetailsPage from './RestaurantDetailsPage';
import NotFoundPage from './NotFoundPage';

export default function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/about" component={AboutPage} />
        <Route path="/restaurants/:id" component={RestaurantDetailsPage} />
        <Route path="/restaurants" component={RestaurantsPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  );
}
