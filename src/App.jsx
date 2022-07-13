import { Routes, Route } from 'react-router-dom';

import Header from './components/Header';

import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import NotFoundPage from './pages/NotFoundPage';

import REGIONS from '../fixtures/regions';

function RestaurantsPage() {
  return (
    <ul>
      {
        REGIONS.map((region) => (
          <li key={region.id}>
            {region.name}
          </li>
        ))
      }
    </ul>
  );
}

export default function App() {
  return (
    <div>
      <Header />

      <div>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/restaurants" element={<RestaurantsPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </div>
    </div>
  );
}
