import {
  Routes,
  Route,
  Link,
} from 'react-router-dom';

import HomePage from '../Pages/HomePage';
import AboutPage from '../Pages/AboutPage';
import RestaurantsPage from '../Pages/RestaurantsPage';
import NotFoundPage from '../Pages/NotFoundPage';
import RestaurantDetailpage from '../Pages/RestaurantDetailPage';

export default function App() {
  return (
    <>
      <h1>
        <Link to="/">헤더</Link>
      </h1>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/restaurants" element={<RestaurantsPage />} />
        <Route path="/restaurants/:id" element={<RestaurantDetailpage />} />
        <Route path="/*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
}
