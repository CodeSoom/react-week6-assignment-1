import { Switch, Route } from 'react-router';

import RestaurantsPage from './RestaurantsPage';
import HomePage from './HomePage';

export default function App() {
  return (
    <div>
      <Switch>
        <Route path="/restaurants" component={RestaurantsPage} />
        <Route exact path="/" component={HomePage} />
      </Switch>
    </div>
  );
}
