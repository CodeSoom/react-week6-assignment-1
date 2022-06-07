import { Route, Routes } from 'react-router-dom';

import AboutPage from './pages/AboutPage';
import HomePage from './pages/HomePage';
import NotFoundPage from './pages/NotFoundPage';

import RestaurantsPage from './components/RestaurantsPage';

/**
 * Header -- 헤더 클릭시 메인 페이지로 돌아가기 (/restaurants click)
 *
 * 1-1 Home -- 메뉴들을 볼수있다? ("/" => {Home, About})
 * 1-2 Home -- onCLick ("/" => About)
 *
 * 2-1 RestaurantDetail -- 레스토랑 정보와 메뉴 목록 볼수있다. ("/restaurants/1" See 양천주가)
 * 2-2 상세 페이지 이동? (click) => 서울,한식 = 양천주가 | (click) => current url
 */

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/restaurants" element={<RestaurantsPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}
