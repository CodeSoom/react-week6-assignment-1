import { useEffect } from 'react';

import { useDispatch } from 'react-redux';

import CategoriesContainer from '../container/CategoriesContainer';

import RegionContainer from '../container/RegionsContainer';

import RestaurantsContainer from '../container/RestaurantsContainer';

import { loadInitialData } from '../redux/actions';

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadInitialData());
  }, []);

  return (
    <div>
      <RegionContainer />
      <CategoriesContainer />
      <RestaurantsContainer />
    </div>
  );
}
