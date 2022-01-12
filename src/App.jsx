import {
  Routes,
  Route,
  Link,
} from 'react-router-dom';

import RestaurantsPage from './Page/RestaurantsPage';
import RestaurantPage from './Page/RestaurantPage';
import HomePage from './Page/HomePage';
import AboutPage from './Page/AboutPage';
import NotFoundPage from './Page/NotFoundPage';

export default function App() {
  return (
    <>
      <h1>
        <Link to="/">
          HEADER
        </Link>
      </h1>
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/restaurants" element={<RestaurantsPage />} />
        <Route path="/restaurants/:id" element={<RestaurantPage />} />
        <Route path="/*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
}
