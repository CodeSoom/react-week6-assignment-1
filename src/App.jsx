import { Link, Route, Routes } from 'react-router-dom';

import RestaurantsPage from './RestaurantsPage';

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
