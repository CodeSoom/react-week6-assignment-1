import React, { useEffect } from 'react';

import { useDispatch } from 'react-redux';

import RegionsContainer from './RegionsContainer';
import CategoriesContainer from './CategoriesContainer';
import RestaurantsContainer from './RestaurantsContainer';

import {
  loadInitialData,
} from './actions';

function Header() {
  return (
    <h1>헤더</h1>
  );
}

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadInitialData());
  });

  return (
    <div>
      <Header />
      <RegionsContainer />
      <CategoriesContainer />
      <RestaurantsContainer />
    </div>
  );
}
