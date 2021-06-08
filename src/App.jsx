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

  function HomePage() {
    return (
      <p>
        Home
      </p>
    );
  }

  return (
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route path="/restaurants" component={RestaurantsPage} />
      <Route component={NotFound} />
    </Switch>
  );
}
