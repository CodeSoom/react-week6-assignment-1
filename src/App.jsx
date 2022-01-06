import { Route, Routes } from 'react-router-dom';

import HomePage from './pages/RestaurantsPage';
import AboutPage from './pages/AboutPage';
import RestaurantDetailPage from './pages/RestaurantDetailPage';

export default function App() {
  return (
    <div>
      <main>
        <Routes>
          <Route path="/restaurants" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/restaurants/:id" element={<RestaurantDetailPage />} />
        </Routes>
      </main>
    </div>
  );
}
