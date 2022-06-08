import { Switch, Route, Link } from 'react-router-dom';

import RestaurantsPage from './pages/Restaurants';
import HomePage from './pages/Home';
import AboutPage from './pages/About';
import NotFoundPage from './pages/NotFound';

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
