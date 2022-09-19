import {
  Routes,
  Route,
  Link,
} from 'react-router-dom';

import HomePage from './HomePage';
import AboutPage from './AboutPage';
import RestaurantsPage from './RestaurantsPage/RestaurantsPage';
import RestaurantDetailPage from './RestaurantDetailPage/RestaurantDetailPage';
import NotFoundPage from './NotFoundPage';

export default function App() {
  return (
    <>
      <header>
        <h1>
          <Link to="/">헤더</Link>
        </h1>
      </header>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/restaurants" element={<RestaurantsPage />} />
        <Route path="/restaurants/:restaurantId" element={<RestaurantDetailPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
}
