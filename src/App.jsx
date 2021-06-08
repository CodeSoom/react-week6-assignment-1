import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Switch } from 'react-router-dom';

import RestaurantsPage from './pages/RestaurantsPage';
import NotFound from './components/NotFound';
import { loadCategories, loadRegions } from './redux_module/asyncActions';

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadCategories());
    dispatch(loadRegions());
  }, []);

  return (
    <Switch>
      <Route exact path="/" component={RestaurantsPage} />
      <Route component={NotFound} />
    </Switch>
  );
}
