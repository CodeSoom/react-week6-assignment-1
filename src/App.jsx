import { Switch, Route, Link } from 'react-router-dom';

import RestaurantsPage from './RestaurantsPage';
import HomePage from './HomePage';
import AboutPage from './AboutPage';
import NotFoundPage from './NotFoundPage';

export default function App() {
  return (
    <>
      <header>
        <Link to="/">
          <h1>헤더 영역</h1>
        </Link>
      </header>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/about" component={AboutPage} />
        <Route path="/restaurants" component={RestaurantsPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </>
  );
}
