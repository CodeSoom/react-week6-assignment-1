import { Switch, Route } from 'react-router';

import Header from './Header';
import AboutPage from './AboutPage';
import RestaurantsPage from './RestaurantsPage';
import HomePage from './HomePage';

export default function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route path="/about" component={AboutPage} />
        <Route path="/restaurants" component={RestaurantsPage} />
        <Route exact path="/" component={HomePage} />
      </Switch>
    </div>
  );
}
