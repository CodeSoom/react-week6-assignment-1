import { Switch } from 'react-router';

import RestaurantsPage from './RestaurantsPage';

export default function App() {
  return (
    <div>
      <Switch>
        <RestaurantsPage />
      </Switch>
    </div>
  );
}
