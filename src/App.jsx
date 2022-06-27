import { Route, Routes, Link } from 'react-router-dom';

import AboutPage from './AboutPage';
import HomePage from './HomePage';
import NotFoundPage from './NotFoundPage';
import RestaurantDetail from './RestaurantDetail';
import RestaurantsPage from './RestaurantsPage';

// 0. 지역, 분류 목록을 얻기
// 1. 지역 선택 - Regions <- API (0)
// 2. 분류 선택 - Categories - 한식, 중식, 일식, ... <- API (0)
// 3. 식당 목록 - Restaurants <- API (with region, category) -> 1, 2 모두 완료된 경우

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
        <Route exact path="/restaurants/:restaurantId" element={<RestaurantDetail />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  );
}
