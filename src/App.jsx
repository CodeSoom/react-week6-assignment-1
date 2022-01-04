import { Link, Route, Routes } from 'react-router-dom';

import RestaurantsPage from './RestaurantsPage';
import HomePage from './HomePage';
import AboutPage from './AboutPage';
import NotFoundPage from './NotFoundPage';
import RestaurantPage from './RestaurantPage';

export default function App() {
  // const { location: {pathname } } = window;
  // const MyComponent = {
  //   '/': HomePage,
  //   '/about': AboutPage,
  //   '/restaurants': RestaurantsPage,
  // }[pathname] || NotFoundPage;
  // react-router-dom 버전업되면서 바뀐점.
  // 1. Swtich => Routes
  // 2. exact 는 더이상 사용하지 않는다. (반대로 중첩라우팅 매칭 방식 *를 사용)
  // 3. component => element
  // 4. element 작성방식은 jsx

  return (
    <div>
      <header>
        <h1><Link to="/">헤더 영역</Link></h1>
      </header>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/restaurants" element={<RestaurantsPage />} />
        <Route path="/restaurants/*" element={<RestaurantPage />} />
        <Route path="/*" element={<NotFoundPage />} />
      </Routes>
    </div>
  );
}
