import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Link, Route, Switch } from 'react-router-dom';

import AboutPage from './AboutPage';
import Homepage from './Homepage';
import RestaurantsPage from './RestaurantsPage';

import {
  loadInitialData,
} from './actions';

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadInitialData());
  });

  return (
    <div>
      <header>
        <h1>
          <Link to="/">헤더</Link>
        </h1>
      </header>

      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route path="/about" component={AboutPage} />
        <Route path="/restaurants" component={RestaurantsPage} />
      </Switch>
    </div>
  );
}
