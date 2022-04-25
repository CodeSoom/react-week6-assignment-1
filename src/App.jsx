import { Routes, Route } from 'react-router-dom';

import Header from './Header';
import RestaurantsPage from './RestaurantsPage';

function HomePage() {
  return (
    <p>Home</p>
  );
}

function NotFoundPage() {
  return (
    <p>404 Not Found</p>
  );
}

export default function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/restaurants" element={<RestaurantsPage />} />
        <Route path="/*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
}
