import { Routes, Route, Link } from 'react-router-dom';

import AboutPage from './AboutPage';
import RestaurantInfoPage from './RestaurantInfoPage';
import HomePage from './HomePage';
import NotFoundPage from './NotFoundPage';
import RestaurantsPage from './RestaurantsPage';

export default function App() {
  return (
    <>
      <h1><Link to="/">헤더</Link></h1>
      <Routes>
        <Route path="/">
          <Route index element={<HomePage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="restaurants">
            <Route index element={<RestaurantsPage />} />
            <Route path=":id" element={<RestaurantInfoPage />} />
          </Route>
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
}
