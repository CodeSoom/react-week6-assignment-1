import React from 'react';
import RestaurantsPage from './RestaurantsPage';
import { loadRegions, loadCategories } from './actions';
import { useDispatch } from 'react-redux';


export default function App() {
  const dispatch = useDispatch();
  dispatch(loadRegions());
  dispatch(loadCategories());
  return (
    <div>
      <RestaurantsPage />
    </div>
  );
}
