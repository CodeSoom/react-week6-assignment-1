import { Link, Route, Routes } from 'react-router-dom';

import HomePage from './HomePage';
import AboutPage from './AboutPage';
import RestaurantsPage from './RestaurantsPage';
import RestaurantsInfoPage from './RestaurantsInfoPage';

export default function App() {
  return (
    <div>
      <header>
        <Link to="/">헤더</Link>
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/restaurants" element={<RestaurantsPage />} />
          <Route path="/restaurants/:id" element={<RestaurantsInfoPage />} />
          <Route path="*" element={<HomePage />} />
        </Routes>
      </header>
    </div>
  );
}
