import {
  Routes,
  Route,
  Link,
} from 'react-router-dom';

import HomePage from './HomePage';
import RestaurantsPage from './RestaurantsPage';
import NotFoundPage from './NotFoundPage';
import AboutPage from './AboutPage';
import DetailPage from './DetailPage';

export default function App() {
  return (
    <div>
      <h1>
        <Link to="/">헤더</Link>
      </h1>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/restaurants" element={<RestaurantsPage />} />
        <Route path="/detail" element={<DetailPage />} />
        <Route path="/*" element={<NotFoundPage />} />
      </Routes>
    </div>
  );
}
