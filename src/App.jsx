import {
  Routes,
  Route,
  Link,
} from 'react-router-dom';

import HomePage from './HomePage';
import AboutPage from './AboutPage';
import RestaurantsPage from './RestaurantsPage';
import RestaurantPage from './RestaurantPage';

export default function App() {
  return (
    <div>
      <header>
        <h1>
          <Link to="/">헤더 영역</Link>
        </h1>
      </header>
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/restaurants" element={<RestaurantsPage />} />
        <Route path="/restaurants" element={<RestaurantsPage />} />
        <Route path="/restaurants/:restaurantId" element={<RestaurantPage />} />
      </Routes>
    </div>
  );
}
