import { useEffect } from 'react';

import {
  Routes,
  Route,
  Link,
} from 'react-router-dom';

import { useDispatch } from 'react-redux';

import HomePage from './HomePage';
import AboutPage from './AboutPage';
import RestaurantsPage from './RestaurantsPage';
// import RestaurantPage from 'RestaurantPage';
// import NotFoundPage from 'NotFoundPage';

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
        <h1><Link to="/">헤더</Link></h1>
      </header>
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/restaurants" element={<RestaurantsPage />} />
        {/* <Route exact path="/restaurant" component={RestaurantPage} />
        <Route component={NotFoundPage} /> */}
      </Routes>
    </div>
  );
}
