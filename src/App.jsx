import { Route, Routes } from 'react-router-dom';

import RestaurantsPage from './RestaurantsPage';
import HomePage from './HomePage';
import AboutPage from './AboutPage';

export default function App() {
  return (
    <Routes>
      <Route path="/restaurants" element={<RestaurantsPage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/" element={<HomePage />} />
    </Routes>
  );
}
