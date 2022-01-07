import { useEffect } from 'react';

import { useDispatch } from 'react-redux';

import { Link, Route, Routes } from 'react-router-dom';

import { loadInitialData } from '../actions';

import HomePage from '../Pages/HomePage';
import AboutPage from '../Pages/AboutPage';
import NotFoundPage from '../Pages/NotFoundPage';
import RestaurantsPage from '../Pages/RestaurantsPage';
import RestaurantInfoPage from '../Pages/RestaurantInfoPage';

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadInitialData());
  });

  return (
    <>
      <h1>
        <Link to="/">
          헤더
        </Link>
      </h1>
      <Routes>
        <Route
          path="/"
          element={<HomePage />}
        />
        <Route
          path="/about"
          element={<AboutPage />}
        />
        <Route
          path="/restaurants"
          element={<RestaurantsPage />}
        />
        <Route
          path="/restaurants/:restaurantId"
          element={<RestaurantInfoPage />}
        />
        <Route
          path="*"
          element={<NotFoundPage />}
        />
      </Routes>
    </>
  );
}
