import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import RestaurantsPage from './components/RestaurantsPage';
import { loadCategories, loadRegions } from './redux_module/asyncActions';

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadCategories());
    dispatch(loadRegions());
  });

  return (
    <RestaurantsPage />
  );
}
