import React, { useEffect } from 'react';

import { useDispatch } from 'react-redux';

import { Link } from 'react-router-dom';

import RegionsContainer from './RegionsContainer';
import CategoriesContainer from './CategoriesContainer';
import RestaurantsContainer from './RestaurantsContainer';

import {
  loadInitialData,
} from './actions';

export default function RestaurantsPage() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadInitialData());
  });

  return (
    <div>
      <header>
        <Link to="/">
          <h1>헤더</h1>
        </Link>
      </header>
      <RegionsContainer />
      <CategoriesContainer />
      <RestaurantsContainer />
      {/* <RestaurantsPage /> */}
    </div>
  );
}
