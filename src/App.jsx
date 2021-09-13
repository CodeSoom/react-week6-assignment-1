import { Switch, Route, Link } from 'react-router-dom';

import HomePage from './HomePage';
import RestaurantsPage from './RestaurantsPage';
import AboutPage from './AboutPage';
import NotFoundPage from './NotFoundPage';

export default function App() {
  return (
    <div>
      <header>
        <h1>
          <Link to="/">헤더 영역</Link>
        </h1>
      </header>
      <Switch>
        <Route exact path="/about" component={AboutPage} />
        <Route exact path="/restaurants" component={RestaurantsPage} />
        <Route exact path="/" component={HomePage} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  );
}
