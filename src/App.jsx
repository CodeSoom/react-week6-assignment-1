import {
  Routes,
  Route,
  Link,
} from 'react-router-dom';

import AboutPage from './AboutPage';
import HomePage from './HomePage';
import NotFoundPage from './NotFoundPage';
import RestaurantsPage from './RestaurantsPage';

export default function App() {
  return (
    <>
      <h1>
        <Link to="/">헤더</Link>
      </h1>
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="restaurants" element={<RestaurantsPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
}
