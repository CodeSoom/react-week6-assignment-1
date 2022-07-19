import {
  Routes,
  Route,
  Link,
} from 'react-router-dom';

import {
  AboutPage,
  HomePage,
  NotFoundPage,
  RestaurantDetailPage,
  RestaurantsPage,
} from './pages';

export default function App() {
  return (
    <>
      <h1>
        <Link to="/">헤더</Link>
      </h1>
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="restaurants">
          <Route index element={<RestaurantsPage />} />
          <Route path=":restaurantId" element={<RestaurantDetailPage />} />
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
}
