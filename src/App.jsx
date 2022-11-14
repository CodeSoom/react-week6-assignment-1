import { Link, Route, Routes } from 'react-router-dom';

import HomePage from './HomePage';
import AboutPage from '../../restaurant-routing-demo/src/AboutPage';
import RestaurantsPage from './RestaurantsPage';

export default function App() {
  return (
    <div>
      <header>
        <Link to="/">헤더</Link>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/restaurants" element={<RestaurantsPage />} />
          <Route path="*" element={<HomePage />} />
        </Routes>
      </header>
    </div>
  );
}
