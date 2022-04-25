import { Link, Route, Routes } from 'react-router-dom';

import RestaurantsPage from './RestaurantsPage';

// 0. 지역, 분류 목록을 얻기
// 1. 지역 선택 - Regions <- API (0)
// 2. 분류 선택 - Categories - 한식, 중식, 일식, ... <- API (0)
// 3. 식당 목록 - Restaurants <- API (with region, category) -> 1, 2 모두 완료된 경우

function HomePage() {
  return (
    <div>
      <h1>HomePage</h1>
      <ul>
        <li>
          <Link to="/restaurants">
            Restaurants
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default function App() {
  return (
    <Routes>
      <Route path="/restaurants" element={<RestaurantsPage />} />
      <Route path="/" element={<HomePage />} />
    </Routes>
  );
}
