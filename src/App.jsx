import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Switch } from 'react-router';

import RestaurantsPage from './pages/RestaurantsPage';
import { loadCategories, loadRegions } from './redux_module/asyncActions';

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadCategories());
    dispatch(loadRegions());
  }, []);

  function NotFound() {
    return (
      <p>
        404 Not Found
      </p>
    );
  }
  return (
    <Switch>
      <Route exact path="/" component={RestaurantsPage} />
      <Route component={NotFound} />
    </Switch>
  );
}
